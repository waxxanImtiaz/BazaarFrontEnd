import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProfileCard from '../profile/ProfileCard';
 
import { Button, Navbar,Container,Row,Col,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';



const useStyles = makeStyles(theme => ({
    
    sliderStyle:{
      height: '100% !important',
      width: '100%',
      border: '1px solid',
    },

    detailStyle:{
        height: '100% !important',
        width: '100%',
        border: '1px solid',
      }
      ,
      inlineTextStyle:{
        color: '#ABB2B9'
      }
  }));

  
export default function  ImageSlider(){

    function loadProfileCard(){
        debugger
        ReactDOM.render(
            <ProfileCard />,
            document.getElementById('profile')
            );

    }

    
        const classes = useStyles();
        return (
            <div>

            
            <Container>
                        <Row>
                            <Col  xs lg="8"  >
                            
                            <Carousel className={classes.sliderStyle}>
                        <div>
                            <img  src={process.env.PUBLIC_URL + 'images/products/1.jpg'} />
                            <p className="legend" >One</p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + 'images/products/2.jpg'} />
                            <p className="legend">Two</p>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + 'images/products/3.jpg'} />
                            <p className="legend">Three</p>
                        </div>
                    </Carousel>
                    </Col>
                    <Col  xs lg="4" >
                    <ProfileCard />
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }

 
// ReactDOM.render(<ImageSlider />, document.querySelector('.demo-carousel'));


// Don't forget to include the css in your page
 
// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
 