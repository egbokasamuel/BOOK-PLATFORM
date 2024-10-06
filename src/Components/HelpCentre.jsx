import React from "react";

const HelpCentre = () => {
  return (
    <div className="bg-gray-300 text-black p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Help Centre</h1>
        <p className="text-base sm:text-lg mb-4">
          Welcome to the Arch Book Publishing Help Centre! Below you'll find
          answers to frequently asked questions (FAQs) regarding the publishing
          process, services we offer, and how we can support you on your
          publishing journey. If you need further assistance, feel free to
          contact our support team.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-2">FAQs</h2>

        <div className="mb-6">
          <h1 className="text-lg sm:text-xl font-bold mb-2">
            Submitting Your Manuscript
          </h1>
          <h3 className="font-semibold mb-1">
            Q: How do I submit my manuscript to Arch Book Publishing?
          </h3>
          <p className="mb-4">
            A: To submit your manuscript, visit our Submission Portal and follow
            the step-by-step guide. Make sure your manuscript follows our
            formatting guidelines, which you can find on the portal.
          </p>

          <h3 className="font-semibold mb-1">
            Q: What file format should I use for submission?
          </h3>
          <p className="mb-4">
            A: We accept manuscripts in Microsoft Word (.doc/.docx) and PDF
            formats. Ensure that your document is properly formatted according
            to our Submission Guidelines.
          </p>

          <h3 className="font-semibold mb-1">Q: Is there a submission fee?</h3>
          <p className="mb-4">
            A: No, there is no fee to submit your manuscript for initial review.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-lg sm:text-xl font-bold mb-2">
            Publishing Process
          </h1>

          <h3 className="font-semibold mb-1">
            Q: What happens after I submit my manuscript?
          </h3>
          <p className="mb-4">
            A: After submission, your manuscript will go through an initial
            evaluation by our editorial team. If it fits our publishing
            criteria, we will reach out to discuss the next steps, including
            editing, cover design, and marketing plans.
          </p>

          <h3 className="font-semibold mb-1">
            Q: How long does the review process take?
          </h3>
          <p className="mb-4">
            A: The review process typically takes 2 to 4 weeks. If your
            manuscript is selected for further consideration, we will notify you
            via email.
          </p>

          <h3 className="font-semibold mb-1">
            Q: Can I make changes to my manuscript after submission?
          </h3>
          <p className="mb-4">
            A: Yes, minor revisions are allowed before the final approval of
            your manuscript. Once the editing process begins, we will work
            closely with you to finalize the content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;
