import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ImageSlider from '../components/sliders/ImageSlider'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  
});



class Product extends React.Component{
  state = {
    error: null,
    isLoading: true,
    products: []
  }
constructor(props) {
    super(props);
}


 loadDetails(){
    ReactDOM.render(
      <ImageSlider />,
      document.getElementById('productsContainer')
    );
  }
  componentDidMount() {
  
    
    
    axios.get(this.props.url+this.props.category)
    .then(res => {
      
        this.setState({isLoading:false});
        const products = res.data.responseObject;
        this.setState({ products });
        
       // console.log(this.state.products);
    
    }) 
    .catch(error => this.setState({error,isLoading: false }));
  }

render(){ 


    return  (
      <MDBContainer>
       <MDBRow>
         {
       this.state.isLoading? '':this.state.products.map(product =>(
        
     
        <MDBCol size="3">
              <Card className={useStyles.card} onClick = {this.loadDetails}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="150"
                  image={process.env.PUBLIC_URL + 'images/products/1.jpg'}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.itemName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.address}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="h3">
                  {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {product.date}
                  </Typography>
                
                </CardContent>
              </CardActionArea>
    
        </Card>
        </MDBCol>
      
     ))
       }
     </MDBRow>
        </MDBContainer>
  )
    }
}

export default Product