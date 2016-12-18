'use strict';

(function () {

    var ulTanaman = document.querySelector('#ulTanaman');
    var apiUrl = appUrl + '/api/:id/tanaman';
    var apiUrlUser = appUrl + '/api/:id';
    var dbResult;

    function updateTanaman (data) {
        dbResult = JSON.parse(data);
        console.log(dbResult);
        sortAscending();
        isiListTanaman();
    }

    function isiListTanaman () {
        while (ulTanaman.firstChild) {
            ulTanaman.removeChild(ulTanaman.firstChild);
        }

        for (var i=0; i<dbResult.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('id', dbResult[i]._id);

            var aTanaman = document.createElement('a');
            aTanaman.setAttribute('class', 'btn btn-default btn-lg');
            aTanaman.setAttribute('href', '#');

            var node = document.createTextNode(dbResult[i].nama + ' (' + dbResult[i].upvotes + ' poin)');
            aTanaman.appendChild(node);
            li.appendChild(aTanaman);
            ulTanaman.appendChild(li);
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

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateTanaman));


    //event-event
    var btnSortAsc = document.getElementById('btnSortAsc');
    btnSortAsc.addEventListener('click', function () {
        sortAscending();
        isiListTanaman();
    });

    var btnSortDsc = document.getElementById('btnSortDsc');
    btnSortDsc.addEventListener('click', function () {
        sortDescending();
        isiListTanaman();
    });

    var btnSortUpv = document.getElementById('btnSortUpv');
    btnSortUpv.addEventListener('click', function () {
        sortUpvotes();
        isiListTanaman();
    });

})();