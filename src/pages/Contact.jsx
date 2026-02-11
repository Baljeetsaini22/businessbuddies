function Contact() {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
            We’re here to help you grow your business, skills, and career.
            Get in touch with us anytime.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="section-title mb-4">
              Let’s Talk
            </h2>
            <p className="text-slate-600 mb-8">
              Whether you’re looking for business growth, training programs,
              IT courses, or digital marketing services — our team is ready
              to guide you.
            </p>

            <div className="space-y-4 text-slate-700">
              <p>
                📧 <span className="font-semibold">Email:</span>{" "}
                info@businessbuddies.online
              </p>
              <p>
                📞 <span className="font-semibold">Phone:</span>{" "}
                +91 90234 97335
              </p>
              <p>
                📌 <span className="font-semibold">Location:</span>{" "}
                217, 3rd FLOOR, SOHO, OXFORD STREET
              </p>
              <p>
                📍 <span className="font-semibold">Location:</span>{" "}
                Zirakpur, Chandigarh, India
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 p-8 rounded-2xl shadow-sm fade-up">
            <h3 className="text-xl font-semibold text-indigo-700 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center fade-in">
          <h2 className="section-title mb-6">
            Our Location
          </h2>

          <p className="text-slate-600 mb-10">
            We operate digitally across India, with our office located in
            Zirakpur, Chandigarh.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 inline-block">
            <p className="text-slate-700 font-semibold">
              📍 Business Buddies
            </p>
            <p className="text-slate-600">
              217, 3rd FLOOR, SOHO, OXFORD STREET <br /> Zirakpur, Chandigarh – India
            </p>
          </div>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Business Buddies Location"
              src="https://www.google.com/maps?q=Zirakpur%2C%20Chandigarh&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-indigo-700 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow With Us?
          </h2>
          <p className="mb-8 text-indigo-100">
            Join Business Buddies today and start your journey towards
            learning, earning, and success.
          </p>
          <button className="btn-primary bg-white text-indigo-700 hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
