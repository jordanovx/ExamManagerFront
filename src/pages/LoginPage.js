import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Login from "../components/Login";

class LoginPage extends React.Component {

    render()
    {
        return(
            <div>
                <NavigationBar/>
                    <Login/>
                <Footer/>
            </div>)
    }
}

export default LoginPage;