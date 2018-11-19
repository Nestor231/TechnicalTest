
import React, {Component} from 'react';
import {formStyles} from '../../StyleSheets/JStyleSheets';
import {
     Text, 
     View, 
     TouchableOpacity,
     Keyboard
} from 'react-native';
import PropTypes from 'prop-types';






export default class FormButton extends Component {
  constructor(props){
     super(props);
     this.state = {

     }

     disabled: false
  }


  render() {

    return (
     	<TouchableOpacity style={[
                                formStyles.formButton, 
                                this.props.disabled && {backgroundColor: 'gray'}
                        ]}
                        onPress={() => {Keyboard.dismiss();this.props.onClick();}}
                        disabled={this.props.disabled}>
              <Text style={formStyles.formButtonLabel}>{this.props.buttonLabel}</Text>
      </TouchableOpacity>
    );
  }

}


    


