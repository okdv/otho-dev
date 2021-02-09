import React, { useEffect, useState } from 'react'

import ParallaxBackground from "./components/parallax-background/ParallaxBackground"
import Section from "./components/section/Section"
import LinkBox from "./components/link-box/LinkBox"
import DocumentMeta from "react-document-meta"

import "./App.css";
import "./utils/helpers"

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "./aws-exports"
import { getPage, listSocialMedias } from "./graphql/queries"
import { sectionByNameExpanded } from "./graphql/custom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faHeadphonesAlt,
  faCopyright,
  faTimesCircle,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import { shuffleArray } from './utils/helpers';

Amplify.configure(awsExports)

library.add(fab, faHeart, faHeadphonesAlt, faCopyright, faTimesCircle, faSyncAlt)

function App() {
  const [pageData,setPageData] = useState({})
  const [sectionData,setSectionData] = useState({
    projects: {},
    charities: {},
    funFacts: {}
  })
  const [socialData,setSocialData] = useState([])

  useEffect(() => {
    fetchPageData()
    fetchSectionData()
    fetchSocials()
  }, [])

  async function fetchPageData() {
    try {
      const apiResponse = await API.graphql(graphqlOperation(getPage, {id: "96cb34f8-6d8f-43fc-a19a-1bd1b42320ea"}))
      const apiData = apiResponse.data.getPage
      setPageData(apiData)
    } catch (err) {
      console.log("Error in fetchPageData: ", err)
    }
  }

  async function fetchSectionData() {
    try {
      const apiResponseProjects = await API.graphql(graphqlOperation(sectionByNameExpanded, {name: "projects"}))
      const apiResponseCharity = await API.graphql(graphqlOperation(sectionByNameExpanded, {name: "charities"}))
      const apiResponseFacts = await API.graphql(graphqlOperation(sectionByNameExpanded, {name: "fun-facts"}))
      var moddedFacts = apiResponseFacts.data.sectionByName.items[0]
      moddedFacts.paras = [shuffleArray(apiResponseFacts.data.sectionByName.items[0].paras)[0]]
      const setMe = {
        projects: apiResponseProjects.data.sectionByName.items[0],
        charities: apiResponseCharity.data.sectionByName.items[0],
        funFacts: moddedFacts
      }
      setSectionData(setMe)
    } catch(err) {
      console.log("Error in fetchSectionData: ", err)
    }
  }

  async function fetchSocials() {
    try {
      const apiResponse = await API.graphql({ query: listSocialMedias })
      setSocialData(apiResponse.data.listSocialMedias.items)
    } catch(err) {
      console.log("Error in fetchSocials: ", err)
    }
  }

  const bgData = {
    pageTitle: pageData.title || "",
    ownerFormal: pageData.site && pageData.site.ownerFormal ? (pageData.site.ownerFormal) : "",
    ownerCasual: pageData.site && pageData.site.ownerCasual ? (pageData.site.ownerCasual) : "",
    year: new Date().getFullYear(),
    socials: socialData
  }

  const meta = {
    title: "Hi, I'm Otho! Welcome to my portfolio!",
    description: "This is the portfolio and contract services website for me (Otho DuBois). Come learn a little about me and my work, and see how you can get in touch!",
    canonical: "https://www.othodubois.com",
    meta: {
      charset: 'utf-8'
    }
  }
    
  return(
    <DocumentMeta {...meta}>
      <div className="App" id="App">
        <ParallaxBackground data={bgData}>
          <div>
            {
              pageData.alert && pageData.alert.length > 0 ? (<p className="para">{pageData.alert}</p>) : ""
            }
          </div>
          <Section data={sectionData.projects}>
              {
                sectionData.projects.modals && sectionData.projects.modals.items.length > 0 ? (
                  shuffleArray(sectionData.projects.modals.items).slice(0,3).map((modal,i) => {
                    return <LinkBox data={modal.modal} key={i} />
                  })
                ) : ""
              }
            </Section>
            <Section data={sectionData.charities}>
              {
                sectionData.charities.modals && sectionData.charities.modals.items.length > 0 ? (
                  shuffleArray(sectionData.charities.modals.items).slice(0,3).map((modal,i) => {
                    return <LinkBox data={modal.modal} key={i} />
                  })
                ) : ""
              }
            </Section>
            <Section data={sectionData.funFacts}>
                <small className="para"><b>Pro tip:</b> Refresh to see a new fact!</small>
            </Section>
        </ParallaxBackground>
      </div>
    </DocumentMeta>
  )
}

export default App