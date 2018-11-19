const http = require('http');
const filesys = require('fs');
const port = 8080;
const fileStorage = 'memberslist.json';


http.createServer(function (req, res) {

   let rawdata = filesys.readFileSync(fileStorage);
   let members = JSON.parse(rawdata);

   if (req.url == '/login'){
   	  
   	   let payload = ''

   	   req.on('data', (data) => {
    	  payload += data
  	   })

  	   req.on('end', () => {
   		  payload = JSON.parse(payload)
  		  console.log(payload)
		 

  	  	  let errormessage = 'invalid email or password'


  	  	  res.setHeader('Content-Type', 'application/json');

  		  for (let member of members){
  	   	
  	   	  		console.log(`${member['email']} - ${payload['email']}`)
  	   			if (member['email'] == payload['email']){
  	   				if (member['password'] == payload['password']){
  
  	   			 	    res.end(JSON.stringify({
	   	   	   				 	"success": true,
	   	   	 			 	   }))
  	   				    break
  	   				}

  	   				else{

  	   					res.end(JSON.stringify({
	   	   	   					"success": false,
	   	   	   					"message": errormessage
	   	   	  			 }))
  	   					break
  	   				}
  	   			}
  	   	
   	   	   }

   	   	   res.end(JSON.stringify({
	   	   	       "success": false,
	   	   	       "message": errormessage
	   	   }))

   	   });


      
    }


    else if (req.url == '/registration'){
   	 	 let payload = ''

   	     req.on('data', (data) => {
    	     payload += data
  	     })

   	     req.on('end', () => {
   		 	 payload = JSON.parse(payload)
  		     console.log(payload)
		 

  	  	 	 let errormessage = 'Account already exists!'
  	  	 	 let successCheck = true

  	  	 	 res.setHeader('Content-Type', 'application/json');



  			  for (let member of members){
  	   	
  	   	  		  console.log(`${member['email']} - ${payload['email']}`)
  	   			  if (member['email'] == payload['email']){
 
  	   			      successCheck = false
  	   			      break
  	   			  }

   	   	       }


   	   	       if (!successCheck){
   	   	   	       res.end(JSON.stringify({
  	   					"success": false,
  	   					"message": errormessage
  	   			   }))
   	   	       }

   	   	       else{
   	   	       	   members.push(payload)
  	   			   console.log(members)

  	   			   filesys.writeFile(fileStorage, JSON.stringify(members, null, 2), function(err){
  	   			   		if (err){
  	   			   			console.log(err)
  	   			   		}
  	   			   		console.log('File has been updated!')
  	   			   })

  	   			   res.end(JSON.stringify({
	   	   	      	    "success": true
	   	 		   }))
   	   	       }

   	   	  

   	   });

   }

}).listen(port);