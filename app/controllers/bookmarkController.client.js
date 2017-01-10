'use strict';

(function () {

   var bookButton = document.querySelector('.btn-book');
   var unbookButton = document.querySelector('.btn-unbook');
   // var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/bookmark';
   var apiUrl2 = appUrl + '/api/bookmark/';
   var apiUrlUser = appUrl + '/api/:id';

   function updateBookmark (data) {
        var dbResult = JSON.parse(data);
        // code utk update tampilan sesuai dengan kondisi bookmark/tidak
        console.log(dbResult);
        /*
        _id: 584e5d98872b90359eaf6546,
        bookmarkedArticles: [ 
            { 
                url: 'https://www.merdeka.com/sehat/tanaman-herba-ini-ampuh-bunuh-sel-kanker-dalam-16-jam.html',
                imgSrc: '/public/img/tanaman-herba-ini-ampuh-bunuh-sel-kanker-dalam-16-jam.jpg',
                headline: 'Merdeka.com - Banyak orang yang belum familiar dengan tanaman herba bernama wormwood yang biasanya digunakan oleh masyarakat . . .',
                title: 'Ini 4 tanaman herbal pengusir racun dari tubuh' 
            } 
        ]
        */
        for (var i=0; i<dbResult.bookmarkedArticles.length; i++)
        {
            var li = document.createElement('li');
            li.setAttribute('id', dbResult.bookmarkedArticles[i]._id);
            if (i%3==0){
                li.setAttribute('class', 'first');
            }

            var aImg = document.createElement('a');
            aImg.setAttribute('href', '#');
            
            var img = document.createElement('img');
            img.setAttribute('src', dbResult.bookmarkedArticles[i].imgSrc);

            var pTitle = document.createElement('p');
            var pNode = document.createTextNode(dbResult.bookmarkedArticles[i].title + '\n' + dbResult.bookmarkedArticles[i].headline);
            pTitle.appendChild(pNode);

            var aLink = document.createElement('a');
            aLink.setAttribute('class', 'link');
            aLink.setAttribute('href', '#');
            aLink.setAttribute('onclick', 'showArtikel(\'' + dbResult.bookmarkedArticles[i].url + '\')');
            var aLinkNode = document.createTextNode('Baca'); 

            var aBook = document.createElement('a');
            aBook.setAttribute('class', 'book');
            aBook.setAttribute('href', '#');
            aBook.setAttribute('onclick', 'removeBookmark(\'' + dbResult.bookmarkedArticles[i].url + '\')');
            /*
            aBook.addEventListener('click', function() {
                ajaxFunctions.ajaxRequest('DELETE', dbResult.bookmarkedArticles[i].url, function() {
                    //console.log('dalam ajax delete');
                });
            })
            */
            var iBook = document.createElement('i');
            iBook.setAttribute('class', 'fa fa-trash');
            iBook.setAttribute('aria-hidden', 'true');

            var span = document.createElement('span');

            aLink.appendChild(aLinkNode);
            aBook.appendChild(iBook);
            aImg.appendChild(img);

            var ulBookmarked = document.getElementById('ulBookmarked');
            li.appendChild(aImg); li.appendChild(span); li.appendChild(pTitle); li.appendChild(aLink); li.appendChild(aBook);
            ulBookmarked.appendChild(li);
        }
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark));

   /*
   function removeBookmark (url) {
       ajaxFunctions.ajaxRequest('DELETE', apiUrl2+url, function() {
           console.log('dalam ajax delete');
       });
   }
   */

   document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });


   /*
   bookButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         //ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark);
      });

   }, false);

   unbookButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         //ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark);
      });

   }, false);
   */

})();
