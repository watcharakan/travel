import React, { Component } from 'react';
import Header from './Header';
import Mainwrapper from './Mainwrapper';
import Footer from './Footer';
import SigninModel from './Signinmodel';
import RegisterModel from './Registermodel';
import ForgetPassword from './Forgetpassword';
class App extends Component {
  render() {
    return (
      
        <div>
        <Header/> 
        <Mainwrapper/>
        <Footer/>
        <div id="back-to-top">
        <a href="#"><i class="ion-ios-arrow-up"></i></a>
        </div>
        <SigninModel/>
        <RegisterModel/>
        <ForgetPassword/>
        </div>

  
    );
  }
}

export default App;