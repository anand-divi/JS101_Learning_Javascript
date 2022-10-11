
var stored_userID="akh244@gmail.com";
var stored_password="hi@1234";

var inp_userID="akh244@gmail.com";
var inp_password="hi@1234";

if(stored_userID==inp_userID){
  if(stored_password==inp_password){
    console.log("Your login is successful");
  }
  else
    console.log("Entered wrong password");
}
else{
  console.log("user credentials are wrong");
}