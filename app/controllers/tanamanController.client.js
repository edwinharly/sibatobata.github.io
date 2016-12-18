'use strict';

(function () {

    var ulTanaman = document.querySelector('#ulTanaman');
    var apiUrl = appUrl + '/api/:id/tanaman';
    var apiUrlUser = appUrl + '/api/:id';

    function updateTanaman (data) {
        var dbResult = JSON.parse(data);
        //update elemen html dibawah
        for (var i=0; i<dbResult.length; i++) {
            var li = document.createElement('li');

            var aTanaman = document.createElement('a');
            aTanaman.setAttribute('id', dbResult._id);
            aTanaman.setAttribute('class', 'btn btn-default btn-lg');
            aTanaman.setAttribute('href', '#');

            var node = document.createTextNode(dbResult.nama);
            aTanaman.appendChild(node);
            li.appendChild(aTanaman);
            ulTanaman.appendChild(li);
        }

    }

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateTanaman));

    //event-event


})();