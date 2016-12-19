'use strict';

(function () {

    var apiUrl = appUrl + '/api/:tanamanid';
    var apiUrlUser = appUrl + '/api/:id';

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailtanaman));

    function updateDetailtanaman (data) {
        var dbResult = JSON.parse(data);
        console.log(dbResult);

    }

    /*
    document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });
    */

})();