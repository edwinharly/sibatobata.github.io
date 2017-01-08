'use strict';

(function () {

    var ulPenyakit = document.querySelector('#ulPenyakit');
    var apiUrl = appUrl + '/api/:id/penyakit';
    var apiUrlUser = appUrl + '/api/:id';
    var dbResult;

    function updatePenyakit (data) {
        dbResult = JSON.parse(data);
        console.log(dbResult);
        sortAscending();
        isiListPenyakit();
    }

    function isiListPenyakit () {
        while (ulPenyakit.firstChild) {
            ulPenyakit.removeChild(ulPenyakit.firstChild);
        }

        for (var i=0; i<dbResult.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('id', dbResult[i]._id);

            var aPenyakit = document.createElement('a');
            aPenyakit.setAttribute('class', 'btn btn-default btn-lg');
            aPenyakit.setAttribute('href', '/detailpenyakit/' + dbResult[i]._id);

            var node = document.createTextNode(dbResult[i].nama + ' (' + dbResult[i].upvotes.length + ' poin)');
            aPenyakit.appendChild(node);
            li.appendChild(aPenyakit);
            ulPenyakit.appendChild(li);
        }
    }

    function sortAscending () { 
        dbResult.sort( function (a, b) {
            var nameA = a.nama.toUpperCase();
            var nameB = b.nama.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    function sortDescending () {
        dbResult.sort( function (a, b) {
            var nameA = a.nama.toUpperCase();
            var nameB = b.nama.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
    }
    function sortUpvotes () {
        dbResult.sort( function (a, b) {
            if (a.upvotes > b.upvotes) {
                return -1;
            }
            if (a.upvotes < b.upvotes) {
                return 1;
            }
            return 0;
        });
    }

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updatePenyakit));


    //event-event
    document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });

    var btnSortAsc = document.getElementById('btnSortAsc');
    btnSortAsc.addEventListener('click', function () {
        sortAscending();
        isiListPenyakit();
    });

    var btnSortDsc = document.getElementById('btnSortDsc');
    btnSortDsc.addEventListener('click', function () {
        sortDescending();
        isiListPenyakit();
    });

    var btnSortUpv = document.getElementById('btnSortUpv');
    btnSortUpv.addEventListener('click', function () {
        sortUpvotes();
        isiListPenyakit();
    });

})();