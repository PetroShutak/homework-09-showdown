const e=document.getElementById("myBtn"),t=document.getElementById("myModal"),n=document.getElementsByClassName("close")[0];e.onclick=function(){t.style.display="block"},n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")};const l=document.getElementById("myBtn-registr"),o=document.getElementById("myModalSignUp"),s=document.getElementsByClassName("closeSign")[0];l.onclick=function(){o.style.display="block"},s.onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==o&&(o.style.display="none")};document.getElementById("myModalSignUp").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("usernameSign").value,n=document.getElementById("passwordSign").value;localStorage.setItem("username",t),localStorage.setItem("password",n),document.getElementById("username").value="",document.getElementById("password").value="",alert("Registration successful!"),o.style.display="none"}));const d=document.getElementById("test");document.getElementById("login-form").addEventListener("submit",(e=>{e.preventDefault();const n=document.getElementById("username").value,l=document.getElementById("password").value;n===localStorage.getItem("username")&&l===localStorage.getItem("password")?(alert("Login successful!"),t.style.display="none",localStorage.setItem("isLoggedIn",!0)):(alert("Invalid username or password!"),t.style.display="none"),document.getElementById("username").value="",document.getElementById("password").value=""})),d.addEventListener("click",(e=>{e.preventDefault(),"true"===localStorage.getItem("isLoggedIn")?window.open("https://www.youtube.com/watch?v=QH2-TGUlwu4","_blank"):alert("Please log in first.")})),window.openRegistrationModal=function(e){e.preventDefault();const t=document.getElementById("myModal"),n=document.getElementById("myModalSignUp");t.style.display="none",n.style.display="block"};document.getElementById("myBtn-registr").addEventListener("click",openRegistrationModal);
//# sourceMappingURL=login-form.0a509f46.js.map
