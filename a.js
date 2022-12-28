var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function httpGet(theUrl)
   {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
   }
   var res1 = httpGet("https://reqres.in/api/users?page=2");
   console.log(res1);
