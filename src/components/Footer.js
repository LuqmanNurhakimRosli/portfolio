import React from 'react';

function Footer(props) {
  return (
    <footer className={`${props.darkMode ? 'bg-black text-white' : 'bg-white text-black'} py-8`}>
      <div className="w-full p-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
            {/* About Me Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">About Me</h2>
              <p className={props.darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Tengah intern sekarang ni kat Cyberjaya, so far jadi best decision sebab jauh gak merantau dan banyak sacrifise daripada my family.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={`hover:${props.darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${props.darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${props.darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className={`hover:${props.darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Me Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Contact Me</h2>
              <p className={props.darkMode ? 'text-gray-400' : 'text-gray-600'}>Email: luqman@dagangnet.com</p>
              <p className={props.darkMode ? 'text-gray-400' : 'text-gray-600'}>Location: Cyberjaya, Malaysia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={`w-full border-t ${props.darkMode ? 'border-gray-700' : 'border-gray-300'} pt-4 text-center`}>
        <p className={props.darkMode ? 'text-gray-400' : 'text-gray-600'} style={{ fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} ReactFacts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;