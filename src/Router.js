import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './common/Components/Partials/Footer';
import Header from './common/Components/Partials/Header';
import Intro from './common/Components/Containers/Intro';
import Courses from './common/Components/Containers/Courses';
import Programs from './common/Components/Containers/Programs';
import Teachers from './common/Components/Containers/Teachers';
import Testimonials from './common/Components/Containers/Testimonials';
import WhyUs from './common/Components/Containers/WhyUs';
import Contact from './common/Components/Containers/Contact';
import MobileMenu from './common/Components/Partials/MobileMenu';

class Router extends Component{

    componentWillMount(){
        
    }
    
    render(){
        return(
            
            <BrowserRouter>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
  
                    <div className="site-wrap">

                        <MobileMenu/>
                        <Header/>     
                        <Intro/> 
                        <Courses/>  
                        <Programs/>  
                        <Teachers/> 
                        <Testimonials/>
                        <WhyUs/>
                        <Contact/>                 
                        <Switch>   
                            
                        </Switch>
                        <Footer/>
                    </div>
                </body>                                     
            </BrowserRouter>
            
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{}
}
export default connect(mapStateToProps, {}) (Router)