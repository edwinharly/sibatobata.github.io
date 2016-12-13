'use strict';

(function () {

    var ulArtikel = document.getElementById('ulArtikel');

    /*
    var profileId = document.querySelector('#profile-id') || null;
    var profileUsername = document.querySelector('#profile-username') || null;
    var profileRepos = document.querySelector('#profile-repos') || null;
    var displayName = document.querySelector('#display-name');
    */
    var apiUrl = appUrl + '/api/artikel';


    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
        var articleObject = JSON.parse(data);

        

    }));
})();