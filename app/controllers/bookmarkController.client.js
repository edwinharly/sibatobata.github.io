'use strict';

(function () {

   var bookButton = document.querySelector('.btn-book');
   var unbookButton = document.querySelector('.btn-unbook');
   // var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/bookmark';

   function updateBookmark (data) {
      var dbResult = JSON.parse(data);
      // code utk update tampilan sesuai dengan kondisi bookmark/tidak
      //console.log(dbResult);
      
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark));

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

})();
