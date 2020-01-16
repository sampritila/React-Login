import React    from "react";
import template from "./Userdetails.jsx";

class Userdetails extends React.Component {
  constructor(){
    super();
    this.state={
      'uid':React.createRef(),
      'pwd':React.createRef()
    }
  }


  fnlogin(){
    debugger;
  }
  render() {
    return template.call(this);
  }
}

export default Userdetails;
