import React, {Component} from 'react';



export default class Validation{

	static validateEmail = (text) => {

		var emailCheck = /^([A-Za-z\d_])+@[A-Za-z]+\.[A-za-z]+$/;

		if (emailCheck.test(text)){
              return 1
          }

          else if (text.length == 0){
              return 2
          }

          else{
              return 3
          }

	}


	static validatePass = (text) => {

		var passwordCheck = /^.{6,12}$/;

		 if (passwordCheck.test(text)){
              return 1
          }

          else if (text.length == 0){
              return 2 
          }

          else{
              return 3
          }
	}

}