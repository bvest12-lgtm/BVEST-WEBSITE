const HowToApply = () => {
  return (
    <section
      className="py-16 px-16 w-fit mx-auto h-fit  mb-10 rounded-2xl overflow-hidden"
      style={{
        boxShadow: "inset 0 0 40px rgba(56, 189, 248, 0.4)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 ">How to Apply</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Devfolio</h3>
            <p className="text-neutral-400">
              Go to our hackathon page on Devfolio platform
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Create Account</h3>
            <p className="text-neutral-400">
              Sign up or log in to your Devfolio account
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Apply Now</h3>
            <p className="text-neutral-400">
              Click the "Apply Now" button and fill out the application form
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2">Start Building</h3>
            <p className="text-neutral-400">
              Wait for confirmation and get ready to hack!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Apply on Devfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
