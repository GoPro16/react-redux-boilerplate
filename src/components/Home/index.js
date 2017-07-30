import React,{Component} from 'react';
import { withRouter,Link } from "react-router-dom";
import { connect } from "react-redux";
//import {} from "../../redux-store/dashboard";

@withRouter
@connect(state => ({}),{})
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                Home<br />
                <Link to="/test">To Test</Link>
            </div>
        );
    }
}