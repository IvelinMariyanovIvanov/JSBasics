
 function register() {
   
  let userName = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let filter = /(.+)@(.+).(com|bg)/gm;

  if(userName != "" && filter.test(email) && password != "") {
      
      let result = document.getElementById("result");

      let mesg = document.createElement("h1");
      mesg.textContent="Successful Registration!";

      let displayUserName = document.createElement("p");
      displayUserName.textContent = userName;

      let displaPassword = document.createElement("p");
      displaPassword.textContent = password.replace(/./g, '*');

      let dispalayEmail = document.createElement("p")
      dispalayEmail.textContent = email;

      result.style.backgroundColor = "success";

      result.appendChild(mesg);
      result.appendChild(displayUserName);
      result.appendChild(dispalayEmail);
      result.appendChild(displaPassword);

      setTimeout(function() {      
          // result.fadeOut(); 
          result.style.display = "none";
      }, 5000);

    }

  }

