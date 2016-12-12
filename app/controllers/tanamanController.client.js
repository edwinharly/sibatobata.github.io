'use strict';

(function () {

    var ulTanaman = document.querySelector('#ulTanaman');
    var apiUrl = appUrl + '/api/tanaman';

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {

    }));

})();