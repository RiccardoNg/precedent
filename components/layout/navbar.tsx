"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const products = [
  { name: 'BMI Calculation API', description: 'Get a better understanding of your traffic', href: 'api/bmi', icon: ChartPieIcon },
  { name: 'ECG Analytic API', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Stethescope Record API', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Blood Pressure API', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Smart Scale API', description: 'Yamada Smart Scale', href: 'api/bmi', icon: SquaresPlusIcon },
  { name: 'ADA Lucloi Advisor API', description: 'Build strategic funnels that will convert', href: 'api/lucloi', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    
    // <>
    //   <Disclosure as="nav" className="bg-gray-800">{({ open }) => (
        <>
          <SignInModal />
            <div
              className={`fixed top-0 w-full flex justify-center ${
                scrolled
                  ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                  : "bg-white/0"
              } z-30 transition-all`}
            >
              <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
                <Link href="/" className="flex items-center font-display text-2xl">
                  <Image
                    src="/delago-logo.png"
                    alt="Precedent logo"
                    width="48"
                    height="48"
                    className="mr-2 rounded-sm"
                  ></Image>
                  <p>Delago AI</p>
                </Link>
                {/* <div className="flex items-center lg:gap-x-12">
                  <div className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href="/api" >
                      API docs
                    </Link>
                  </div>
                  <div className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href="https://delago.vn" >
                      Delago
                    </Link>
                  </div>
                  <div className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href="/api" >
                      About us
                    </Link>
                  </div>
                </div> */}
                
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                  <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                      API docs
                      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </Popover.Button>
                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                              <a href={item.href} className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                          >
                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                  </Popover>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    About Delago
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Safety information
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Feedback
                  </a>
                </Popover.Group>
                <div>
                  {session ? (
                    <UserDropdown session={session} />
                  ) : (
                    <button
                      className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                      onClick={() => setShowSignInModal(true)}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
        </>
    //   )}</Disclosure>
      
    // </>
  );
}
