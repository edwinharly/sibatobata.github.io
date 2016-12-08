'use strict';

(function () {

   var upvoteButton = document.querySelector('.btn-upvote');
   var unvoteButton = document.querySelector('.btn-unvote');
   // var clickNbr = document.querySelector('#click-nbr');
   var upvoteNbr = document.querySelector('#upvote-nbr');
   var apiUrl = appUrl + '/api/:id/upvote';

   function updateUpvote (data) {
      //var clicksObject = JSON.parse(data);
      // clickNbr.innerHTML = clicksObject.clicks;
      var upvotesObject = JSON.parse(data);
      upvoteNbr.innerHTML = upvotesObject.upvotes;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateUpvote));

   upvoteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateUpvote);
      });

   }, false);

   unvoteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateUpvote);
      });

   }, false);

})();
