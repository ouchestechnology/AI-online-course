import React, { Component } from "react";
import Header from "../../Partials/Header";
import MobileMenu from "../../Partials/MobileMenu";
import Contact from "../Contact";
import WhyUs from "../WhyUs";
import Testimonials from "../Testimonials";
import Teachers from "../Teachers";
import Programs from "../Programs";
import Courses from "../Courses";
import Intro from "../Intro";
import {Helmet} from "react-helmet";
import config from './../../../../config';

class Home extends Component {
  render() {
    return (
        <div>
            <MobileMenu/>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{config.appName}</title>
               
            </Helmet>
            <Header/>     
            <Intro/> 
            <Courses/>  
            <Programs/>  
            <Teachers/> 
            <Testimonials/>
            <WhyUs/>
            <Contact/> 
        </div>
    );
  }
}

export default Home;
