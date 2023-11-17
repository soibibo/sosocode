import heroImg from '../assets/images/soibibo-profile-pic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa6'

function Jumbotron() {
  return (
    <section className="dark:bg-gray-900 pt-40 container mx-auto md:mr-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="soso-shadow sm:py-5 sm:px-5 md:px-11 md:py-5  lg:px-11 lg:py-5 mr-auto place-self-center lg:col-span-7 backdrop-blur-sm  backdrop-hue-rotate-50 xl:bg-grad-soso-secondary-dark  bg-grad-soso-secondary-dark  rounded-3xl mx-auto ps-5 pe-5 md:order-2 order-2">
          <h6 className=" bg-slate-400 inline-flex text-center px-4 py-3 my-5  rounded-t-3xl rounded-s-none  rounded-3xl font-bold">Hello I'm</h6>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Soibibo Amakiri</h1>
          <div className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">
            Experienced frontend developer with a passion for creating user-friendly and visually appealing web applications. With 5 years of experience, I have a strong foundation in HTML,
            CSS, and JavaScript, as well as proficiency in modern frontend frameworks such as React.
            <div className="pt-3">
              <div className="pt-1">
                <FaLinkedin className="inline" />
                <a className="text-white inline  font-medium px-3" href="tel:+234 803 874 7806">
                  @amakirisoibibo
                </a>
              </div>
              <FaEnvelope className="inline" />
              <a className="text-white font-medium inline px-3" href="mailto:Amakirisoibibo@gmail.com">
                Amakirisoibibo@gmail.com
              </a>
            </div>
            <div className="pt-1">
              <FaPhone className="inline" />
              <a className="text-white inline font-medium px-3" href="tel:+234 803 874 7806">
                +234 803 874 7806
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center float-right justify-center px-5 py-3 mr-3 mb-6 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-slate-900 transition-all ease-in-out duration-700"
            >
              <span>
                <FontAwesomeIcon icon={faDownload} className="pe-3" />
              </span>
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex hero-img  md:order-1 order-1">
          <img src={heroImg} className="w-96 h-96 mx-auto object-cover  rounded-full" alt="mockup" style={{ height: '25rem' }} />
        </div>
      </div>
    </section>
  )
}

export default Jumbotron
