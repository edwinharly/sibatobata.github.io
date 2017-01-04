'use strict';

(function () {
    //console.log("controller begin");
    var crrUrl = window.location.href;
    var startPos = crrUrl.lastIndexOf('/');
    var apiUrl = appUrl + '/api/detailtanaman/' + crrUrl.slice(startPos+1);
    var apiUrlUser = appUrl + '/api/:id';
    //console.log(apiUrl);

    

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailtanaman));

    function updateDetailtanaman (data) {
        var dbResult = JSON.parse(data);
        console.log(dbResult);

    }

    
    document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });
    
    //console.log("controller end");
})();