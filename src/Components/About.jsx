import { about } from '../Data/about'
const About = () => {
  return (
    <>
      <main
        id="About"
        className="lg:relative lg:ml-[-50%] lg:w-[200%] lg:rounded-t-[100%] pt-8 pb-16 lg:pt-16 lg:pb-24 border-soso-transparent border-t-soso-1  bg-black dark:bg-gray-900 antialiased"
      >
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          {about.map((about) => {
            return (
              <article
                key={about.title}
                className="container pt-20 mx-auto w-10/12 md:w-8/12 lg:w-10/12 max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
              >
                <header className="mb-4 lg:mb-6 not-format">
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-center  lg:mb-6 lg:text-4xl text-white">{about.title}</h1>
                  <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src={about.profile_img} alt="Jese Leos" />
                      <div>
                        <a href="#" rel="author" className="text-xl font-bold  text-white">
                          {about.author}
                        </a>
                        <p className="text-base text-gray-500 dark:text-gray-400 pb-2"></p>
                        <a href={about.follow_href} className="text-white px-3 py-1 mt-5 rounded-lg border-2 border-white">
                          Follow me
                        </a>
                      </div>
                    </div>
                  </address>
                </header>
                <p className="lead text-white">{about.about}</p>
                <p className="text-white py-2">{about.more}</p>
                <figure className="pt-5">
                  <img src={about.blog_img} className="w-50 rounded-3xl" alt="" />
                  <figcaption>{about.caption}</figcaption>
                </figure>
              </article>
            )
          })}
        </div>
      </main>
    </>
  )
}
export default About
