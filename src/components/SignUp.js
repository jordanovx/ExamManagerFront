import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SignUpPage from "../pages/SingUpPage";

class SignUp extends React.Component {

    render()
    {
        return(
            <div>
                <NavigationBar/>
                <SignUpPage/>
                <Footer/>
            </div>)
    }
}

export default SignUp;