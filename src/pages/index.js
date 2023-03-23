import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { BoltIcon, UserGroupIcon, ScaleIcon } from '@heroicons/react/20/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  }



const features = [
  {
    name: 'Clojure',
    description: `Clojure's philosophy of simplicity and stability means you can stop fighting your language and focus on real features.`,
    icon: UserGroupIcon,
  },
  {
    name: 'Code',
    description: `Donut builds on proven libraries for single-page app development, taking care of the grunt work so you can do the work that matters.`,
    icon: ScaleIcon,
  },
  {
    name: 'Community',
    description: `Whether you want to create an app or hack on the framework, join a kind and enthusiastic community as we help each other build something cool!`,
    icon: BoltIcon,
  },
]

// bg-gradient-to-r from-fuchsia-600 to-pink-600
// pink neon bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
// blue coral bg-gradient-to-r from-blue-400 to-emerald-400
// darker-blue bg-gradient-to-r from-blue-600 to-sky-800

export function Features() {
  return (
    <div className="
      bg-gradient-to-r from-teal-100 to-sky-200

         py-12
">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
      <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              {/* <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"> */}
              {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
              {/* </div> */}
              <p className="text-xl font-bold leading-6 mb-0 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 text-base text-gray-900">{feature.description}</dd>
          </div>
        ))}
        </dl>
      </div>
    </div>
  )
}

function handleSubmit(e){
  e.preventDefault();
  const form=e.target;
  const data = new FormData(form);
  form.querySelector("input[type=email]").disabled=true;
  form.querySelector("input.name").disabled=true;
  form.querySelector("button").disabled=true;
  form.querySelector("span.submitting").classList.remove("hidden");

  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  }).then(() => {
    form.reset();
    form.querySelector("input[type=email]").disabled=false;
    form.querySelector("input.name").disabled=false;
    form.querySelector("button").disabled=false;
    form.querySelector("span.submitting").classList.add("hidden");
    form.querySelector("span.submitted").classList.remove("hidden");
  })
}


function Hero() {
return(
      <div className="relative isolate px-6  lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                         <img
                     className="max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm"
                     src="/img/ClojureCamp-MasterLogo-RGB-FullColor.png"
                     alt=""
          />

          </div>
          <div className="text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">

              Clojure Camp aims to be the Clojure Welcoming Committee, helping
              new developers build a secure foundation for professional
              programming success &mdash; with Clojure! We connect new
              developers with a passionate, kind, and caring community of
              mentors and fellow learners, and with the Internet’s best
              resources for learning the best programming language.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
)
}

function GetNotified(){
 return(
<div>
                <div className="text-gray-700">
                  <a href="https://www.meetup.com/clojure-camp"
                     className="bg-pink-600 text-white font-bold p-2 hover:text-white hover:bg-orange-400 hover:decoration-none">
                    Join us on Meetup!
                  </a>

                </div>
              </div>
)
}


export default function Home() {
  return (
      <div class="relative isolate">

    <div className="overflow-hidden bg-gray-900 text-white py-24 sm:py-32 bg-gradient-to-t from-slate-800 via-slate-800 to-slate-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* left column */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">
                The community you need for your programming journey
              </p>
              <p className="mt-6 text-lg leading-8 text-white">

                Clojure Camp helps new developers build a secure foundation for
                professional programming success &mdash; with Clojure! We
                connect you with a passionate, kind, and caring community of
                mentors and fellow learners, and with the Internet’s best
                resources for learning the best programming language.


              </p>

              {GetNotified()}
            </div>
          </div>

          {/* right column */}
          <div class="justify-center text-center">
                             <img
                     class="max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm mx-auto"
                     src="/img/ClojureCamp-MasterLogo-RGB-FullColor.png"
                     alt=""
          />
          </div>

       </div>
      </div>
    </div>


     {/* break */}


      <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No server? No problem.</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    { /* <Features/> */ }
    </div>
  )
}
