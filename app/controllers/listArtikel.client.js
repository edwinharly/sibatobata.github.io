'use strict';

(function () {

    window.addEventListener('load', function() {

        var ulArtikel = document.getElementById('ulArtikel');

        var query = require('/app/common/mysql-query-function.js');
        
        var resQuery = query('SELECT * from artikel');
        
        for (var i=0; i<resQuery.length; i++) {
            var li = document.createElement('li');
            if (i%3==0){
                li.setAttribute('class', 'first');
            }

            var aImg = document.createElement('a');
            aImg.setAttribute('href', '#');
            
            var img = document.createElement('img');
            img.setAttribute('src', resQuery[i].imageUrl);

            var pTitle = document.createElement('p');
            var pNode = document.createTextNode(resQuery[i].title + '<br/>' + resQuery[i].headline);
            pTitle.appendChild(pNode);

            var aLink = document.createElement('a');
            aLink.setAttribute('class', 'link');
            aLink.setAttribute('href', '#');
            aLink.setAttribute('onclick', resQuery[i].url);
            var aLinkNode = document.createTextNode('Baca'); 

            var aBook = document.createElement('a');
            aBook.setAttribute('class', 'book');
            aBook.setAttribute('href', '#');
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

    })
    
    

})();