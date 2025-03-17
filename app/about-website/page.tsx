'use client';

const AboutWeb = () => {
  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-[50vh] bg-gray-300 flex items-center">
          {/* Background Image */}
          <img
            src="images/art11.jpg" // Replace with your image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Text Container */}
          <div className="relative z-10 bg-white text-black p-4 px-[100px] w-[fit-content] ml-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ABOUT<br />WEBSITE
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Who Are We</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            We are a platform designed to support and promote artists specializing in both fine art and digital art,
            enabling them to effectively showcase and sell their work. We are committed to building a community that
            connects artists with art enthusiasts across the globe. Our focus is on providing comprehensive services,
            ranging from sales support and artwork promotion to delivering guidance on improving art quality.
          </p>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">MISSION</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            We are committed to being a bridge connecting artists with buyers by providing opportunities to showcase and sell their work in the global market. We also support the growth of art in the digital era by offering an accessible, secure, and high-quality platform for all artists.
          </p>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">VISION</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our vision is to be a leading platform driving the art and technology industries by creating an environment that empowers artists to express their creativity and present their work to people around the world. We aim to make art widely accessible and drive social change through art.
          </p>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>

        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">RULE & REGULATION</h2>
          <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6">
            <li>Membership Registration and Identity Verification</li>
            <ul className="list-none pl-6">
              <li>- Artists and buyers who wish to use the website must register as members, providing accurate and complete information.</li>
              <li>- Artists must go through an identity verification process before gaining the right to list their work for sale on the platform.</li>
            </ul>
            <li>Uploading and Selling Artwork</li>
            <ul className="list-none pl-6">
              <li>- Uploaded works must be created by the artist and must not infringe on copyrights or violate any laws.</li>
              <li>- Uploading or selling content that is inappropriate, such as violent media or content that discriminates based on race, religion, or gender, is prohibited.</li>
              <li>- Artists must provide complete details about their work, including the title, size, price, and a description.</li>
            </ul>
            <li>Setting Artwork Prices</li>
            <ul className="list-none pl-6">
              <li>- Artists have the right to set their own prices, but they must adhere to any limitations established by the website.</li>
              <li>- The website may charge fees or take a commission on sales, which the artist must accept.</li>
            </ul>
            <li>Copyright and Ownership Rights</li>
            <ul className="list-none pl-6">
              <li>- Artists retain the copyright to their work after a sale, except where otherwise specified.</li>
              <li>- Buyers have ownership rights over the purchased work but do not gain related copyright unless explicitly agreed upon.</li>
            </ul>
            <li>Payments and Fees</li>
            <ul className="list-none pl-6">
              <li>- Payments are processed through the website's secure system, and fees may be deducted as specified.</li>
              <li>- Compensation to artists will be made under specified terms, such as within a set period following a sale.</li>
            </ul>
            <li>Cancellation and Refunds</li>
            <ul className="list-none pl-6">
              <li>- Cancellations must comply with the website's refund policy.</li>
              <li>- Artists and buyers must accept the terms for handling issues related to the quality or damage of artwork.</li>
            </ul>
            <li>Website Usage Guidelines</li>
            <ul className="list-none pl-6">
              <li>- The website must not be used for illegal activities or actions that harm the reputation of artists or the website.</li>
              <li>- All artists and users must follow the rules and policies set by the website and show respect toward others.</li>
            </ul>
            <li>Penalties</li>
            <ul className="list-none pl-6">
              <li>- The website reserves the right to suspend or terminate the account of any user who violates the rules without prior notice.</li>
              <li>- Artists who infringe copyrights or violate website rules may have their accounts temporarily or permanently suspended.</li>
            </ul>
            <li>Policy Amendments and Updates</li>
            <ul className="list-none pl-6">
              <li>- The website reserves the right to modify or update rules and policies at any time, with announcements made through designated channels.</li>
            </ul>
          </ul>
        </div>

        {/* Horizontal Line with Padding */}
        <div className="mx-[170px]">
          <hr className="my-8 border-t border-gray-300" />
        </div>
      </div>
    </>
  );
};

export default AboutWeb;
