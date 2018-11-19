
import React, {Component} from 'react';
import {formStyles} from '../../StyleSheets/JStyleSheets';
import {
     Text, 
     View, 
     TextInput,
     Alert
} from 'react-native';


import TextField from './TextField';
import FormButton from './FormButton';
import Validation from '../helpers/Validation';
import {config} from '../helpers/Config';
import URLRequest from '../helpers/URLRequest'




export class LoginForm extends Component {


  constructor(props){
     super(props);
     this.state = {
        errorEmail: ' ',
        errorPass: ' ',
        email: '',
        password: '',
        enableLogin: false
     }
  }




  login = () => {

      let url = config.mainUrl
      let endpoint = config.endpoints.login


      URLRequest.sendRequest(
                    `${url}/${endpoint}`,
                    'POST',
                    {
                        'email': this.state.email,
                        'password': this.state.password
                    },
                    (responseJson) => {
                        if (responseJson['success']){
                            Alert.alert('login successful!')
                        }

                        else{
                             Alert.alert(responseJson['message'])
                        }
                    }
      )

    
  }




  validate = (text,type) => {
    
      var emptyEmail = 'please enter email address'
      var emptyPass = 'please enter password'
      var invalidEmail = 'not correct format for email address'
      var invalidPass = 'please use at least 6 - 12 characters'

      if (type == 'email'){

          switch(Validation.validateEmail(text)){
            
              case 1: 
                this.setState({
                    errorEmail: '',
                    enableLogin: (this.state.errorPass.length == 0),
                    email: text
                })
                break;

              case 2:
                this.setState({
                    errorEmail: emptyEmail,
                    enableLogin: false
                })
                break;

              case 3:
                this.setState({
                    errorEmail: invalidEmail,
                    enableLogin: false
                })
                break;

              default:
                this.setState({
                    errorEmail: '',
                    enableLogin: (this.state.errorPass.length == 0)
                })

          }

      }

      else {

           switch(Validation.validatePass(text)){
            
              case 1: 
                this.setState({
                    errorPass: '',
                    enableLogin: (this.state.errorEmail.length == 0),
                    password: text
                })
                break;

              case 2:
                this.setState({
                    errorPass: emptyPass,
                    enableLogin: false
                })
                break;

              case 3:
                this.setState({
                    errorPass: invalidPass,
                    enableLogin: false
                })
                break;

              default:
                this.setState({
                    errorPass: '',
                    enableLogin: (this.state.errorEmail.length == 0)
                })

          }
      }

  }


  render() {
    return (
 
     <View style={formStyles.container}>
          
          <Text style={formStyles.textInputLabel}>Email</Text>
         	<TextField placeholder='Input Email Address' 
                     actions={{
                        validate: (text,type) => this.validate(text,type)
                     }} 
                     fieldType="email"/>
          <Text style={formStyles.textInputError}>{this.state.errorEmail}</Text>

          <Text style={formStyles.textInputLabel}>Password</Text>
         	<TextField placeholder='Input Password'
         			       isPasswordEntry = {true}
                     actions={{
                         validate: (text,type) => this.validate(text,type)
                     }} 
                     fieldType='password' />
          <Text style={formStyles.textInputError}>{this.state.errorPass}</Text>

          <FormButton buttonLabel = 'LogIn'
                      disabled={!this.state.enableLogin}
                      onClick={this.login}/>
          <FormButton buttonLabel = 'Sign Up'
                      onClick={this.props.navToSignUp}/>

       
     </View>
    );
  }


}









export class SignUpForm extends Component{


  constructor(props){
     super(props);
     this.state = {
        errorEmail: ' ',
        errorPass: ' ',
        errorConfirmPass: ' ',
        email: '',
        password: '',
        enableRegister: false
     }
  }



  register = () => {
      
      let url = config.mainUrl
      let endpoint = config.endpoints.registration

      URLRequest.sendRequest(
                     `${url}/${endpoint}`,
                     'POST',
                     {
                          'email': this.state.email,
                          'password': this.state.password
                     },
                     (responseJson) => {
                         if (responseJson['success']){
                             Alert.alert('registration successful!')
                         }

                         else{
                             Alert.alert(responseJson['message'])
                         }
                     }
      )
  }



  validate = (text,type) => {
    
      var emptyEmail = 'please enter email address'
      var emptyPass = 'please enter password'
      var invalidEmail = 'not correct format for email address'
      var invalidPass = 'please use at least 6 - 12 characters'
      var passnotmatch = 'passwords do not match'



      if (type == 'email'){

          switch(Validation.validateEmail(text)){
            
              case 1: 
                this.setState({
                    errorEmail: '',
                    enableRegister: (this.state.errorPass.length == 0 && this.state.errorConfirmPass.length == 0),
                    email: text
                })
                break;

              case 2:
                this.setState({
                    errorEmail: emptyEmail,
                    enableRegister: false
                })
                break;

              case 3:
                this.setState({
                    errorEmail: invalidEmail,
                    enableRegister: false
                })
                break;

              default:
                this.setState({
                    errorEmail: '',
                    enableRegister: (this.state.errorPass.length == 0 && this.state.errorConfirmPass.length == 0) 
                })

          }

      }

      else if (type == 'password'){

           switch(Validation.validatePass(text)){
            
              case 1: 
                this.setState({
                    errorPass: '',
                    enableRegister: (this.state.errorEmail.length == 0 && this.state.errorConfirmPass.length == 0),
                    password: text
                })
                break;

              case 2:
                this.setState({
                    errorPass: emptyPass,
                    errorConfirmPass: ' ',
                    enableRegister: false,
                })
                this.confirmPassInput.clear()
                break;

              case 3:
                this.setState({
                    errorPass: invalidPass,
                    errorConfirmPass: ' ',
                    enableRegister: false,
                })
                this.confirmPassInput.clear()
                break;

              default:
                this.setState({
                    errorPass: '',
                    enableRegister: (this.state.errorEmail.length == 0 && this.state.errorConfirmPass.length == 0)
                })

          }
      }


      else {

          
          if (this.state.password == text){
              this.setState({
                  errorConfirmPass: '',
                  enableRegister: (this.state.errorEmail.length == 0 && this.state.errorPass.length == 0),
              })
          }

          else{
              this.setState({
                  errorConfirmPass: passnotmatch,
                  enableRegister: false
              })
          }

      }

  }



  render() {
    return (
 
     <View style={formStyles.container}>
         
          <Text style={formStyles.textInputLabel}>Email</Text>
          <TextField placeholder='Input Email Address'
                     actions={{
                        validate: (text,type) => this.validate(text,type)
                     }} 
                     fieldType='email'/>
          <Text style={formStyles.textInputError}>{this.state.errorEmail}</Text>



          <Text style={formStyles.textInputLabel}>Password</Text>
          <TextField placeholder='Input Password'
                     isPasswordEntry = {true}
                     actions={{
                        validate: (text,type) => this.validate(text,type)
                     }} 
                     fieldType='password'/>
          <Text style={formStyles.textInputError}>{this.state.errorPass}</Text>           



          <Text style={formStyles.textInputLabel}>Confirm Password</Text>           
          <TextField placeholder='Confirm Password'
                     isPasswordEntry = {true}
                     actions={{
                        validate: (text,type) => this.validate(text,type)
                     }}
                     reference={(input) => { this.confirmPassInput = input }}
                     fieldType='confirmPass'/>
          <Text style={formStyles.textInputError}>{this.state.errorConfirmPass}</Text>           



          <FormButton buttonLabel = 'Register'
                      disabled={!this.state.enableRegister}
                      onClick={this.register}/>
          <FormButton buttonLabel = 'Sign In'
                      onClick={this.props.navToLogin}/>
       
     </View>
    );
  }
}

