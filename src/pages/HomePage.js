import React from 'react';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

class HomePage extends React.Component {

    render()
    {
        return(
            <div>
                <NavigationBar/>
                <div className="container">

                </div>
                <Footer/>
            </div>)
    }
}

export default HomePage;