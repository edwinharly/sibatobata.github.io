'use strict';

(function () {
    /*
    var profileId = document.querySelector('#profile-id') || null;
    var profileUsername = document.querySelector('#profile-username') || null;
    var profileRepos = document.querySelector('#profile-repos') || null;
    var displayName = document.querySelector('#display-name');
    */
    var ulArtikel = document.getElementById('ulArtikel');

    //var apiUrl = appUrl + 'api/:id/artikel';
    var apiUrl = appUrl + '/api/:id/artikel';

    function updateArticles (data) {
        var dbResult = JSON.parse(data);
        //update elemen html dibawah
        console.log(dbResult);
        for (var i=0; i<dbResult.length; i++) {
            console.log(dbResult[i]);
            var li = document.createElement('li');  
            var node = document.createTextNode(dbResult[i].title);
            li.appendChild(node);
            ulArtikel.appendChild(li);
        }
    }
    //console.log();
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateArticles));

})();