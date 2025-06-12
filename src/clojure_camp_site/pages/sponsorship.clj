(ns clojure-camp-site.pages.sponsorship
  (:require
   [markdown.core :as md]
   [clojure.java.io :as io]
   [huff2.core :as h]
   [clojure-camp-site.stars :as stars]))

(defn body []
  [:<>
   [:div {:class "relative"
          :style {:background "#21204c"}}
    [:div {:style {:position "absolute"
                   :top 0
                   :left 0
                   :right 0
                   :bottom 0}}
     [stars/star-field {:w 2000 :h 600}]]
    [:div {:class "flex items-center py-24 gap-4"
           :style {:max-width "75rem"
                   :margin "0 auto"}}
     [:img
      {:style {:height "12rem"}
       :src "/assets/logomark.svg"
       :alt "Clojure Camp Logo - a lambda stylized as a constellation of stars"}]
     [:div {:class "text-white space-y-2 grow"}
      [:h1 {:class "text-5xl"}
       "Clojure Camp"]
      [:h2 {:class "text-6xl font-bold"}
       "Sponsor Prospectus"]]]]
   [:div {:class "p-4"
          :style {:background "#181742"}}
    [:div.prose {:class "text-white"
                 :style {:font-size "24px"
                         :max-width "75rem"
                         :margin "0 auto"}}
     (-> (io/resource "clojure_camp_site/sponsorship.md")
         slurp
         md/md-to-html-string
         h/raw-string)]]])

