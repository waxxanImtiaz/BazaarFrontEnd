import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class InitForm extends React.Component{

   
  constructor(props) {
      super(props);
      debugger
    //  React.useStatse(props.dialogState);

  }
   handleClickOpen() {
    React.setOpen(true);
  }

 handleClose() {
    React.setOpen(false);
  }
  render(){
      return (

        <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog  onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          
          <TextField
           
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
          
          <TextField
           
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>

      );
  }
}
export default InitForm;