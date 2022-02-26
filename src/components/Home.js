import React, { Component } from "react";
import '../css/Home.css'
import {Link} from 'react-router-dom';



class Home extends Component {
    render() {
        return (
            <div className="login">
                <form>
                    <label>Enter username:</label>
                    <input className="username-input" name="username" id="username" type="text" placeholder="Username"></input>
                    <Link to="/Collections">
                        <button type="submit">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Home;