import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Copy, Check, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FormValues {
  name: string;
  mobile: string;
  location: string;
  projectType: string;
  description: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  location?: string;
}

interface EnquiryFormProps {
  initialTopic?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialTopic = '' }) => {
  const [searchParams] = useSearchParams();
  const queryTopic = searchParams.get('topic') || '';

  const [values, setValues] = useState<FormValues>({
    name: '',
    mobile: '',
    location: '',
    projectType: initialTopic || queryTopic || 'Residential Independent Home',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrepared, setIsPrepared] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Synchronize topic if query param changes
  useEffect(() => {
    if (queryTopic) {
      setValues((prev) => ({ ...prev, projectType: queryTopic }));
    }
  }, [queryTopic]);

  // Validate Indian mobile numbers
  // Matches: 10 digits, optional +91 or 0 prefix, optional spaces or dashes
  const validateMobile = (mobile: string): boolean => {
    const cleaned = mobile.replace(/[\s\-\(\)]/g, '');
    const indianMobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    return indianMobileRegex.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!values.mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile phone number.';
    } else if (!validateMobile(values.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number (e.g. +91 98765 43210).';
    }

    if (!values.location.trim()) {
      newErrors.location = 'Please share your town or site plot location.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPrepared(true);
      setIsCopied(false);
    }
  };

  // Generate clean, readable enquiry brief for copying or calling
  const generatedBrief = `--- DSR CIVIL CONSTRUCTIONS ENQUIRY BRIEF ---
Project Lead: ${values.name}
Mobile Contact: ${values.mobile}
Site / Town Location: ${values.location}
Project Type: ${values.projectType || 'General Civil Consultation'}
Notes / Vision: ${values.description.trim() ? values.description.trim() : 'Discussing plot suitability, structural frame and scope.'}
Submission Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
Website: ${siteConfig.domain}
---------------------------------------------`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(generatedBrief);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3500);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = generatedBrief;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3500);
    }
  };

  return (
    <div className="w-full">
      {!isPrepared ? (
        /* Form Surface on White Canvas with Silver Dividers */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          {/* Name Field */}
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label htmlFor="enquiry-name" className="block text-sm font-semibold text-dsr-navy">
                Your Name <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              {errors.name && (
                <span className="text-xs text-red-600 flex items-center font-medium" role="alert">
                  <AlertCircle className="w-3 h-3 mr-1 inline" />
                  {errors.name}
                </span>
              )}
            </div>
            <input
              id="enquiry-name"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Anand Kumar"
              value={values.name}
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`w-full px-4 py-3 bg-white border rounded-sm text-dsr-navy placeholder:text-dsr-navy/40 text-base min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-dsr-roof ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-dsr-silver hover:border-dsr-roof/50'
              }`}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label htmlFor="enquiry-mobile" className="block text-sm font-semibold text-dsr-navy">
                Mobile Number <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              {errors.mobile && (
                <span className="text-xs text-red-600 flex items-center font-medium" role="alert">
                  <AlertCircle className="w-3 h-3 mr-1 inline" />
                  {errors.mobile}
                </span>
              )}
            </div>
            <input
              id="enquiry-mobile"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="e.g. +91 98765 43210"
              value={values.mobile}
              onChange={(e) => {
                setValues({ ...values, mobile: e.target.value });
                if (errors.mobile) setErrors({ ...errors, mobile: undefined });
              }}
              className={`w-full px-4 py-3 bg-white border rounded-sm text-dsr-navy placeholder:text-dsr-navy/40 text-base min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-dsr-roof ${
                errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-dsr-silver hover:border-dsr-roof/50'
              }`}
              aria-invalid={errors.mobile ? 'true' : 'false'}
            />
            <p className="text-xs text-dsr-navy/60 mt-1">
              Indian 10-digit mobile numbers with optional +91.
            </p>
          </div>

          {/* Town / Plot Location Field */}
          <div>
            <div className="flex justify-between items-baseline mb-1.5">
              <label htmlFor="enquiry-location" className="block text-sm font-semibold text-dsr-navy">
                Town or Site Location <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              {errors.location && (
                <span className="text-xs text-red-600 flex items-center font-medium" role="alert">
                  <AlertCircle className="w-3 h-3 mr-1 inline" />
                  {errors.location}
                </span>
              )}
            </div>
            <input
              id="enquiry-location"
              type="text"
              required
              placeholder="e.g. Salem, Namakkal, Erode, Coimbatore or nearby plot"
              value={values.location}
              onChange={(e) => {
                setValues({ ...values, location: e.target.value });
                if (errors.location) setErrors({ ...errors, location: undefined });
              }}
              className={`w-full px-4 py-3 bg-white border rounded-sm text-dsr-navy placeholder:text-dsr-navy/40 text-base min-h-[48px] transition-colors focus:outline-none focus:ring-2 focus:ring-dsr-roof ${
                errors.location ? 'border-red-500 bg-red-50/20' : 'border-dsr-silver hover:border-dsr-roof/50'
              }`}
              aria-invalid={errors.location ? 'true' : 'false'}
            />
          </div>

          {/* Project Type (Optional, preserved topic) */}
          <div>
            <label htmlFor="enquiry-type" className="block text-sm font-semibold text-dsr-navy mb-1.5">
              Project Type <span className="text-xs text-dsr-navy/60 font-normal">(Optional)</span>
            </label>
            <select
              id="enquiry-type"
              value={values.projectType}
              onChange={(e) => setValues({ ...values, projectType: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-dsr-silver rounded-sm text-dsr-navy text-base min-h-[48px] focus:outline-none focus:ring-2 focus:ring-dsr-roof"
            >
              <option value="A new home">A new home (Residential independent build)</option>
              <option value="A space for business">A space for business (Commercial / Retail)</option>
              <option value="Turnkey Civil Delivery">Turnkey Civil Delivery & Contracting</option>
              <option value="Changes to an existing building">Changes to an existing building (Renovation / Extension)</option>
              <option value="Architectural Planning">Architectural Planning & Municipal Approvals</option>
              <option value="Industrial Warehouse Scope">Industrial Sheds, Warehouses & PEB Structures</option>
              <option value="Plot Development & Compound Walls">Compound Walls, Site Levelling & Plot Infrastructure</option>
              <option value="Shaded Verandah Concept">Concept: Shaded Verandah</option>
              <option value="Stairwell Lightwell Concept">Concept: Stairwell Lit from Above</option>
              <option value="Recessed Entrance Concept">Concept: Recessed Shopfront Entrance</option>
            </select>
          </div>

          {/* Short Description (Optional) */}
          <div>
            <label htmlFor="enquiry-desc" className="block text-sm font-semibold text-dsr-navy mb-1.5">
              Tell us about your plot or ideas <span className="text-xs text-dsr-navy/60 font-normal">(Optional)</span>
            </label>
            <textarea
              id="enquiry-desc"
              rows={4}
              placeholder="e.g. Plot dimensions, number of floors, ground floor room requirements, or target timeline."
              value={values.description}
              onChange={(e) => setValues({ ...values, description: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-dsr-silver rounded-sm text-dsr-navy placeholder:text-dsr-navy/40 text-base focus:outline-none focus:ring-2 focus:ring-dsr-roof"
            />
          </div>

          {/* Action Button: Prepare my enquiry */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full min-h-[50px] inline-flex items-center justify-center px-6 py-3.5 bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy font-bold text-base tracking-wide rounded-sm shadow-sm transition-all duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-dsr-navy"
            >
              <span>Prepare my enquiry</span>
              <ArrowRight className="ml-2 w-5 h-5 text-dsr-navy" />
            </button>
            <p className="text-xs text-dsr-navy/70 text-center mt-2.5">
              Generates a structured brief ready to discuss with our civil team.
            </p>
          </div>

        </form>
      ) : (
        /* Prepared Brief View: Copyable Brief + Next Step Call Directives */
        <div className="bg-dsr-ice-wash border-2 border-dsr-cyan/50 p-6 sm:p-8 rounded-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-dsr-silver">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-dsr-gold rounded-full" />
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-dsr-navy">
                Enquiry Brief Ready
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsPrepared(false)}
              className="min-h-[44px] px-3 py-1.5 text-xs font-semibold text-dsr-roof hover:text-dsr-navy flex items-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" />
              <span>Edit Details</span>
            </button>
          </div>

          {/* One line next step explanation */}
          <p className="text-sm font-semibold text-dsr-navy bg-white p-3.5 border-l-4 border-dsr-roof rounded-xs shadow-xs">
            Call our team directly or paste this brief into your message.
          </p>

          {/* Monospaced Copyable Box */}
          <div className="relative">
            <pre className="p-4 bg-dsr-navy text-dsr-silver text-xs sm:text-sm font-mono rounded-sm overflow-x-auto whitespace-pre-wrap leading-relaxed border border-dsr-civil">
              {generatedBrief}
            </pre>

            <button
              type="button"
              onClick={handleCopyBrief}
              className={`min-h-[44px] absolute top-3 right-3 px-3.5 py-2 text-xs font-bold rounded-xs flex items-center space-x-1.5 transition-all ${
                isCopied
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-dsr-gold hover:bg-dsr-gold-hover text-dsr-navy shadow-xs'
              }`}
              aria-label="Copy brief to clipboard"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied brief!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-dsr-navy" />
                  <span>Copy enquiry</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Call Links Priority */}
          <div className="space-y-3 pt-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-dsr-civil">
              Connect directly with our engineering team:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.primaryPhone.tel}
                className="min-h-[48px] flex items-center justify-center space-x-2 px-4 py-3 bg-dsr-civil text-white hover:bg-dsr-roof font-semibold text-sm rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-dsr-cyan" />
                <span>Call {siteConfig.primaryPhone.display}</span>
              </a>
              <a
                href={siteConfig.secondaryPhone.tel}
                className="min-h-[48px] flex items-center justify-center space-x-2 px-4 py-3 bg-white text-dsr-navy border border-dsr-civil hover:bg-dsr-ice-wash font-semibold text-sm rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-dsr-roof" />
                <span>Call {siteConfig.secondaryPhone.display}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
