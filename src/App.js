import React, { useState, useEffect } from "react";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import MainContent from "./components/maincontent/MainContent";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageInfo, setImageInfo] = useState({
    tag: "",
    public_id: "",
  });
  const [UniqueTags, setUniqueTags] = useState();

  useEffect(() => {
    fetch("http://157.245.96.152:4000/api", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setImageInfo(
          result.map((item) => {
            return {
              tag: item.tags,
              public_id: item.public_id,  
            };
          })
        );
        let fetchTags = result
          .map((item) => item.tags[0])
          .sort()
          .filter((e, i, a) => a.indexOf(e) === i);
        setUniqueTags(fetchTags);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <div
        className="container-fluid mt-4 pt-4 px-0 "
        style={{ overflowX: "hidden" }}
      >
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <MainContent
                  {...props}
                  UniqueTags={UniqueTags}
                  imageInfo={imageInfo}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
