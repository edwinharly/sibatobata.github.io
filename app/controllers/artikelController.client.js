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
    var apiUrl2 = appUrl + '/api/bookmark/'
    var apiUrlUser = appUrl + '/api/:id/';

    function updateArticles (data) {
        var dbResult = JSON.parse(data);
        //update elemen html dibawah
        
        for (var i=0; i<dbResult.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('id', dbResult._id);
            if (i%3==0){
                li.setAttribute('class', 'first');
            }

            var aImg = document.createElement('a');
            aImg.setAttribute('href', '#');
            
            var img = document.createElement('img');
            img.setAttribute('src', dbResult[i].imgSrc);

            var pTitle = document.createElement('p');
            var pNode = document.createTextNode(dbResult[i].title + '\n' + dbResult[i].headline);
            pTitle.appendChild(pNode);

            var aLink = document.createElement('a');
            aLink.setAttribute('class', 'link');
            aLink.setAttribute('href', '#');
            aLink.setAttribute('onclick', 'showArtikel(\'' + dbResult[i].url + '\')');
            var aLinkNode = document.createTextNode('Baca'); 

            var aBook = document.createElement('a');
            aBook.setAttribute('class', 'book');
            aBook.setAttribute('href', '#');
            aBook.setAttribute('onclick', 'addBookmark(\'' + dbResult[i]._id + '\')');

            var iBook = document.createElement('i');
            iBook.setAttribute('class', 'fa fa-bookmark');
            iBook.setAttribute('aria-hidden', 'true');

            var span = document.createElement('span');

            aLink.appendChild(aLinkNode);
            aBook.appendChild(iBook);
            aImg.appendChild(img);

            li.appendChild(aImg); li.appendChild(span); li.appendChild(pTitle); li.appendChild(aLink); li.appendChild(aBook);
            ulArtikel.appendChild(li);
            
        }
    }
    
    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateArticles));

    var addBookmark = function (id) {
       ajaxFunctions.ajaxRequest('POST', apiUrl2+id, function() {
           console.log('dalam ajax post');
           ajaxFunctions.ajaxRequest('GET', apiUrl, updateArticles)
       })
    }

    document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });

    /*
    var bookBtns = document.getElementsByClassName('book');
    for (var i=0; i<bookBtns.length; i++) {
        bookBtns[i].addEventListener('click', function() {
            var artikelLi = bookBtns[i].parentNode;
            ajaxFunctions.ready(ajaxFunctions.ajaxRequest('POST', apiBookmark, function () {
                
            }));
        })
    }
    */

})();