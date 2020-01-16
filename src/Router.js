import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './common/Components/Partials/Footer';
import Home from './common/Components/Containers/Pages/Home';

class Router extends Component{

    componentWillMount(){
        
    }
    
    render(){
        return(
            
            <BrowserRouter>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
  
                    <div className="site-wrap">
                        <Switch>   
                            <Route exact={'/'}  component={Home}/>
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