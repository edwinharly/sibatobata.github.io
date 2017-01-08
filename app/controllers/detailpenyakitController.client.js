'use strict';

(function () {
    var crrUrl = window.location.href;
    var startPos = crrUrl.lastIndexOf('/');
    var apiUrl = appUrl + '/api/detailpenyakit/' + crrUrl.slice(startPos+1);
    var apiUrlUser = appUrl + '/api/:id';
    //console.log(apiUrl);

    ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailpenyakit));

    function updateDetailpenyakit (data) {
        var dbResult = JSON.parse(data);
        //console.log(dbResult);
        /* cth isi dbResult
        "_id": "58719cd62c79e70fe79842ca",
        "nama": "Diabetes",
        "namaMedis": "Diabetes melitus",
        "gejala": [
            "Haus",
            "Penurunan berat badan",
            "Luka tidak sembuh-sembuh"
        ],
        "pengobatan": [
            "Alpukat",
            "Bambu Tali"
        ],
        "upvotes": []
        */
        var namaPenyakit = document.getElementById('namaPenyakit');
        var namaMedis = document.getElementById('namaMedis');
        var gejala = document.getElementById('gejala');
        var olPengobatan = document.getElementById('pengobatan');
        var gmbrPenyakit = document.getElementById('gambarPenyakit');
        //var poin = document.getElementById('poin');

        namaPenyakit.innerHTML = dbResult.nama + ' (' + dbResult.upvotes.length + ' poin)';
        namaMedis.innerHTML = dbResult.namaMedis;
        for (var i=0; i<dbResult.gejala.length; i++) {
            if (i !== dbResult.gejala.length-1) {
                gejala.innerHTML += dbResult.gejala[i]+', ';
            } else {
                gejala.innerHTML += dbResult.gejala[i]+'.';
            }
        }
        for (var j=0; j<dbResult.pengobatan.length; j++) {
            var li = document.createElement('li');
            var text = document.createTextNode(dbResult.pengobatan[j]);
            li.appendChild(text);
            olPengobatan.appendChild(li);
        }
        
    }

    function updateUpvote (data) {
        var dbResult = JSON.parse(data);
        var namaPenyakit = document.getElementById('namaPenyakit');
        namaPenyakit.innerHTML = dbResult.nama + ' (' + dbResult.upvotes.length + ' poin)';
    }

    var btnUpvote = document.getElementById('btnUpvote');
    btnUpvote.addEventListener('click', function () {
        //console.log('sebelum ajax');
        ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
            ajaxFunctions.ajaxRequest('GET', apiUrl, updateDetailpenyakit);
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