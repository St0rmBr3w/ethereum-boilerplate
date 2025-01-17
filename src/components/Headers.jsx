/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ]

export default function Headers() {
  return (
    <><><div className="relative bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <svg
                      className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                  >
                      <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>

                 <Popover>
                      <Transition
                          as={Fragment}
                          enter="duration-150 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-100 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                      >
                      </Transition>
                  </Popover>

                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                      <div className="sm:text-center lg:text-left">
                          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                              <span className="block xl:inline">Data to enrich your</span>{' '}
                              <span className="block text-indigo-600 xl:inline">online business</span>
                          </h1>
                          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                              fugiat veniam occaecat fugiat aliqua.
                          </p>
                          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                              <div className="rounded-md shadow">
                                  <a
                                      href="#"
                                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                  >
                                      Get started
                                  </a>
                              </div>
                              <div className="mt-3 sm:mt-0 sm:ml-3">
                                  <a
                                      href="#"
                                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                  >
                                      Live demo
                                  </a>
                              </div>
                          </div>
                      </div>
                  </main>
              </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full z-0"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="" />
          </div>
      </div>
          <>
              <div className="py-12 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="lg:text-center">
                          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                              A better way to send money
                          </p>
                          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                              accusamus quisquam.
                          </p>
                      </div>

                      <div className="mt-10">
                          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                              {features.map((feature) => (
                                  <div key={feature.name} className="relative">
                                      <dt>
                                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                              <feature.icon className="h-6 w-6" aria-hidden="true" />
                                          </div>
                                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                      </dt>
                                      <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                  </div>
                              ))}
                          </dl>
                      </div>
                  </div>
              </div>
          </></>
          <>
              <div className="bg-gray-50">
                  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                          <span className="block">Ready to dive in?</span>
                          <span className="block text-indigo-600">Start your free trial today.</span>
                      </h2>
                      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                          <div className="inline-flex rounded-md shadow">
                              <a
                                  href="#"
                                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                              >
                                  Get started
                              </a>
                          </div>
                          <div className="ml-3 inline-flex rounded-md shadow">
                              <a
                                  href="#"
                                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                              >
                                  Learn more
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </></>
  )
}

