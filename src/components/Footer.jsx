// import React from 'react';

const Footer = () => {
  return (
    <div style={{ background: 'black', color: 'white' }}>
      <div style={{ maxWidth: '6xl', padding: '80px 0', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '500', fontSize: '20px', marginBottom: '16px' }}>Product</div>
            <a href="#">Overview</a>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <a href="#">Features</a>
              <div style={{ backgroundColor: '#48BB78', color: 'white', padding: '4px 8px', marginLeft: '8px' }}>New</div>
            </div>
            <a href="#">Tutorials</a>
            <a href="#">Pricing</a>
            <a href="#">Releases</a>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '500', fontSize: '20px', marginBottom: '16px' }}>Company</div>
            <a href="#">About Us</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Partners</a>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '500', fontSize: '20px', marginBottom: '16px' }}>Legal</div>
            <a href="#">Cookies Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Law Enforcement</a>
            <a href="#">Status</a>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '500', fontSize: '20px', marginBottom: '16px' }}>Follow Us</div>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Dribbble</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <svg
            height="32"
            viewBox="0 0 120 28"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: 'currentColor' }}>
            {/* SVG path data */}
          </svg>
        </div>
        <div style={{ paddingTop: '24px', fontSize: '14px' }}>
          © 2022 Chakra Templates. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
