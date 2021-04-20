import React from 'react';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Navbar,Container,Row,Col,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap';
import ImageUpload from '../images/ImageUpload';
import axios from 'axios';



class Publish extends React.Component {
    requestData = new FormData();
    componentDidMount() {
        axios.get("http://localhost:8111/categoryList")
            .then(res => {
                this.setState({category:res.data.responseObject});
            })
            .catch(error => console.log("error:"+error));

        axios.get("http://localhost:8111/static/publish/Pakistan")
            .then(res => {
                this.setState({states:res.data.responseObject});
            })
            .catch(error => console.log("error:"+error));
    }
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
        this.state = {titleValue:'',
            phoneNumValue: ''};
        this.classes = this.useStyles;

        this.publish = this.publish.bind(this);
        //this.phoneNoChange = this.phoneNoChange.bind(this);
        //this.titleChange = this.titleChange.bind(this);
    }

    // titleChange(event){
    //   this.setState({titleValue: event.target.value});
    // }
    //
    //
    // phoneNoChange(event){
    //     this.setState({phoneNumValue: event.target.value});
    // }

    publish(){
        debugger
        if (this.state.titleValue === '') {
            alert("Title is empty");
            return;
        }
        if (this.state.phoneNumValue === ''){
            alert("Phone number is empty");
            return;
        }

    }
    render() {
        return (
            <Container  >
                <Row>
                    <Col  xs lg="5" >

                        <div style={this.state.listCcontainerStyle}>
                            <h5  >INCLUDE SOME DETAILS</h5>

                            <TextField style={this.state.listStyle}
                                       margin="dense"
                                       id="title"
                                       label="Title*"
                                       type="to"
                                       fullWidth
                                       ref={(c) => this.state.titleValue = c}
                            />
                            <TextField style={this.state.listStyle}
                                       ref={(c) => this.state.phoneNumValue = c}
                                       margin="dense"
                                       id="phone"
                                       label="Phone*"
                                       type="mobile"
                                       fullWidth
                            />

                            <label style={this.state.listStyle} for="condition">Category*</label>
                            <Select   id="condition" options={ this.state.category } />

                            <label style={this.state.listStyle} for="condition">City*</label>
                            <Select   id="conditionCom" options={ this.state.states }/>


                            <div class="mdc-text-field mdc-text-field--textarea"  style={this.state.listStyle}>
                                <textarea id="textarea" class="mdc-text-field__input" rows="4" cols="50"></textarea>
                                <div class="mdc-notched-outline">
                                    <div class="mdc-notched-outline__leading"/>
                                    <div class="mdc-notched-outline__notch">
                                        <label for="textarea" class="mdc-floating-label">Description*</label>
                                    </div>
                                    <div class="mdc-notched-outline__trailing"/>
                                </div>
                            </div>

                            <h5 style={this.state.ImageUploaderStyle} />
                            <ImageUpload style={this.state.ImageUploaderStyle} fileTypeError='is not supported file extension' />
                            <div style={this.state.btnPostDiv} >
                                <Button onClick={this.publish} style={this.state.btnPostStyle}  variant="success" >POST</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }


}



export default Publish;