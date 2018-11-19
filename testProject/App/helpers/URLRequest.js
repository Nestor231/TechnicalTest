import {Alert} from 'react-native'

export default class URLRequest{
	


	static sendRequest = (endPoint, currentmethod, currentbody, completion) => {
			
			fetch(endPoint, {
				  	 method: currentmethod,
				  	 headers: {
				  	 	Accept: 'application/json',
				  	    'Content-Type': 'application/json',
				  	 },

				  	 body: JSON.stringify(currentbody),
				  
    	    }).then((response) => response.json())
    	      .then((responseJson) => {
            	
	             completion(responseJson)
             
     	    }).catch((error) => {
       		      Alert.alert(error)
    	    });


	}

	mandatory = () => {
  		throw new Error('Missing parameter!');
	}
}