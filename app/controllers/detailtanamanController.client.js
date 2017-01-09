'use strict';

(function () {
    //console.log("controller begin");
    var crrUrl = window.location.href;
    var startPos = crrUrl.lastIndexOf('/');
    var apiUrl = appUrl + '/api/detailtanaman/' + crrUrl.slice(startPos+1);
    var apiUrlUser = appUrl + '/api/:id';
    //console.log(apiUrl);

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailtanaman));

    function updateDetailtanaman (data) {
        var dbResult = JSON.parse(data);
        //console.log(dbResult);
        /* cth isi dbResult
        "_id": "586f098244d28410540fb3f1",
        "nama": "ANGGRUNG",
        "namaLatin": "Trema orientalis BI",
        "khasiat": [
            "Mengobati batuk",
            "Diare",
            "Masuk angin",
            "Nyeri perut"
        ],
        "budidaya": [
            "Menggunakan rimpang, anakan atau biji.",
            "Pemeliharaan tanaman ini mudah, seperti tanaman lain di butuhkan cukup air dengan penyiraman atau menjaga kelembaban tanah dan pemupukan terutama pupuk dasar.",
            "Tanaman ini menghendaki tempat yang cukup matahari."
        ],
        "upvotes": []
        */
        var namaTanaman = document.getElementById('namaTanaman');
        var namaLatin = document.getElementById('namaLatin');
        var khasiatTanaman = document.getElementById('khasiatTanaman');
        var olBudidaya = document.getElementById('stepBudidaya');
        var gmbrTanaman = document.getElementById('gambarTanaman');
        var poin = document.getElementById('poin');

        namaTanaman.innerHTML = dbResult.nama + ' (' + dbResult.upvotes.length + ' poin)';
        namaLatin.innerHTML = dbResult.namaLatin;
        gmbrTanaman.setAttribute('src', dbResult.imgSrc);
        for (var i=0; i<dbResult.khasiat.length; i++) {
            if (i !== dbResult.khasiat.length-1) {
                khasiatTanaman.innerHTML += dbResult.khasiat[i]+', ';
            } else {
                khasiatTanaman.innerHTML += dbResult.khasiat[i]+'.';
            }
        }
        for (var j=0; j<dbResult.budidaya.length; j++) {
            var li = document.createElement('li');
            var text = document.createTextNode(dbResult.budidaya[j]);
            li.appendChild(text);
            olBudidaya.appendChild(li);
        }

        if (dbResult.verified) {
            var verified = document.getElementById('verified');
            var text = document.createTextNode("Informasi ini telah diverifikasi oleh " + dbResult.verified);
            var cntg = document.createElement('i');
            cntg.setAttribute('class', 'fa fa-check-square fa-2x');
            verified.appendChild(cntg);
            verified.appendChild(text);

        }
        
    }

    function updateUpvote (data) {
        var dbResult = JSON.parse(data);
        var namaTanaman = document.getElementById('namaTanaman');
        namaTanaman.innerHTML = dbResult.nama + ' (' + dbResult.upvotes.length + ' poin)';
    }

    var btnUpvote = document.getElementById('btnUpvote');
    btnUpvote.addEventListener('click', function () {
        //console.log('sebelum ajax');
        ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
            ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailtanaman);
            var btnUpvote = document.getElementById('btnUpvote');
            btnUpvote.innerHTML = "Upvoted !";
            btnUpvote.setAttribute('class', 'btn btn-success btn-lg btnLike fa fa-lg fa-arrow-up');
        });
    });

    
    document.addEventListener('DOMContentLoaded', function() {
        ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlUser, function(data) {
            var userObject = JSON.parse(data);
            var username = document.getElementById('display-name');
            username.innerHTML = userObject['displayName'];
        }));
    });
    
    //console.log("controller end");
})();