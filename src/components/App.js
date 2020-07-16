// Main Modules:
import React, { Component } from 'react';
import {Nav} from './nav/nav';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {getAllUsers, searchFirst, searchLast} from './actions/action';
import {Home} from './home/home'
import {Search} from './search/search'

// CSS:
import './css/app.css';


export class App extends Component{
    
    render(){
        return (
            <Router>    
                <div className="header">
                    <h1 className="hdr">Student Listing App</h1>
                </div>
                <Nav props={this.props}/>
                <Switch>
                    <Route exact path="/" render={()=><Home props={this.props}/>}/>
                    <Route exact path="/search/:id" render={()=><Search props={this.props}/>}/>
                </Switch> 
            </Router>
        )
    }
}


const mapStateToProps = state => ({
    all: state.all,
    results: state.results
})

const mapActionsToState = dispatch =>({
    getAllUsers: ()=>dispatch(getAllUsers()),
    searchFirst: (name)=>dispatch(searchFirst(name)),
    searchLast: (name)=>dispatch(searchLast(name)),

})

export default connect( mapStateToProps, mapActionsToState )(App);