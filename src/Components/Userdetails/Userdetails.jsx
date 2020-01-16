import "./Userdetails.css";
import React from "react";

function template() {
  return (
    <div className="userdetails">
      <h1>Userdetails</h1>
      <form className="news">
        <p><input ref={this.state.uid} type="text" placeholder="Username" /></p>
        <p><input ref={this.state.pwd} type="password" placeholder="password"  /></p>
        <p><input type="button" value="submit" onClick={this.fnlogin.bind(this)}/></p>


      </form>
    </div>
  );
};

export default template;
