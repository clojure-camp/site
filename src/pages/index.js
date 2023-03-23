import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { BoltIcon, BookOpenIcon, ChatBubbleLeftRightIcon, InboxIcon, TrashIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/outline'


import styles from './index.module.css';

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

function GetNotified(){
 return(
<div>
  <div className="text-gray-700">
    <a href="https://www.meetup.com/clojure-camp"
       className="bg-pink-600 text-white font-bold p-2 hover:text-white hover:bg-orange-400 hover:decoration-none">
      Join the Meetup!
    </a>
  </div>
</div>
)
}

const learnerItems = [
  {
    name: 'Community',
    description:
      "Don't go it alone! Connect with an inclusive, kind, supportive community. Grow together and help each other get unstuck. Learning with others is more fun and more effective!",
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Quality Resources',
    description:
      "Find an engaging, curated collection of materials that our mentors and volunteers have developed to help you learn. Learn the technical side of Clojure, and also the human side of growing a programming career.",
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Fun Events',
    description:
      "Virtually meet up with the broader Clojure Camp community to connect, show off your work, seek advice, and generally have a real good time!",
    href: '#',
    icon: BoltIcon
  },
]

function Learners(){
  return (
    <div className="bg-gray-900 py-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Foundation for Beginners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Learn skills and find guidance for the first couple years of your programming career!
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {learnerItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {item.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{item.description}</p>
                  <p className="mt-6">
                    <a href={item.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
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
                connect you with an inclusive, kind, supportive, and fun
                community of mentors and fellow learners, and with the best
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

        { Learners() }

    { /* <Features/> */ }
    </div>
  )
}
