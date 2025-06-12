(ns clojure-camp-site.stars
  (:require
    [clojure.string :as string]))

(defn rand-in-range [low high]
  (+ low (rand (- high low))))

(defn star-field
  [{:keys [w h]}]
  (let [star-count 300
        base-star-size 12]
    [:svg.star-field
     {:xmlns "http://www.w3.org/2000/svg"
      :width "100%"
      :height "100%"
      :preserveAspectRatio "xMidYMid slice"
      :viewBox (string/join " " [0 0 w h])}
     (into [:g]
           (repeatedly
             star-count
             (fn []
               [:circle {:cx (rand-in-range 0 w)
                         :cy (rand-in-range 0 h)
                         :r (* base-star-size
                               (rand-nth (concat
                                           (repeat 5 0.05)
                                           (repeat 5 0.075)
                                           (repeat 4 0.01)
                                           (repeat 3 0.15)
                                           (repeat 2 0.02)
                                           (repeat 1 0.025))))
                         :fill "#fff"}])))]))


