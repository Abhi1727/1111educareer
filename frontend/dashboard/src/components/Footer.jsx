import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Apnaconsultant. All rights reserved.</p>
        <p className="mt-2">123 Consulting Lane, Business City, BC 12345</p>
      </div>
    </footer>
  );
};

export default Footer;
