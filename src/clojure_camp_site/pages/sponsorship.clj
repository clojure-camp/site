(ns clojure-camp-site.pages.sponsorship
  (:require
   [markdown.core :as md]
   [clojure.java.io :as io]
   [hiccup2.core :as h]))

(defn body []
  [:div
   {:class "overflow-hidden bg-gray-900 text-white py-4 px-4 bg-gradient-to-t from-slate-800 via-slate-800 to-slate-700"}

   [:div
    {:class "justify-center text-center"}
    [:h1
     {:class "py-4 text-3xl font-bold tracking-tight sm:text-4xl"}
     "Sponsorship"]
    [:img
     {:class
      "max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm mx-auto",
      :src "/assets/ClojureCamp-SecondaryLogo-RGB-FullColor.png",
      :alt ""}]]
   [:div.prose
    (-> (io/resource "clojure_camp_site/sponsorship.md")
        slurp
        md/md-to-html-string
        h/raw)]])
