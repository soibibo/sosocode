const Featured = () => {
  return (
    <section id="services" className="bg-zinc-900 pt-20 pb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center dark:text-white">Services</h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here are services we offer</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white pt-3">Web development</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.
            </p>
          </div>
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white pt-3">Ui/UX design</h3>
            <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white pt-3">Graphics design</h3>
            <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white">SEO optimization</h3>
            <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
          </div>
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white">DevOps</h3>
            <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
          </div>
          <div className="bg-black px-3 py-3 rounded-xl">
            <h3 className="mb-2 text-xl font-bold text-white">Mentorship</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Featured
