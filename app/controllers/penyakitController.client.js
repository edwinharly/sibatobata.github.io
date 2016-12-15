'use strict';

var Penyakit = require('../models/penyakit.js');

document.addEventListener('DOMContentLoaded', function() {
	var penyakitObject = Penyakit.find();
	console.log(penyakitObject);
})
