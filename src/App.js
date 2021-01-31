import React, { useState, useEffect } from "react";
import ModalRow from "./components/modal-row/ModalRow";
import Footer from "./components/footer/Footer"

import { ReactComponent as TreeLineOne } from "./assets/tree-line-01.svg";
import { ReactComponent as TreeLineTwo } from "./assets/tree-line-02.svg";
import { ReactComponent as MountainRangeOne } from "./assets/mountain-range-01.svg";
import { ReactComponent as MountainRangeTwo } from "./assets/mountain-range-02.svg";
import { ReactComponent as CloudsOne } from "./assets/clouds-01.svg";

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { API } from 'aws-amplify'
import { listSiteDatas } from './graphql/queries'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faHeadphonesAlt,
  faCopyright,
  faTimesCircle,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(fab, faHeart, faHeadphonesAlt, faCopyright, faTimesCircle, faSyncAlt)

function App() {
  const [siteDatas, setSiteDatas] = useState([]);
  
  useEffect(() => {
    fetchSiteDatas()
  }, [])

  async function  fetchSiteDatas() {
    const apiData = await API.graphql({ query: listSiteDatas })
    setSiteDatas(apiData.data.listSiteDatas.items) // limit to one result
  }

  console.log(siteDatas)

  return (
    <div className="App">
        <div id="sky"></div>
        <Parallax pages={1.3}>
        <ParallaxLayer offset={.1} speed={.15}>
            <CloudsOne className="svg-bg" />
          </ParallaxLayer>
        <ParallaxLayer offset={.15} speed={.25}>
            <MountainRangeTwo className="svg-bg" />
          </ParallaxLayer>
        <ParallaxLayer offset={.2} speed={.5}>
            <MountainRangeOne className="svg-bg" />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-1}>
          <h1 className="title">develop<br/>differently.</h1>
        </ParallaxLayer>
          <ParallaxLayer offset={.3}  speed={.75}>
            <TreeLineOne className="svg-bg" />
          </ParallaxLayer>
          <ParallaxLayer offset={.3} speed={1}>
            <div>
              <TreeLineTwo style={{marginBottom: "-1em"}} className="svg-bg" />
            </div>
            <main>
              <p className="para">
                Sorry, Otho is currently not onboarding new clients... But while
                you're here, take a look at some awesome stuff below!
              </p>
              <ModalRow rowId={0} />
              <ModalRow rowId={1} />
              <div className="section">
                <h2 className="title">This is a header</h2>
                <FontAwesomeIcon className="lightblue-txt rotatable" icon="sync-alt" />
                <div className="center">
                  <p className="para">
                    This is a paragraph
                  </p>
                </div>
              </div>
            </main>
            <Footer />
          </ParallaxLayer>

        </Parallax>
    </div>
  );
}

export default App;
