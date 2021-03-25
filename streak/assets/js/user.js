function login(){
    var user = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    let error_user = "The Username Field Cant Be Empty, Enter your informations please";
    let error_pass = "The Passcode Field Cant Be Empty, Enter your passcode please";
    let error_pass_user = "You left The username or the passcode field blank, enter your informations please";
    let error_passNotNumber = "The Passcode should be a number";
    let error_pass4 = "The Passcode contains 4 numbers";
    let logged = `Welcome Back ${user} <br> Logged in ✓`;
    if (user == "" || user == null){
        document.getElementById('txt').innerHTML=error_user;
        document.getElementById('username').style.border='3px solid red';
        document.getElementById('pass').style.border='1px solid black';
    }
    else if (pass == "" || pass == null){
        document.getElementById('txt').innerHTML= error_pass;
        document.getElementById('pass').style.border='3px solid red';
        document.getElementById('username').style.border='1px solid black';
    }
    else if (user == "" || user == null && pass == "" || pass == null){
        document.getElementById('txt').innerHTML= error_pass_user;
        document.getElementById('pass').style.border='3px solid red';
        document.getElementById('username').style.border='3px solid red';
    }
    else if (user == "\x6D\x6F\x6E\x63\x65\x66" && pass == "\x30\x30\x30\x30"){
        document.getElementById('txtbox').innerHTML=logged;
        setTimeout(function(){ window.location = "app/home.html"; },1000);
        document.getElementById('username').style.border='3px solid green';
        document.getElementById('pass').style.border='3px solid green';
        document.getElementById('txt').innerHTML=" ";
    }
    else if (user == "\x69\x6D\x65\x6E\x65" && pass == "\x30\x30\x30\x30"){
        document.getElementById('txtbox').innerHTML=logged;
        setTimeout(function(){ window.location = "app/home.html"; },3000);
        document.getElementById('username').style.border='3px solid green';
        document.getElementById('pass').style.border='3px solid green';
        document.getElementById('txt').innerHTML=" ";
    }
    else if (user == "\x64\x68\x69\x61\x61" && pass == "\x30\x30\x30\x30"){
        document.getElementById('txtbox').innerHTML=logged;
        setTimeout(function(){ window.location = "app/home.html"; },3000);
        document.getElementById('username').style.border='3px solid green';
        document.getElementById('pass').style.border='3px solid green';
        document.getElementById('txt').innerHTML=" ";
    }
    else if (user == "\x6D\x61\x6E\x61\x72" && pass == "\x30\x30\x30\x30"){
        document.getElementById('txtbox').innerHTML=logged;
        setTimeout(function(){ window.location = "app/home.html"; },3000);
        document.getElementById('username').style.border='3px solid green';
        document.getElementById('pass').style.border='3px solid green';
        document.getElementById('txt').innerHTML=" ";
    }
    else if (isNaN(pass)){
        document.getElementById('txt').innerHTML=error_passNotNumber;
        document.getElementById('pass').style.border='3px solid red';
    }
    else{
        document.getElementById('txt').innerHTML="Try Again <br> Verify Your Username Or Your Passcode";
        document.getElementById('pass').style.border='3px solid orangered';
        document.getElementById('username').style.border='3px solid orangered';
    }
}