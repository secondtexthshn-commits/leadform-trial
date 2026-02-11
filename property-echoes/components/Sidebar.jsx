import React from 'react';
import LeadForm from './LeadForm';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-80 flex-shrink-0">
      <div className="sticky top-8 space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Enquiry</h3>
          <LeadForm leadSource="sidebar-form" />
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 text-sm mb-4">
            Our experts are available Mon-Fri, 9am-6pm.
          </p>
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
