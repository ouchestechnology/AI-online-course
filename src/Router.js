import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './common/Components/Containers/pages/Home';

class Router extends Component{

    componentWillMount(){
        
    }
    
    render(){
        return(
            
            <BrowserRouter>
                
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                    <Home/>
                </body>                                     
            </BrowserRouter>
            
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{}
}
export default connect(mapStateToProps, {}) (Router)