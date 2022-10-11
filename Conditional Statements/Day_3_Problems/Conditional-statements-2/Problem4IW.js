//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let Database_Username="xyz@gmail.com"; 

let Database_Password="123@abc";

let User_Username="xyz@gmail.com";

let User_Password="123@abc";

if(Database_Username==User_Username){
  
  if(Database_Password==User_Password){
    
    console.log("Login Successfully!!");
    
  }else{
    
    console.log("Password is incorrect");
    
  }

}else{
  
  console.log("Please give valid creditionals");

  }
