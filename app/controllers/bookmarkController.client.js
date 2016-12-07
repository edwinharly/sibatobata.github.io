'use strict';

(function () {

   var bookButton = document.querySelector('.btn-add');
   var unbookButton = document.querySelector('.btn-delete');
   // var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/clicks';

   function updateBookmark (data) {
      var clicksObject = JSON.parse(data);
      // clickNbr.innerHTML = clicksObject.clicks;
      // code utk update tampilan sesuai dengan kondisi bookmark/tidak
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark));

   bookButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark);
      });

   }, false);

   unbookButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateBookmark);
      });

   }, false);

})();
