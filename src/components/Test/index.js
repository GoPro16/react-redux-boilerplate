import React,{Component} from 'react';
import { withRouter,Link } from "react-router-dom";
import { connect } from "react-redux";
//import {} from "../../redux-store/dashboard";

@withRouter
@connect(state => ({}),{})
export default class Test extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                Test<br />
                <Link to="/">Go Home</Link>
            </div>
        );
    }
}