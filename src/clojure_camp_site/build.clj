(ns clojure-camp-site.build
  (:require
   [babashka.fs :as fs]
   [clojure-camp-site.root]))

(defn build! []
  (fs/copy-tree "./resources/clojure_camp_site/assets" "static/assets" {:replace-existing true})
  (spit "static/index.html" (clojure-camp-site.root/html)))
