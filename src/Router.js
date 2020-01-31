import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Router extends Component{

    componentWillMount(){
        
    }
    
    render(){
        return(
            
            <BrowserRouter>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                    <p>hehere</p>
                </body>                                     
            </BrowserRouter>
            
            
        )
    }
}

const mapStateToProps = (state) =>{
    return{}
}
export default connect(mapStateToProps, {}) (Router)