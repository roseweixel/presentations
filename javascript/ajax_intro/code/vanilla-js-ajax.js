function loadXMLDoc() {
    var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400')
           }
           else {
               alert('something else other than 200 was returned')
           }
        }
    }

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
}
