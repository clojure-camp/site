(ns clojure-camp-site.content)

(defn content []
  (list

   [:div
    {:id "__docusaurus", :style "pointer-events: auto;"}
    [:div {:id "docusaurus-base-url-issue-banner-container"}]
    [:div
     {:class "relative isolate", :style "pointer-events: auto;"}
     [:div
      {:class
       "overflow-hidden bg-gray-900 text-white py-24 sm:py-32 bg-gradient-to-t from-slate-800 via-slate-800 to-slate-700",
       :style "pointer-events: auto;"}
      [:div
       {:class "mx-auto max-w-7xl px-6 lg:px-8"}
       [:div
        {:class
         "mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"}
        [:div
         {:class "lg:pr-8 lg:pt-4"}
         [:div
          {:class "lg:max-w-lg"}
          [:p
           {:class
            "mt-2 text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl"}
           "The community you need for your programming journey"]
          [:p
           {:class "mt-6 text-lg leading-8 text-white"}
           "Clojure Camp helps new developers build a secure foundation for professional programming success — with Clojure! We connect you with an inclusive, kind, supportive, and fun community of mentors and fellow learners, and with the best resources for learning the best programming language."]
          [:p
           {:class "mt-6 mb-6 text-lg leading-8 text-white"}
           "Clojure Camp is rooted in an equity ethos: it&#39;s open to all while prioritizing the experience of those who face the most hurdles in tech. Our Community is a place where Women, BIPOC folks, and LGBTQ+ folks belong."]
          [:div
           [:div
            {:class "text-gray-700"}
            [:a
             {:href "https://handbook.clojure.camp",
              :class
              "bg-pink-600 text-white font-bold p-2 hover:text-white hover:bg-orange-400 hover:decoration-none"}
             "Start with the Handbook"]]]]]
        [:div
         {:class "justify-center text-center"}
         [:img
          {:class
           "max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm mx-auto",
           :src "/assets/ClojureCamp-SecondaryLogo-RGB-FullColor.png",
           :alt ""}]]]]]
     [:div
      {:class "bg-gray-900 py-16 sm:pt-24 sm:pb-20"}
      [:div
       {:class "mx-auto max-w-7xl px-6 lg:px-8"}
       [:div
        {:class "mx-auto max-w-2xl lg:mx-0"}
        [:h2
         {:class
          "text-3xl font-bold tracking-tight text-white sm:text-4xl"}
         "A Foundation for Beginners"]
        [:p
         {:class "mt-6 text-lg leading-8 text-gray-300"}
         "Learn skills and find guidance for the first couple years of your programming career!"]]
       [:div
        {:class "mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none"}
        [:dl
         {:class
          "grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"}
         [:div
          {:class "flex flex-col"}
          [:dt
           {:class "text-base font-semibold leading-7 text-white"}
           [:div
            {:class
             "mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"}
            [:svg
             {:xmlns "http://www.w3.org/2000/svg",
              :fill "none",
              :viewBox "0 0 24 24",
              :stroke-width "1.5",
              :stroke "currentColor",
              :aria-hidden "true",
              :class "h-6 w-6 text-white"}
             [:path
              {:stroke-linecap "round",
               :stroke-linejoin "round",
               :d
               "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"}]]]
           "Community"]
          [:dd
           {:class
            "mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"}
           [:p
            {:class "flex-auto"}
            "Don&#39;t go it alone! Connect with an inclusive, kind, supportive community. Grow together and help each other get unstuck. Learning with others is more fun and more effective!"]
           [:p
            {:class "mt-6"}
            [:a
             {:href "#",
              :class "text-sm font-semibold leading-6 text-indigo-400"}
             "Learn more"
             [:span {:aria-hidden "true"} "→"]]]]]
         [:div
          {:class "flex flex-col"}
          [:dt
           {:class "text-base font-semibold leading-7 text-white"}
           [:div
            {:class
             "mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"}
            [:svg
             {:xmlns "http://www.w3.org/2000/svg",
              :fill "none",
              :viewBox "0 0 24 24",
              :stroke-width "1.5",
              :stroke "currentColor",
              :aria-hidden "true",
              :class "h-6 w-6 text-white"}
             [:path
              {:stroke-linecap "round",
               :stroke-linejoin "round",
               :d
               "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}]]]
           "Quality Resources"]
          [:dd
           {:class
            "mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"}
           [:p
            {:class "flex-auto"}
            "Find an engaging, curated collection of materials that our mentors and volunteers have developed to help you learn. Learn the technical side of Clojure, and also the human side of growing a programming career."]
           [:p
            {:class "mt-6"}
            [:a
             {:href "#",
              :class "text-sm font-semibold leading-6 text-indigo-400"}
             "Learn more"
             [:span {:aria-hidden "true"} "→"]]]]]
         [:div
          {:class "flex flex-col"}
          [:dt
           {:class "text-base font-semibold leading-7 text-white"}
           [:div
            {:class
             "mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500"}
            [:svg
             {:xmlns "http://www.w3.org/2000/svg",
              :fill "none",
              :viewBox "0 0 24 24",
              :stroke-width "1.5",
              :stroke "currentColor",
              :aria-hidden "true",
              :class "h-6 w-6 text-white"}
             [:path
              {:stroke-linecap "round",
               :stroke-linejoin "round",
               :d
               "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"}]]]
           "Fun Events"]
          [:dd
           {:class
            "mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300"}
           [:p
            {:class "flex-auto"}
            "Virtually meet up with the broader Clojure Camp community to connect, show off your work, seek advice, and generally have a real good time!"]
           [:p
            {:class "mt-6"}
            [:a
             {:href "#",
              :class "text-sm font-semibold leading-6 text-indigo-400"}
             "Learn more"
             [:span {:aria-hidden "true"} "→"]]]]]]]]]
     [:div
      {:class "bg-sky-900 py-16 sm:pt-24 sm:pb-20"}
      [:div
       {:class "mx-auto max-w-7xl px-6 lg:px-8"}
       [:div
        {:class "mx-auto max-w-3xl lg:mx-0"}
        [:h2
         {:class
          "text-3xl font-bold tracking-tight text-white sm:text-4xl"}
         "A Home Base for Mentors"]
        [:p
         {:class "mt-6 text-lg leading-8 text-gray-300"}
         "Connect with mentees and learners through our community, and get support from your fellow mentors! All of us at Clojure Camp love teaching, and we also know that it can be a solitary and taxing endeavor. We&#39;re creating a sustainable mentor community where we can learn from each other and offer each other camaraderie."]]]]
     [:div
      {:class "bg-orange-50 py-16 sm:pt-24 sm:pb-20"}
      [:div
       {:class "mx-auto max-w-7xl px-6 lg:px-8"}
       [:div
        {:class "mx-auto max-w-3xl lg:mx-0 text-gray-900"}
        [:h2
         {:class
          "text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl"}
         "Our Vision"]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "What if Clojure became the most beginner-friendly language on the planet?"]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "Clojure Camp aims to be the “Clojure Welcoming Committee,” the definitive starting point for junior developers who want to learn Clojure. We will help these learners by guiding them to resources that can help them become proficient at Clojure and build relationships in the community, from friendships to collaborations to even employment."]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "Camps can’t function without organizers and teachers. Clojure Camp aims to be a resource for mentors and teachers in the community by:"]
        [:ul {:class "list-disc ml-5 mb-6"}
         [:li
          "Providing a distribution channel for the learning resources they create"]
         [:li "Providing tools for pairing learners with mentors"]
         [:li
          "Hosting events to socialize, give each other moral support, and help each other get unstuck"]
         [:li
          "Developing and sharing resources for effective execution of learning projects"]]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "We believe that learning Clojure is a great long-term investment because it helps people learn a better way of approaching programming, and because it brings creative satisfaction. We want to make it accessible to more people."]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "We believe that"
         [:em "how"]
         "we operate is just as important as what we do. We aim to create a positive, beginner-friendly, inclusive environment for learners and leaders alike. We want all who get involved with Clojure Camp to leave with a sense of having been appreciated, respected, and supported."]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "In particular, we want to unambiguously communicate that people from marginalized groups can participate in a safe environment, where they&#39;ll be welcomed and won&#39;t face harassment, discrimination, or other forms of exclusion. We want to be diligent about creating an environment that delivers on that promise."]
        [:h2
         {:class
          "text-3xl font-bold tracking-tight text-sky-800 sm:text-3xl"}
         "Helping new Clojure Developers"]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "Our thesis is that we can help new Clojure developers by owning the market category of “learning and support for junior developers interested in Clojure.” To own a market category is to become the unambiguous choice for meeting a need. By owning this category, we can eliminate the confusion and analysis paralysis newcomers experience when embarking on their Clojure journey"]
        [:p {:class "mt-6 text-lg leading-8"} "To get there, we will:"]
        [:ul {:class "list-disc ml-5 mb-6"}
         [:li "Provide a p2p study matchmaking service"]
         [:li "Develop our own materials and events"]
         [:li
          "Host a series of zoom meetups for beginners to answer questions around a given topic (like project organization, REPL usage, functional programming, etc)"]
         [:li
          "Provide pointers to curated, opinionated learning materials from the broader Clojure community that present clear paths to proficiency"]
         [:li
          "Guide developers to community hubs (Slack, ClojureVerse) and employment opportunitities"]
         [:li
          "Cultivate community spaces that support sharing wins, asking for help, and general camaraderie and good vibes. Doinga great job of creating an environment where devs feel safety and support ast hey grow will help set the Clojure ecosystem apart."]]
        [:h2
         {:class
          "text-3xl font-bold tracking-tight text-sky-800 sm:text-3xl"}
         "Helping Organizers and Mentors"]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "Clojure is one of the most beloved programming languages on the planet. There are many members of our community who love to help others learn, and we want to help them be as successful as possible in their teaching and mentoring projects. Such projects might include Clojure tutorials or virtual meetups."]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "We want to support each other by providing a venue where we can:"]
        [:ul {:class "list-disc ml-5 mb-6"}
         [:li "Connect and socialize. Going alone = burnout!"]
         [:li "Share project updates"]
         [:li
          "Provide feedback and brainstorming sessions and otherwise help each other get unstuck"]
         [:li
          "Host knowledge sharing sessions. E.g., what are effective ways to teach recursion?"]]
        [:p
         {:class "mt-6 text-lg leading-8"}
         "Clojure Camp will also help to curate and present these teaching projects so that they can find an audience."]]]]]]))
