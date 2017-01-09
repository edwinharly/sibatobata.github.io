var gejala = [
    'nyeri perut',
    'nyeri sendi',
    'gatal-gatal',
    'kulit kuning',
    'rambut rontok',
    'haus',
    'penurunan berat badan',
    'luka tidak sembuh-sembuh',
    'rasa sakit saat buang air kecil',
    'sakit di bagian bawah perut',
    'depresi',
    'sulit tidur',
    'nyeri punggung',
    'sering ngantuk',
    'keringat berlebihan',
    'muncul benjolan tanpa rasa sakit',
    'demam',
    'menggigil',
    'keringat malam',
    'batuk-batuk',
    'batuk berdarah',
    'sulit bernapas',
    'nyeri dada',
    'perut mual',
    'warna kotoran hijau',
    'dehidrasi',
    'kurang darah',
    'bau mulut',
    'bau badan',
    'mimisan',
    'memar',
    'nafsu makan berkurang',
    'gejala kuning pada tubuh',
    'sakit perut',
    'perut kembung',
    'mual',
    'suhu badan tinggi',
    'sakit kepala',
    'diare',
    'infeksi tenggorokan',
    'sembelit',
    'muncul bintik merah',
];
gejala.sort();

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('radioContainer');
    for (var i=0; i<gejala.length; i++)
    {
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.setAttribute('value', gejala[i]);
        check.setAttribute('class', 'checkboxGejala');

        var lbl = document.createElement('label');
        var txt = document.createTextNode(' ' + gejala[i]);
        lbl.appendChild(txt);

        var div = document.createElement('div');
        div.setAttribute('class', 'col-md-6');
        div.appendChild(check);
        div.appendChild(lbl);

        container.appendChild(div);
        /*
        if(i%2==1) {
            var br = document.createElement('br');
            container.appendChild(br);
        }
        */

    }
});

var btn = document.getElementById('btnquiz');
btn.addEventListener('click', function() {
    
})