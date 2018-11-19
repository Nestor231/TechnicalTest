
import React, {Component} from 'react';
import {formStyles} from '../../StyleSheets/JStyleSheets';
import {
     Text, 
     View, 
     TextInput,
     Alert
} from 'react-native';
import PropTypes from 'prop-types';
import StyleSheetFactory from '../../StyleSheets/JStyleSheets';





export default class TextField extends Component {

  constructor(props){
     super(props);

     this.state = {
        isEmpty: true,
        text: '',
     }

     
  }


  onChangeTextHandler = (text) => {
     this.setState({text: text});
     this.props.actions.validate(text, this.props.fieldType)
  }

  returnInstance = (field) => {
     if (this.props.reference != null ){
        this.props.reference(field)
     }
  }


  render() {

        return (
        	<TextInput
                name={this.props.name}
                id={this.props.name}
                value={this.state.text}
        	 	    style={[formStyles.textInput, 
                          (this.state.text.length == 0) ? {fontStyle: 'italic'}:{fontStyle: 'normal'} 
                      ]}
        		    placeholder={this.props.placeholder}
                ref={(field) => this.returnInstance(field)}
                secureTextEntry={this.props.isPasswordEntry} 
                onChangeText={(text) => {this.onChangeTextHandler(text) } }/>    
        );
  }

}



TextField.defaultProps = {
    placeholder: '',
    isPasswordEntry: false,
    
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    isPasswordEntry: PropTypes.bool,
    reference: PropTypes.func
};


    


