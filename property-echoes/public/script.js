(function() {
  window.initLoftCalculator = function() {
    const mountPoint = document.getElementById('loft-calculator');
    if (!mountPoint) return;

    mountPoint.innerHTML = `
      <div class="px-4 w-full">
        <div class="bg-white rounded-[24px] shadow-xl border border-gray-100 p-12 md:p-20 w-full max-w-[560px] mx-auto text-left overflow-hidden">
          <h2 class="text-[#002147] font-bold text-xl md:text-2xl mb-16 text-center">Loft Conversion Cost Calculator</h2>
          
          <div class="space-y-14 px-4 md:px-10">
            <div class="flex flex-col gap-y-12">
              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-5">Conversion Type</label>
                <select id="conv-type" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="velux">Velux / Roof Light</option>
                  <option value="dormer">Dormer</option>
                  <option value="hip-to-gable">Hip-to-Gable</option>
                  <option value="mansard">Mansard</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Loft Size</label>
                <select id="loft-size" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="small">Small (20–30 m²)</option>
                  <option value="medium">Medium (30–40 m²)</option>
                  <option value="large">Large (40–50+ m²)</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Bathroom Included?</label>
                <select id="has-bathroom" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Finish Level</label>
                <select id="finish-level" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Property Type</label>
                <select id="prop-type" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="terraced">Terraced</option>
                  <option value="semi-detached">Semi-detached</option>
                  <option value="detached">Detached</option>
                </select>
              </div>

              <div>
                <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">UK Region</label>
                <select id="region" class="w-full h-12 px-3 border border-gray-200 rounded-lg bg-white focus:ring-1 focus:ring-[#002147] focus:border-[#002147] outline-none transition-all cursor-pointer text-sm text-gray-700">
                  <option value="midlands">Midlands</option>
                  <option value="london">London</option>
                  <option value="south-east">South East</option>
                  <option value="north">North</option>
                </select>
              </div>
            </div>

            <button id="calc-btn" class="w-full h-16 px-8 bg-[#002147] text-white font-bold rounded-full hover:bg-[#003166] transition-all duration-300 shadow-md mt-8 text-sm uppercase tracking-widest">
              Calculate Cost
            </button>

            <div id="results-area" class="mt-8 hidden opacity-0 transition-opacity duration-300">
              <div class="p-6 bg-[#f9fafb] rounded-xl border border-gray-100">
                <div class="space-y-4">
                  <div class="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Est. Total Cost</span>
                    <div class="text-right">
                      <span id="min-cost" class="text-xl md:text-2xl font-bold text-[#002147]">£0</span>
                      <span class="text-lg font-bold text-gray-300 mx-1">-</span>
                      <span id="max-cost" class="text-xl md:text-2xl font-bold text-[#002147]">£0</span>
                    </div>
                  </div>

                  <div id="breakdown-list" class="space-y-3">
                    <!-- Dynamic Rows -->
                  </div>
                </div>

                <p class="text-[9px] text-gray-400 mt-6 text-center italic leading-relaxed">
                  Estimates based on UK averages. Final costs vary by property structure and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const btn = document.getElementById('calc-btn');
    const typeSelect = document.getElementById('conv-type');
    const sizeSelect = document.getElementById('loft-size');
    const bathSelect = document.getElementById('has-bathroom');
    const finishSelect = document.getElementById('finish-level');
    const regionSelect = document.getElementById('region');
    
    const resultsArea = document.getElementById('results-area');
    const minDisplay = document.getElementById('min-cost');
    const maxDisplay = document.getElementById('max-cost');
    const breakdownList = document.getElementById('breakdown-list');

    function format(n) {
      return '£' + Math.round(n).toLocaleString('en-GB');
    }

    btn.onclick = function() {
      const bases = {
        'velux': [20000, 35000],
        'dormer': [35000, 60000],
        'hip-to-gable': [40000, 65000],
        'mansard': [50000, 75000]
      };

      let [min, max] = bases[typeSelect.value];

      if (sizeSelect.value === 'medium') { min *= 1.1; max *= 1.1; }
      else if (sizeSelect.value === 'large') { min *= 1.2; max *= 1.2; }

      let bathMin = 0;
      if (bathSelect.value === 'yes') {
        bathMin = 4000;
        min += bathMin;
        max += 7000;
      }

      if (finishSelect.value === 'premium') { min *= 1.15; max *= 1.15; }

      if (regionSelect.value === 'london') { min *= 1.2; max *= 1.2; }
      else if (regionSelect.value === 'south-east') { min *= 1.1; max *= 1.1; }

      minDisplay.textContent = format(min);
      maxDisplay.textContent = format(max);

      const struct = min * 0.6;
      const insul = min * 0.2;
      const elec = min * 0.1;
      const cont = min * 0.1;

      let listItems = `
        <div class="flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter">
          <span>Structural Work</span>
          <span class="font-bold text-[#002147]">${format(struct)}</span>
        </div>
        <div class="flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter">
          <span>Insulation & Plastering</span>
          <span class="font-bold text-[#002147]">${format(insul)}</span>
        </div>
        <div class="flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter">
          <span>Electrics & Plumbing</span>
          <span class="font-bold text-[#002147]">${format(elec)}</span>
        </div>
      `;
      
      if (bathSelect.value === 'yes') {
        listItems += `
          <div class="flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter">
            <span>Bathroom Install</span>
            <span class="font-bold text-[#002147]">${format(bathMin)}</span>
          </div>
        `;
      }

      listItems += `
        <div class="flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter pt-2 border-t border-gray-200">
          <span>Contingency Allowance</span>
          <span class="font-bold text-[#002147]">${format(cont)}</span>
        </div>
      `;

      breakdownList.innerHTML = listItems;

      resultsArea.classList.remove('hidden');
      setTimeout(() => {
        resultsArea.classList.add('opacity-100');
      }, 50);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoftCalculator);
  } else {
    initLoftCalculator();
  }
})();
