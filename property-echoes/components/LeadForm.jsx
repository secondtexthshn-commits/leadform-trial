'use client';

import React, { useState } from 'react';

const LeadForm = ({ leadSource }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    intent: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    
    if (!formData.location) newErrors.location = 'Location or Postcode is required';
    if (!formData.intent) newErrors.intent = 'Please select your primary intent';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted to proceed';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        lead_source: leadSource || '',
      };

      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        location: '',
        intent: '',
        consent: false,
      });
    } catch (err) {
      setServerError(err.message || 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Get Free Local Property Insights</h2>
      <p className="text-gray-600 mb-8 text-sm sm:text-base">Thinking of buying or selling? Get area-specific advice tailored to your needs.</p>
      
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center animate-in fade-in zoom-in duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">Submission Successful!</h3>
          <p className="text-green-700">Thank you for your interest. Our experts will be in touch soon with your personalized property insights.</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-sm font-semibold text-green-800 hover:text-green-900 underline underline-offset-4"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name Field (Optional) */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Name <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field (Required) */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                {errors.email}
              </p>
            )}
          </div>

          {/* Location Field (Required) */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Location / Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              aria-required="true"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="e.g. London or SW1A 1AA"
            />
            {errors.location && (
              <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                {errors.location}
              </p>
            )}
          </div>

          {/* Intent Field (Required) */}
          <div>
            <label htmlFor="intent" className="block text-sm font-semibold text-gray-700 mb-1.5">
              What are you looking to do? <span className="text-red-500">*</span>
            </label>
            <select
              id="intent"
              name="intent"
              value={formData.intent}
              onChange={handleChange}
              required
              aria-required="true"
              className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white ${
                errors.intent ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Select an option</option>
              <option value="Buying">I'm looking to buy</option>
              <option value="Selling">I'm looking to sell</option>
              <option value="Letting">I'm looking to let</option>
              <option value="Estate Agent Enquiry">I'm an agent enquiring</option>
            </select>
            {errors.intent && (
              <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                {errors.intent}
              </p>
            )}
          </div>

          {/* GDPR Consent (Required) */}
          <div className="flex flex-col">
            <div className="flex items-start">
              <div className="flex items-center h-6">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className={`h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-all duration-200 cursor-pointer ${
                    errors.consent ? 'border-red-500' : ''
                  }`}
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="consent" className="font-medium text-gray-700 cursor-pointer">
                  I consent to being contacted regarding property insights and services *
                </label>
              </div>
            </div>
            {errors.consent && (
              <p className="mt-1 text-xs font-medium text-red-600 ml-8">{errors.consent}</p>
            )}
          </div>

          {serverError && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-md text-sm text-red-600 text-center font-medium">
              {serverError}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-md text-base font-bold text-white transition-all duration-200 ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:transform active:scale-[0.98]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Get Free Insights'}
            </button>
            <p className="mt-4 text-[11px] text-gray-500 text-center leading-relaxed">
              We respect your privacy. No spam. Property-related communication only. <br className="hidden sm:block" />
              By submitting, you agree to our terms of service and privacy policy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default LeadForm;

