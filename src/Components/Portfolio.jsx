import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader, Button } from '@nextui-org/react'
import p1 from '../assets/images/portfolio/p1.webp'
import p2 from '../assets/images/portfolio/p2.webp'
import p3 from '../assets/images/portfolio/p3.webp'
import p4 from '../assets/images/portfolio/p4.webp'
import p5 from '../assets/images/portfolio/p5.webp'
import p6 from '../assets/images/portfolio/p6.webp'
import pu1 from '../assets/images/portfolio/pu1.webp'
import pu2 from '../assets/images/portfolio/pu2.webp'
import { FaEye } from 'react-icons/fa6'
import { Pagination } from '@nextui-org/react'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <div className="flex w-full flex-col pt-20" id="portfolio">
      <div className="max-w-screen-md mx-auto mt-15 my-10 lg:mb-10">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center dark:text-white">Portfolio</h2>
        <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here are some of my projects and designs</p>
      </div>
      <Tabs className="mx-auto bg-soso-dark" color="warning" aria-label="Options">
        <Tab className="font-bold" key="web" title="Web Applications" activeStyle={{ backgroundColor: 'blue' }} activeClassName="active-tab">
          <Card className="">
            <CardBody className="bg-zinc-700">
              <div className="py-8 px-4 mx-auto max-w-screen-xl md:max-w-screen-lg sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white text-center dark:text-white">Web Applications</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p1} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Credib.io</div>
                        <a href="https://credib.io" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p2} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Stormcell Tech</div>
                        <a href="https://stormcelltech.com" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p3} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">21st100 Network</div>
                        <a href="#" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p4} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Schchat</div>
                        <a href="https://schchat.com" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p5} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Peterfem Associate</div>
                        <a href="https://peterfemassociates.com" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={p6} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Partste.ng</div>
                        <a href="https://partste.ng" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mx-auto">
                <Pagination total={10} color="warning" page={currentPage} onChange={setCurrentPage} />
                <div className="flex gap-2 mx-auto">
                  <Button size="sm" variant="flat" color="warning" onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}>
                    Previous
                  </Button>
                  <Button size="sm" variant="flat" color="warning" onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                    Next
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab className="font-bold" key="ui" title="Ui/UX design" activeStyle={{ backgroundColor: 'blue' }} activeClassName="active-tab">
          <Card className="">
            <CardBody className="bg-zinc-700 ">
              <div className="py-8 px-4 mx-auto max-w-screen-xl md:max-w-screen-lg sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white text-center dark:text-white">Ui/UX Designs</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={pu1} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">N-Youth League</div>
                        <a href="https://www.figma.com/file/E7qXXED6xTCEhCk3URtXEu/NYLC-(Copy)?type=design&node-id=529%3A764&mode=design&t=YxdVOi5ndFCRPxaG-1" target="_blank" className="">
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                    <figure className="pt-1 px-1">
                      <img src={pu2} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                      <figcaption className="text-white">
                        <div className="inline-block py-5 pl-3">Wasig</div>
                        <a
                          href="https://www.figma.com/file/pFmWAJdQecKh5oAzBGsnGC/care-professionals?type=design&node-id=0%3A1&mode=design&t=l0Zer9lZlRvCqWCQ-1"
                          target="_blank"
                          className=""
                        >
                          <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                            <FaEye />
                            View
                          </Button>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mx-auto">
                <Pagination total={10} color="warning" page={currentPage} onChange={setCurrentPage} />
                <div className="flex gap-2 mx-auto">
                  <Button size="sm" variant="flat" color="warning" onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}>
                    Previous
                  </Button>
                  <Button size="sm" variant="flat" color="warning" onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                    Next
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
