import React from 'react'
import { Tabs, Tab, Card, CardBody, CardHeader, Button } from '@nextui-org/react'
import { FaEye } from 'react-icons/fa6'
import { Pagination } from '@nextui-org/react'
import Title from './Title'
import { web } from '../Data/portfolio'
import { product } from '../Data/portfolio'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = React.useState(1)
  return (
    <div className="flex w-full flex-col pt-20" id="portfolio">
      <div className="max-w-screen-md mx-auto mt-15 my-10 lg:mb-10">
        <Title title="Portfolio" subTitle="Here are some of my projects and designs" />
      </div>
      <Tabs className="mx-auto bg-soso-dark" color="warning" aria-label="Options">
        <Tab className="font-bold" key="web" title="Web Applications" activeStyle={{ backgroundColor: 'blue' }} activeClassName="active-tab">
          <Card className="">
            <CardBody className="bg-zinc-700">
              <div className="py-8 px-4 mx-auto max-w-screen-xl md:max-w-screen-lg lg:max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white text-center dark:text-white">Web Applications</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                  {web.map((web) => {
                    return (
                      <div key={web.id} className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                        <figure className="pt-1 px-1">
                          <img src={web.img} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                          <figcaption className="text-white">
                            <div className="inline-block py-5 pl-3">{web.title}</div>
                            <a href={web.href} target="_blank" className="">
                              <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                                <FaEye />
                                Live preview
                              </Button>
                            </a>
                          </figcaption>
                        </figure>
                      </div>
                    )
                  })}
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
              <div className="py-8 px-4 mx-auto max-w-screen-xl md:max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-white text-center dark:text-white">Ui/UX Designs</h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                  {product.map((product) => {
                    return (
                      <div key={product.id} className="bg-black px-1 py-1 sm:px-1 sm:py-1 rounded-3xl">
                        <figure className="pt-1 px-1">
                          <img src={product.img} className="w-50 rounded-3xl rounded-t-xl object-cover" alt="" />
                          <figcaption className="text-white">
                            <div className="inline-block py-5 pl-3">{product.title}</div>
                            <a href={product.href} target="_blank" className="">
                              <Button color="primary" className=" float-right my-3 bg-soso-dark hover:bg-soso-light">
                                <FaEye />
                                Live preview
                              </Button>
                            </a>
                          </figcaption>
                        </figure>
                      </div>
                    )
                  })}
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
