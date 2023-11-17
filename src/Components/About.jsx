import aboutImg from '../assets/images/soibibo-profile-pic.jpeg'
import aboutBlog from '../assets/images/soibibo-blog.png'
const About = () => {
  return (
    <>
      <main
        id="About"
        className="lg:relative lg:ml-[-50%] lg:w-[200%] lg:rounded-t-[100%] pt-8 pb-16 lg:pt-16 lg:pb-24 border-soso-transparent border-t-soso-1  bg-black dark:bg-gray-900 antialiased"
      >
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="container pt-20 mx-auto w-10/12 md:w-8/12 lg:w-10/12 max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src={aboutImg} alt="Jese Leos" />
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold  text-white">
                      Soibibo Amakiri
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400 pb-2">Web Developer, educator & CEO TechOptima</p>
                    <a href="" className="text-white px-3 py-1 mt-5 rounded-lg border-2 border-white">
                      Follow me
                    </a>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl text-white">About and Biography</h1>
            </header>
            <p className="lead text-white">
              Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
              datepickers.
            </p>
            <p className="text-white">
              Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.
            </p>
            <p className="text-white">
              But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called Flowbite</a>. It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.
            </p>
            <figure className="pt-5">
              <img src={aboutBlog} className="w-50 rounded-3xl" alt="" />
              <figcaption>Digital art by Anonymous</figcaption>
            </figure>
            <h2 className="text-white">Getting started with Flowbite</h2>
            <p className="text-white">
              First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just
              copy-paste from the documentation.
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
export default About
