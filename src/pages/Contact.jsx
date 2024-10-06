import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Contact Information
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Feel free to reach out to us for any further inquiries or assistance.
        </p>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            General Inquiries
          </h2>
          <ul className="list-none">
            <li>
              Email:{" "}
              <a
                href="mailto:egbokasamuel1999@gmail.com"
                className="text-blue-600"
              >
                egbokasamuel1999@gmail.com
              </a>
            </li>
            <li>Phone: +234-8020546868</li>
            <li>Business Hours: Monday to Friday, 9:00 AM - 6:00 PM (EST)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Submission Inquiries
          </h3>
          <ul className="list-none">
            <li>
              Email:{" "}
              <a
                href="mailto:submissions@archbookpublishing.com"
                className="text-blue-600"
              >
                submissions@archbookpublishing.com
              </a>
            </li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg sm:text-xl font-semibold mb-2">
            Mailing Address
          </h4>
          <ul className="list-none">
            <li>Arch Book Publishing</li>
            <li>123 Arch Street,</li>
            <li>New York, NY 10114</li>
          </ul>
        </div>

        <div className="mb-6">
          <h5 className="text-lg sm:text-xl font-semibold mb-2">
            Social Media
          </h5>
          <ul className="list-none">
            <li>
              <a
                href="https://facebook.com"
                className="text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
