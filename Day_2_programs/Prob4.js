//Given stored username and password and input username and password, Print if the user can login or not.
let given_user= "abc";
let given_pass= "pqr";

let input_user= "abc";
let input_pass= "pqr";

if(given_user==input_user){
  
  if(given_pass==input_pass){
    console.log("Login successful")
  }
  else{
    console.log("Incorrect password")
  }
}
else{
  console.log("Incorrect username")
}


