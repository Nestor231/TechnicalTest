/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
        Text, 
        View, 
        SafeAreaView, 
        Dimensions, 
        KeyboardAvoidingView, 
        Image,
        TouchableWithoutFeedback,
        Keyboard
       } from 'react-native';

import {styles} from './StyleSheets/JStyleSheets';
import {LoginForm,SignUpForm} from './App/components/Form';




var imagesFolder = './images/'


export default class Main extends Component {


  constructor(props){
      super(props);

      this.state = {
          isLogin: true
      }
  }



  toLogin = () => {
     this.setState({
          isLogin: true
     })
  }

  toSignUp = () => {
     this.setState({
          isLogin: false
     })
  }
 
  render() {

      var imgsrc = require(imagesFolder+'logo.png');
      let form;

      const isLogin = this.state.isLogin

      if (isLogin){
         form = <LoginForm navToSignUp={this.toSignUp}/>
      }

      else {
         form = <SignUpForm navToLogin={this.toLogin}/>
      }

      return (
          <SafeAreaView style={styles.container}> 
              <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                  <View style={{flex: 1}}>
                    <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                              
                        <Image source={imgsrc} 
                               style={styles.headerImage}
                               resizeMode='contain'/> 
                        {form}
                                  
                    </KeyboardAvoidingView>
                  </View>
              </TouchableWithoutFeedback>
  	       </SafeAreaView>

	     
      );
  }


}






