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
    <a href="https://handbook.clojure.camp"
       className="bg-pink-600 text-white font-bold p-2 hover:text-white hover:bg-orange-400 hover:decoration-none">
      Start with the Handbook
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

function Mentors(){
  return (
    <div className="bg-sky-900 py-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Home Base for Mentors</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Connect with mentees and learners through our community, and get support from your fellow mentors!
            All of us at Clojure Camp love teaching, and we also know that it can be a solitary and taxing endeavor.
            We're creating a sustainable mentor community where we can learn from each other and offer each other
            camaraderie.
          </p>
        </div>
     </div>
    </div>
  )
}

function OurVision() {
return (
    <div className="bg-orange-50 py-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0 text-gray-900">
          <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl">Our Vision</h2>
          <p className="mt-6 text-lg leading-8">
            What if Clojure became the most beginner-friendly language on the planet?
          </p>

          <p className="mt-6 text-lg leading-8">
Clojure Camp aims to be the “Clojure Welcoming Committee,” the definitive
starting point for junior developers who want to learn Clojure. We will help
these learners by guiding them to resources that can help them become proficient
at Clojure and build relationships in the community, from friendships to
collaborations to even employment.
          </p>

          <p className="mt-6 text-lg leading-8">
Camps can’t function without organizers and teachers. Clojure Camp aims to be a
resource for mentors and teachers in the community by:
          </p>

          <ul>
            <li>Providing a distribution channel for the learning resources they create</li>
            <li>Providing tools for pairing learners with mentors</li>
            <li>Hosting events to socialize, give each other moral support, and help each other get unstuck</li>
            <li>Developing and sharing resources for effective execution of learning projects</li>
          </ul>

          <p className="mt-6 text-lg leading-8">
            We believe that learning Clojure is a great long-term investment
            because it helps people learn a better way of approaching
            programming, and because it brings creative satisfaction. We want to
            make it accessible to more people.
          </p>
          <p className="mt-6 text-lg leading-8">
            We believe that <em>how</em> we operate is just as important as what
            we do. We aim to create a positive, beginner-friendly, inclusive
            environment for learners and leaders alike. We want all who get
            involved with Clojure Camp to leave with a sense of having been
            appreciated, respected, and supported.
          </p>
          <p className="mt-6 text-lg leading-8">
            In particular, we want to unambiguously communicate that people from
            marginalized groups can participate in a safe environment, where
            they'll be welcomed and won't face harassment, discrimination, or
            other forms of exclusion. We want to be diligent about creating an
            environment that delivers on that promise.
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-3xl">Helping new Clojure Developers</h2>

          <p className="mt-6 text-lg leading-8">
            Our thesis is that we can help new Clojure developers by owning the
            market category of “learning and support for junior developers
            interested in Clojure.” To own a market category is to become the
            unambiguous choice for meeting a need. By owning this category, we
            can eliminate the confusion and analysis paralysis newcomers
            experience when embarking on their Clojure journey
          </p>

          <p className="mt-6 text-lg leading-8">
            To get there, we will:
          </p>
          <ul>
            <li>Provide a p2p study matchmaking service</li>
            <li>Develop our own materials and events</li>
            <li>Host a series of zoom meetups for beginners to answer questions around a given topic (like project organization, REPL usage, functional programming, etc)</li>
            <li>Provide pointers to curated, opinionated learning materials from the broader Clojure community that present clear paths to proficiency</li>
            <li>Guide developers to community hubs (Slack, ClojureVerse) and employment opportunitities</li>
            <li>Cultivate community spaces that support sharing wins, asking for help, and general camaraderie and good vibes. Doinga great job of creating an environment where devs feel safety and support ast hey grow will help set the Clojure ecosystem apart.</li>
          </ul>

          <h2 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-3xl">Helping Organizers and Mentors</h2>

          <p className="mt-6 text-lg leading-8">
            Clojure is one of the most beloved programming languages on the
            planet. There are many members of our community who love to help
            others learn, and we want to help them be as successful as possible
            in their teaching and mentoring projects. Such projects might
            include Clojure tutorials or virtual meetups.
          </p>

          <p className="mt-6 text-lg leading-8">
            We want to support each other by providing a venue where we can:
          </p>

          <ul>
            <li>Connect and socialize. Going alone = burnout!</li>
            <li>Share project updates</li>
            <li>Provide feedback and brainstorming sessions and otherwise help each other get unstuck</li>
            <li>Host knowledge sharing sessions. E.g., what are effective ways to teach recursion?</li>
          </ul>

          <p className="mt-6 text-lg leading-8">
            Clojure Camp will also help to curate and present these teaching projects so that they can find an audience.
          </p>

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

              <p className="mt-6 mb-6 text-lg leading-8 text-white">
                Clojure Camp is rooted in an equity ethos: it's open to all
                while prioritizing the experience of those who face the most
                hurdles in tech. Our Community is a place where Women, BIPOC
                folks, and LGBTQ+ folks belong.
              </p>


              {GetNotified()}
            </div>
          </div>

          {/* right column */}
          <div class="justify-center text-center">
                             <img
                     class="max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm mx-auto"
                     src="/img/ClojureCamp-SecondaryLogo-RGB-FullColor.png"
                     alt=""
          />
          </div>

       </div>
      </div>
    </div>


     {/* break */}

        { Learners() }
        { Mentors() }
        { OurVision() }

    { /* <Features/> */ }
    </div>
  )
}
