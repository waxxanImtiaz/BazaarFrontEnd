import React from 'react';
import axios from 'axios';
import CateogryList from './list/CateogryList';
import SwitchListSecondary from './list/SwitchListSecondary';
import ReactDOM from 'react-dom';
import GridExample from './examples/GridExample';
class Upload extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
            category: [],
        };

      
  }

    componentDidMount() {
      axios.get("http://localhost:8111/categoryList")
      .then(res => {
            
            const products = res.data.responseObject;
            this.setState({category: products });
            this.setState({isLoading:false});
  
            ReactDOM.render(
              // <SwitchListSecondary />,
              <CateogryList category = {products} />,
              // <GridExample />,
              document.getElementById('adContainer')
          );
        }) 
      .catch(error => console.log("error:"+error));
    }
    render() {
    
       return (
          <div className="container" id="adContainer">
            
         
          </div>
        )  
    }
 }
 export default Upload;
 