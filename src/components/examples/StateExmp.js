import React from 'react';
class StateExamp extends React.Component {
    constructor(props){
        super(props);
        this.state = { attribute : "value" }; 
    }

    go(){
        return this.state.attribute;
    }
    render() {
       return (
          <div>
             <h1>This StateComponent</h1>
             <h1>{this.go()}</h1>
          </div>
       )
    }
 }
 export default StateExamp;