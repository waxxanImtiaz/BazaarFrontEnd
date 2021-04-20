import React from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Navbar,Container,Row,Col,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';
import ImageUpload from '../images/ImageUpload';




class CategoryDescriptionForm extends React.Component {
   state={
    listStyle:{
        marginTop: "30px",
        textAlign: "left"
      },
      ImageUploaderStyle:{
        marginTop: "50px",
        
      },
      btnPostStyle:{
        marginTop: "30px",
        width: '40%'
      }
      ,
      btnPostDiv:{
        marginTop: "10px",
        textAlign: "right",
    
      }
      ,
      listCcontainerStyle:{
        marginTop: "10px",
        textAlign: "left",
        padding: '20px'
      },
      textAreaStyle:{
        marginTop: '20px',
        width: '100%',
        maxLenght: '20'

      }

   }
    constructor(props){
        super(props);
        this.classes = this.useStyles;
    }
  
    render() {
        
          
        const techCompanies = [
            { label: "Apple", value: 1 },
            { label: "Facebook", value: 2 },
            { label: "Netflix", value: 3 },
            { label: "Tesla", value: 4 },
            { label: "Amazon", value: 5 },
            { label: "Alphabet", value: 6 },
          ];
        return (
            <Container  >
                <Row>
                    <Col  xs lg="5" >
                      
                        <div style={this.state.listCcontainerStyle}>
                        <h5  >INCLUDE SOME DETAILS</h5>
                        <label style={this.state.listStyle} for="makeList">Make*</label>
                        <Select   id="makeList" options={ techCompanies } />

                        <TextField style={this.state.listStyle}
                            
                            margin="dense"
                            id="year"
                            label="Year*"
                            type="year"
                            fullWidth
                        />

                        <TextField style={this.state.listStyle}
                            
                            margin="dense"
                            id="kms"
                            label="KMs Driven*"
                            type="kms"
                            fullWidth
                        />

                        <label style={this.state.listStyle} for="fuel">Fuel*</label>
                        <Select   id="fuel" options={ techCompanies } />


                        <label style={this.state.listStyle} for="condition">Condition*</label>
                        <Select   id="condition" options={ techCompanies } />

                        <label style={this.state.listStyle} for="registerdIn">Registerd In*</label>
                        <Select   id="registerdIn" options={ techCompanies } />

                        <TextField style={this.state.listStyle}
                            
                            margin="dense"
                            id="title"
                            label="Title*"
                            type="to"
                            fullWidth
                        />
                       <TextField style={this.state.listStyle}
                            
                            margin="dense"
                            id="phone"
                            label="Phone*"
                            type="mobile"
                            fullWidth
                        />                 
                       
                        <div class="mdc-text-field mdc-text-field--textarea"  style={this.state.listStyle}>
                        <textarea id="textarea" class="mdc-text-field__input" rows="4" cols="50"></textarea>
                        <div class="mdc-notched-outline">
                            <div class="mdc-notched-outline__leading"></div>
                            <div class="mdc-notched-outline__notch">
                            <label for="textarea" class="mdc-floating-label">Description*</label>
                            </div>
                            <div class="mdc-notched-outline__trailing"></div>
                        </div>
                        </div>
                        <h5 style={this.state.listStyle} >SET PRICE</h5>
                        <TextField 
                            margin="dense"
                            id="price"
                            label="Price*"
                            type="kms"
                            fullWidth
                        />
                        <h5 style={this.state.ImageUploaderStyle} ></h5>
                        <ImageUpload style={this.state.ImageUploaderStyle} fileTypeError='is not supported file extension' />
                        <div style={this.state.btnPostDiv} >
                            <Button style={this.state.btnPostStyle} variant="success" >POST</Button>
                        </div>
                    </div>

                    
                    
                    </Col>
                </Row>
            </Container>

        )
    }


}



export default CategoryDescriptionForm;