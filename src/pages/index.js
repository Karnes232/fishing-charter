import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/HeroComponets/Hero"
import AboutUs from "../components/AboutUsComponents/AboutUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutUs/>
    
  </Layout>
)

export default IndexPage
