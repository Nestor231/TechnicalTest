
import {StyleSheet,
        Dimensions} from 'react-native';


export default class StyleSheetFactory{
    static italicizeText(isItalic: bool){
        
        return StyleSheet.flatten([formStyles.textInput, isItalic ? {fontStyle: 'italic'} : {fontStyle: 'normal'}])
    }
}

export const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(250, 248, 255, 1)',
  },

  wrapper: {
    flex: 1,
    paddingTop:20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  headerImage: {
    aspectRatio: 10/7,
    marginBottom: 0
  }

});




export const formStyles = StyleSheet.create({

    container: {
      alignSelf: 'stretch',
      padding: 20,
     
    },

    textInput: {
      alignSelf: 'stretch',
      padding: 10,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 5,
      borderColor: 'rgba(101, 75, 154, 1)',
      borderWidth: 1,
      fontSize: 15,
      fontStyle: 'italic',
      marginBottom: 0,
      height: 40
    },

    textInputLabel: {
      fontWeight: '500'
    },

    textInputError: {
      fontStyle: 'italic',
      marginBottom: 0,
      color: 'red',
      fontSize: 12
    },

    formButton: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(113, 80, 176, 1)',
      borderRadius: 5,
      width: null,
      height: 41,
      marginLeft: 0,
      marginBottom: 15
    },

    formButtonLabel:{
      color: 'white',
      fontWeight: 'bold'
    }



});

