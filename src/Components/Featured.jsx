const Featured = () => {
  return (
    <section id="services" className="bg-zinc-900 pt-20 pb-20">
      <div className="py-8 px-4 mx-auto w-10/12 md:w-10/12 lg:w-10/12 max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center dark:text-white">Services</h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here are services we offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="bg-black px-5 py-5 rounded-xl">
              <h3 className="mb-2 text-xl font-bold text-white pt-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    title: 'Web development',
    description:
      'Empower your online presence with our cutting-edge web development services. Our expert team crafts bespoke websites that are visually stunning, highly functional, and tailored to meet your unique business needs.',
  },
  {
    title: 'Ui/UX design',
    description:
      'Immerse your audience in a seamless and visually captivating digital experience. Our UI/UX design services ensure that every interaction with your platform is intuitive, engaging, and leaves a lasting impression on your users.',
  },
  {
    title: 'Graphics design',
    description:
      "Stand out from the crowd with captivating visual elements. Our graphics design transforms ideas into eye-catching designs, whether it's for branding, marketing materials, or enhancing your online presence.",
  },
  {
    title: 'SEO optimization',
    description:
      'Drive organic traffic and boost your search engine rankings with our SEO optimization services. We implement strategies to enhance your online visibility, increase website traffic, and ultimately improve your ROI.',
  },
  {
    title: 'DevOps',
    description:
      'Optimize your development and operations processes for maximum efficiency and reliability. Our DevOps solutions streamline collaboration, automate workflows, and ensure seamless integration for faster, more reliable software delivery.',
  },
  {
    title: 'Mentorship',
    description:
      "Accelerate your team's growth and skills with our mentorship programs. Our seasoned professionals provide personalized guidance and support, helping your team stay ahead in the rapidly evolving digital landscape.",
  },
]
export default Featured
