import React    from "react";
import template from "./Login.jsx";

class Login extends React.Component {
  constructor(){
    super();
    this.state={
      'isValid':false,
      'data':{

      }
    }
  }

  fnChange(fn,e){
    this.setState({
      'data':{
      ...this.state.data,
      [fn]:e.target.value
      }
    },this.fnValidation)
    

  }

  fnValidation(){
    
    if(this.state.data.uid !='' && this.state.data.pwd !=''){
      this.setState({
        'isValid':true
      })
    }else{
      this.setState({
        'isValid':false
      })
    }
  }
  render() {
    return template.call(this);
  }
}

export default Login;
