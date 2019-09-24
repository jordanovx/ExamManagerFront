import React from 'react';

class Footer extends React.Component {

    render()
    {
        return(
            <div className="footer">
               Финки {new Date().getFullYear()}
            </div>)
    }
}

export default Footer;