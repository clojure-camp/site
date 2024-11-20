(ns clojure-camp-site.run
  (:require
   [babashka.http-server :as http]
   [babashka.fs :as fs]
   [clojure-camp-site.root]))

(defn build! []
  (fs/copy-tree "./resources/clojure_camp_site/assets" "static/assets" {:replace-existing true})
  (spit "static/index.html" (clojure-camp-site.root/html)))

(defn serve []
  (build!)
  (http/serve {:port 7777 :dir "static"})
  @(promise))