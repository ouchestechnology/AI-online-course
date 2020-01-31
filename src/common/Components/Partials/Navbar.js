import React, {Component} from 'react';

class Navbar extends Component{

    render(){
        return (
            
            <nav class="navbar navbar-default" role="navigation">
               
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="/images/logo.png" width="30" height="30" />
                    </a>
                </div>
            
               
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a className="btn btn-default" href="#">Login</a></li>
                        <li><a className="btn btn-warning" href="#">Signup</a></li>
                       
                    </ul>
                </div>
            </nav>
            
        );
    }
}

export default Navbar;