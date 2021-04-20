import React from 'react';
import  '../css/profile_card.css';

class ProfileCard extends React.Component {
    render() {
        
        return (
            
                <div >
                    
                    <div className="card">
                    {/* <img src={process.env.PUBLIC_URL + 'images/products/1.jpg'} /> */}
                    <p className='h4'>Seller Description</p>
                    {/* <p className="title">CEO & Founder, Example</p> */}
                    <div >
                        <p>Name: Imtiaz </p>
                        <p><i className="fa fa-dribbble"> Address:</i><i className="fa fa-twitter">Karachi</i></p>
                        <p><i className="fa fa-dribbble"> Mobile</i><i className="fa fa-linkedin">0300-253223</i></p>  
                         
                    </div>
                    {/* <p><button id ='btnContact'>Contact</button></p> */}
                    
                    </div>
                </div>
        );

    }
}
export default ProfileCard;