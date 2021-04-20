import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ReactDOM from 'react-dom';
import StarBorder from '@material-ui/icons/StarBorder';
import axios from 'axios';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CategoryDescriptionForm from '../forms/CategoryDescriptionForm'

import { Button, Navbar,Container,Row,Col,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    height: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
  // nested: {
  //   paddingLeft: theme.spacing(4),
  // },
  divStyle: {
    width: '100%',
  },
  mainlistItem:{
    border: '1px solid',
    marginTop: '10px',
  },
  subListStyle:{
    marginTop: '20px'
  },
  mainContainer:{
    height: '100% !important',
    width: '100%',
    border: '1px solid',
  }
}));

export default function CateogryList(props) {
  const classes = useStyles();

  var listItem;
  var subList;
  var isLoading = true;
  const state = {
    isLoading: true,
      category: [],    

  };
  const [open, setOpen] = React.useState(false);


  listItem = props.category.map(product =>
          
      
        <ListItem   className={classes.mainlistItem} button  onClick={() => handleClick(product.id)}>
        {
      
        }
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={product.name} />
        <ListItemSecondaryAction>
            <img src={process.env.PUBLIC_URL+'/images/arrow_right.png'} />
        </ListItemSecondaryAction>
        
      </ListItem>
    
    );

    function subListItemClick(e){
        console.log(e.name);

        ReactDOM.render(<CategoryDescriptionForm category={e}/>,document.getElementById('categoryListMainContainer'));
      // debugger
      
    };
  function handleClick(e) {

  axios.get("http://localhost:8111/categoryList/"+e)
  .then(res => {
        
        const products = res.data.responseObject;
           subList = products.map(element => 
              <ListItem className={classes.subListStyle} button onClick={() => subListItemClick(element)} >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + 'images/products/1.jpg'} />
               </ListItemAvatar>
            <ListItemText primary={element.name} />
            {isLoading = false}
            <ListItemSecondaryAction>
           
            </ListItemSecondaryAction>
            </ListItem>     
        );
        ReactDOM.render(subList,document.getElementById('inner'))
      // debugger
      }) 
  .catch(error => console.log("error:"+error));
    
    setOpen(!open);
  }

  
 

  return (
    
      
    <div>
            <Container  className={classes.mainContainer} id="categoryListMainContainer">
                <Row>
                    <Col  xs lg="6">
                    
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                              <ListSubheader component="div" id="nested-list-subheader">
                                CHOOSE A CATEGORY
                              </ListSubheader>
                            }
                            className={classes.root}>

                          {listItem}
                      </List>
                    </Col>
                    <Col xs lg="6">
                      <List className={classes.subListStyle}>
                            <div id="inner">

                            </div>
                        </List>
                    </Col>
                </Row>
                
            </Container>
    
      </div>
  
  );
}
