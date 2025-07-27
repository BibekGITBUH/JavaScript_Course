console.log(document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`  // encodeURIComponent provide the the facility 
                                                                            // to write special symbols like =,"",etc in key or component 
console.log(document.cookie) 

//cookie options: 
// if we want to set the cookies more then one then other will be ignore and first will be set:
   // eg:   document.cookie="1=2;3=4"
// => In a result : console.log(document.cookies)  will give '1=2'

// but :   document.cookie="user=bibek; path=/a; expires=Tue,29 March 2050 04:17:22 GMT"   
      // then cookie will be seen in only /a not in other like /jokes , /dashboard , etc.
       // rather it will be find in /a/b or /a/jokes/dashboard etc      
       // and expires on Tue,29 March 2050 04:17:22 GMT\

// The name=value pair, after encodeURIComponent , should not exceed 4KB 
// Total number of cookie per domain is is limited to around 20+  (exact is depend on browsers)       


// a simple function to clear all cookies
function deleteAllCookies() {
   document.cookie.split(';').forEach(cookie => {
       const eqPos = cookie.indexOf('=');
       const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
       document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
   });
}



//Another function to clear all cookies:

// document.cookie.split(";").forEach(function(c) 
// { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });



//Another function to clear all cookies:

//javascript:(function(){document.cookie.split(";").forEach(function(c) 
//{ document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); }); })();