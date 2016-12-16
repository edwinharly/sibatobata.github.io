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
    var apiUrl = 'http://localhost:8080/api/:id/artikel';

    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
        
        var articleObject = JSON.parse(data);
        // update elemen html dibawah
        console.log(articleObject[0].title);
        for (var i=0; i<articleObject.length; i++) {
            var li = document.createElement('li');
            var node = document.createTextNode(articleObject[i].title);
            li.appendChild(node);
            ulArtikel.appendChild(li);
        }
    }));
})();