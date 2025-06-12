(ns clojure-camp-site.pages.sponsorship
  (:require
   [markdown.core :as md]
   [clojure.java.io :as io]
   [hiccup2.core :as h]))

(defn body []
  [:div
   {:class "overflow-hidden bg-gray-900 text-white bg-gradient-to-t from-slate-800 via-slate-800 to-slate-700"}
   [:div
    {:class "justify-center text-center py-6 px-4"}
    [:h1
     {:class "py-4 text-orange-300 text-3xl font-bold tracking-tight sm:text-4xl"}
     "Clojure Camp Sponsor Prospectus"]
    [:img
     {:class
      "max-w-xs md:max-w-xs sm:max-w-xs lg:max-w-xs xl:max-w-sm mx-auto",
      :src "/assets/ClojureCamp-SecondaryLogo-RGB-FullColor.png",
      :alt ""}]]
   [:div
    {:class "bg-gray-900 py-2 px-24"}
    [:div.prose {:style "font-size: 24px"}
     (-> (io/resource "clojure_camp_site/sponsorship.md")
         slurp
         md/md-to-html-string
         h/raw)]]])

