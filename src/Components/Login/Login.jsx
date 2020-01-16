import "./Login.css";
import React from "react";

function template() {
  return (
    <div className="login">
      <form className="news">
        <p><input type="text" placeholder="Username" onChange={this.fnChange.bind(this,'uid')}/></p>
        <p><input type="password" placeholder="password" onChange={this.fnChange.bind(this,'pwd')}/></p>
        <p><input type="button" value="submit" className="btn1" disabled={!this.state.isValid}/></p>


      </form>
    </div>
  );
};

export default template;
