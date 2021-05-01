import React from 'react';
import "./header.css"
function header() {
    return (
        <div className="header_main">
            <div className="header_body">
            <h1 className="header_title_text">Appointy</h1>
            </div>    

            <div className="header_links">
                <div className="header_link1">
                <a href="#"><h5 className="header_link_text">Features</h5></a>
                </div>
                <div className="header_link2">
                <a href="#"><h5 className="header_link_text">Team</h5></a>
                </div>
                <div className="header_link3">
                <a href="#"><h5 className="header_link_text">My Account</h5></a>


                
                </div>
                <div className="header_link3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                </div>
            </div>






                  
        </div>
    )
}

export default header;