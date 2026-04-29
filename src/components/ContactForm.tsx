"use client";

export default function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully! We will get back to you soon."); }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name *</label>
          <div className="mt-2">
            <input type="text" name="name" id="name" required className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone *</label>
          <div className="mt-2">
            <input type="tel" name="phone" id="phone" required className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-gray-900">Business Name</label>
          <div className="mt-2">
            <input type="text" name="businessName" id="businessName" className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">Website URL (if any)</label>
          <div className="mt-2">
            <input type="url" name="url" id="url" className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">Service Needed *</label>
        <div className="mt-2">
          <select id="service" name="service" required className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6">
            <option value="">Select a service</option>
            <option>Website Design</option>
            <option>Website Redesign</option>
            <option>Landing Page</option>
            <option>SEO Services</option>
            <option>Google Business Profile</option>
            <option>Not Sure - Need Guidance</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message / Requirements</label>
        <div className="mt-2">
          <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1266F1] sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <button type="submit" className="w-full rounded-md bg-[#1266F1] px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1266F1] transition-colors">
        Submit Request
      </button>
    </form>
  );
}
