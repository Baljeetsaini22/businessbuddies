import logo from '/footer.png';
function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div>
          <div className="w-30">
                      <img src={logo} alt="" className="w-full" />
                    </div>
          <p className="text-indigo-100 text-sm leading-relaxed mb-4">
            Empowering individuals and businesses to learn, earn, and grow
            through smart training, digital solutions, and real opportunities.
          </p>
          <p className="text-sm text-indigo-200">
            Learn • Grow • Succeed
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white transition-colors">
                Courses
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-indigo-100 text-sm">
            <li>Business Growth</li>
            <li>Business Training</li>
            <li>IT Courses & Training</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Customer Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-indigo-100 text-sm">
            <li>📍 217, 3rd FLOOR, SOHO, OXFORD STREET</li>
            <li>📌  Zirakpur, Chandigarh</li>
            <li>📧 info@businessbuddies.online</li>
            <li>📞 +91 90234 97335</li>
          </ul>

          <a
            href="/contact"
            className="inline-block mt-6 btn-primary bg-white text-indigo-700 hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-indigo-100">
          <p>© 2022 Business Buddies. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with 💜 for growth & success
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
