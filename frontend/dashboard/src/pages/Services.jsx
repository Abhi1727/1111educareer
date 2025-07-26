import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Consulting Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Planning</h2>
          <p className="text-gray-700 mb-4">We help businesses define their vision, set clear objectives, and develop actionable strategies to achieve sustainable growth and competitive advantage.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market Analysis</li>
            <li>Goal Setting & KPI Development</li>
            <li>Roadmap Creation</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Digital Transformation</h2>
          <p className="text-gray-700 mb-4">Guiding companies through the adoption of digital technology to improve processes, culture, and customer experiences, meeting evolving market demands.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Technology Integration</li>
            <li>Process Automation</li>
            <li>Data Analytics & Insights</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Organizational Development</h2>
          <p className="text-gray-700 mb-4">Fostering a high-performance culture by optimizing organizational structure, leadership development, talent management, and change management initiatives.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Leadership Coaching</li>
            <li>Talent Management</li>
            <li>Change Management</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial Advisory</h2>
          <p className="text-gray-700 mb-4">Providing expert financial guidance to optimize financial performance, manage risks, and make informed investment decisions for long-term success.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Budgeting & Forecasting</li>
            <li>Investment Strategy</li>
            <li>Risk Assessment</li>
          </ul>
        </div>

        {/* Service 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Marketing & Sales Optimization</h2>
          <p className="text-gray-700 mb-4">Developing and implementing effective marketing and sales strategies to enhance brand visibility, generate leads, and drive revenue growth.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market Research</li>
            <li>Sales Funnel Optimization</li>
            <li>Brand Positioning</li>
          </ul>
        </div>

        {/* Service 6 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Operations Improvement</h2>
          <p className="text-gray-700 mb-4">Streamlining business processes, improving efficiency, and reducing costs to enhance productivity and operational excellence.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Process Mapping & Redesign</li>
            <li>Supply Chain Optimization</li>
            <li>Quality Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
