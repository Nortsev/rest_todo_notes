import logo from './logo.svg';
import './App.css';
import React from "react";
import UsersList from "./components/users";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.setState({
                'users': response.data
            })
        }).catch(error => console.log(error))

    }


    render() {
        return (
            <div>
                <Header/>
                <UsersList users={this.state.users}/>
                <Footer/>
            </div>
        )
    }


}


export default App;
