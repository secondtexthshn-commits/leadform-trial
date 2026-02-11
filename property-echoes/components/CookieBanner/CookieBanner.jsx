"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../../services/storageUtils";
import "./_cookiebanner.css";

export default function CookieBanner() {
  const [hasMounted, setHasMounted] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(null);
  const [showCustomize, setShowCustomize] = useState(false);
  const [customConsent, setCustomConsent] = useState({
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    setHasMounted(true);
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    if (storedCookieConsent !== null) {
      setCookieConsent(storedCookieConsent);
      applyConsent(storedCookieConsent);
    }
  }, []);

  const applyConsent = (consent) => {
    if (typeof window !== "undefined" && window.gtag) {
      const consentConfig = {
        analytics_storage: consent === true || (typeof consent === "object" && consent.analytics) ? "granted" : "denied",
        ad_storage: consent === true || (typeof consent === "object" && consent.marketing) ? "granted" : "denied",
        ad_user_data: consent === true || (typeof consent === "object" && consent.marketing) ? "granted" : "denied",
        ad_personalization: consent === true || (typeof consent === "object" && consent.marketing) ? "granted" : "denied",
      };
      
      window.gtag("consent", "update", consentConfig);
      
      if (process.env.NODE_ENV === "development") {
        console.log("Cookie Consent Applied:", consentConfig);
      }
    }
  };

  const handleAcceptAll = () => {
    setCookieConsent(true);
    setLocalStorage("cookie_consent", true);
    applyConsent(true);
  };

  const handleDeclineAll = () => {
    setCookieConsent(false);
    setLocalStorage("cookie_consent", false);
    applyConsent(false);
  };

  const handleSaveCustom = () => {
    setCookieConsent(customConsent);
    setLocalStorage("cookie_consent", customConsent);
    applyConsent(customConsent);
  };

  // Prevent hydration mismatch by only rendering after mount
  // and only if consent hasn't been set yet
  if (!hasMounted || cookieConsent !== null) return null;

  return (
    <>
      <div className="cookie-banner-overlay" />
      <div className="cookie-banner-div" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
        <div className="cookie-banner-content">
          <h2 id="cookie-title" className="sr-only">Cookie Consent</h2>
          <p id="cookie-desc" className="cookie-banner-text">
            We use <span className="highlight">cookies</span> to enhance your experience. Read our{" "}
            <Link href="/cookie-policy" className="underline">Cookie Policy</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
          </p>

          {showCustomize ? (
            <div className="cookie-customize-options space-y-4 my-4 p-4 bg-gray-50 rounded text-sm">
              <div className="flex items-center justify-between">
                <span>Essential (Required)</span>
                <span className="text-xs text-gray-500 font-bold uppercase">Always Active</span>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="analytics-cookies">Analytics Cookies</label>
                <input 
                  type="checkbox" 
                  id="analytics-cookies"
                  checked={customConsent.analytics}
                  onChange={(e) => setCustomConsent({...customConsent, analytics: e.target.checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="marketing-cookies">Marketing Cookies</label>
                <input 
                  type="checkbox" 
                  id="marketing-cookies"
                  checked={customConsent.marketing}
                  onChange={(e) => setCustomConsent({...customConsent, marketing: e.target.checked})}
                />
              </div>
              <div className="flex gap-2">
                <button onClick={handleSaveCustom} className="cookie-btn cookie-btn-allow flex-1">Save Preferences</button>
                <button onClick={() => setShowCustomize(false)} className="cookie-btn cookie-btn-decline">Back</button>
              </div>
            </div>
          ) : (
            <div className="cookie-banner-buttons flex flex-wrap gap-2">
              <button onClick={handleAcceptAll} className="cookie-btn cookie-btn-allow">Accept All</button>
              <button onClick={handleDeclineAll} className="cookie-btn cookie-btn-decline">Reject All</button>
              <button onClick={() => setShowCustomize(true)} className="cookie-btn bg-gray-200 text-gray-700 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-gray-300">Customize</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
