(ns clojure-camp-site.build
  (:require
   [babashka.fs :as fs]
   [clojure-camp-site.base :as base]
   [clojure-camp-site.pages :as pages]))

(defn build! []
  (fs/copy-tree "./resources/clojure_camp_site/assets" "static/assets" {:replace-existing true})
  ;; Build and copy over all pages to the static directory
  (doseq [[path f] pages/pages]
    (spit (str "static/" path "/index.html") (base/build f)))
  (spit "static/CNAME" "clojure.camp"))
