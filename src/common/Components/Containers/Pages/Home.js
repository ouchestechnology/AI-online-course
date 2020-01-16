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

class Home extends Component {
  render() {
    return (
        <div>
            <MobileMenu/>
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
