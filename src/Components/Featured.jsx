import { services } from '../Data/service'
import Title from './Title'

const Featured = () => {
  return (
    <section id="services" className="bg-zinc-900 pt-20 pb-20">
      <div className="py-8 px-4 mx-auto w-10/12 md:w-10/12 lg:w-10/12 max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 lg:mb-16">
          <Title title="Services" subTitle="Here are services we offer" />
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
export default Featured
