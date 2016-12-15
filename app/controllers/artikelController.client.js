'use strict';

(function () {
    /*
    var profileId = document.querySelector('#profile-id') || null;
    var profileUsername = document.querySelector('#profile-username') || null;
    var profileRepos = document.querySelector('#profile-repos') || null;
    var displayName = document.querySelector('#display-name');
    */
    var apiUrl = appUrl + '/api/artikel';
    var ulArtikel = document.getElementById('ulArtikel');

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
        var articleObject = JSON.parse(data);
        // update elemen html dibawah
        var headline;
        for (var i=0; i<articleObject.length; i++) {
            headline = articleObject[i].headline;
            var p = document.createElement('p');
            var node = document.createTextNode(headline);
            p.appendChild(node);
            ulArtikel.appendChild(p);
        }


    }));
})();