import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          About Arch Book Publishing
        </h1>

        {/* Mission Statement */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg">
            At Arch Book Publishing, our mission is to empower authors by
            providing them with the tools, resources, and support needed to
            bring their stories to life. We believe in the power of literature
            to inspire, educate, and entertain, and our goal is to help authors
            reach their full potential by delivering high-quality publications
            to a global audience.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-base sm:text-lg">
            Founded in the year 2024, Arch Book Publishing has grown into a
            leading independent publishing house, specializing in various genres
            from fiction to non-fiction, academic works, and childrens
            literature. Our dedicated team is composed of experienced editors,
            designers, and marketing professionals who work hand-in-hand with
            authors to ensure their work reaches its highest potential.
          </p>
        </section>

        {/* Services */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Our Services
          </h2>
          <ul className="list-disc pl-6 text-base sm:text-lg">
            <li>Manuscript Submission and Review</li>
            <li>Professional Editing and Proofreading</li>
            <li>Custom Book Cover Design</li>
            <li>Marketing and Promotion Strategies</li>
            <li>Distribution to Online and Offline Retailers</li>
          </ul>
        </section>

        {/* Team Members */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg mb-4">
            Our passionate team of professionals is here to guide you through
            every step of the publishing process. Here are some of the key
            members of our team:
          </p>
          <ul className="list-none space-y-4">
            <li>
              <strong>Jane Doe</strong> - Founder & CEO
              <p className="text-sm text-gray-700">
                Jane has over 20 years of experience in the publishing industry
                and has worked with bestselling authors from all over the world.
              </p>
            </li>
            <li>
              <strong>John Smith</strong> - Head of Editorial
              <p className="text-sm text-gray-700">
                John oversees the editorial process, ensuring every manuscript
                meets the highest standards of quality.
              </p>
            </li>
            <li>
              <strong>Emily Johnson</strong> - Art Director
              <p className="text-sm text-gray-700">
                Emily leads our design team, creating captivating book covers
                and interior layouts that bring stories to life.
              </p>
            </li>
          </ul>
        </section>

        {/* Core Values */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Our Core Values
          </h2>
          <ul className="list-disc pl-6 text-base sm:text-lg">
            <li>Integrity in publishing</li>
            <li>Commitment to author success</li>
            <li>Innovation in book marketing and distribution</li>
            <li>Community engagement through literature</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Join Us on Your Publishing Journey
          </h2>
          <p className="text-base sm:text-lg">
            Whether you're an aspiring writer or a seasoned author, Arch Book
            Publishing is here to help you achieve your literary goals. Get in
            touch with us today to start your publishing journey.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
