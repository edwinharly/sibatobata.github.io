'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var BookmarkHandler = require(path + '/app/controllers/bookmarkHandler.server.js');
var UpvoteHandler = require(path + '/app/controllers/upvoteHandler.server.js');
var ArticleHandler = require(path + '/app/controllers/artikelHandler.server.js');
var TanamanHandler = require(path + '/app/controllers/tanamanHandler.server.js');
var PenyakitHandler = require(path + '/app/controllers/penyakitHandler.server.js');
var DetailTanamanHandler = require(path + '/app/controllers/detailtanamanHandler.server.js');
var DetailPenyakitHandler = require(path + '/app/controllers/detailpenyakitHandler.server.js');


module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var clickHandler = new ClickHandler();
	var bookmarkHandler = new BookmarkHandler();
    var upvoteHandler = new UpvoteHandler();
    var articleHandler = new ArticleHandler();
	var tanamanHandler = new TanamanHandler();
	var penyakitHandler = new PenyakitHandler();
	var detailtanamanHandler = new DetailTanamanHandler();
	var detailpenyakitHandler = new DetailPenyakitHandler();

	app.route('/').get(isLoggedIn, function (req, res) {
		res.sendFile(path + '/public/index.html');
	});

	app.route('/login').get(function (req, res) {
		res.sendFile(path + '/public/homepage.html');
	});

	app.route('/logout').get(function (req, res) {
		req.logout();
		res.redirect('/login');
	});

	app.route('/profile').get(isLoggedIn, function (req, res) {
		res.sendFile(path + '/public/profile.html');
	});

	app.route('/artikel').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/kumpulanartikel.html');
	});

	app.route('/tanaman').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/daftartanaman.html');
	});

	app.route('/detailtanaman/:tanamanid').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/detailtanaman.html');
		//console.log(req.query.tanamanid);
	});

	app.route('/detailpenyakit/:penyakitid').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/detailpenyakit.html');
		//console.log(req.query.penyakitid);
	});
	
	/*
	app.route('/detailtanaman/:tanamanid').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/detailtanaman.html');
	});
	*/

	app.route('/penyakit').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/daftarpenyakit.html');
	});

	app.route('/about').get(function(req, res) {
		res.sendFile(path + '/public/about.html');
	});

	app.route('/bookmarked').get(isLoggedIn, function(req, res) {
		res.sendFile(path + '/public/bookmarked.html');
	})

	// API API API API API API API

	app.route('/api/:id').get(isLoggedIn, function (req, res) {
		res.json(req.user.twitter);
	});

	app.route('/auth/twitter').get(passport.authenticate('twitter'));

	app.route('/auth/twitter/callback').get(passport.authenticate('twitter', {
		successRedirect: '/',
		failureRedirect: '/login'
	}));

	app.route('/api/:id/tanaman')
		.get(isLoggedIn, tanamanHandler.getTanaman);

	app.route('/api/detailtanaman/:tanamanid')
		.get(isLoggedIn, detailtanamanHandler.getDetailtanaman)
		.post(isLoggedIn, detailtanamanHandler.addUpvote)
		.delete(isLoggedIn, detailtanamanHandler.removeUpvote);

	app.route('/api/detailpenyakit/:penyakitid')
		.get(isLoggedIn, detailpenyakitHandler.getDetailpenyakit)
		.post(isLoggedIn, detailpenyakitHandler.addUpvote)
		.delete(isLoggedIn, detailpenyakitHandler.removeUpvote);

	app.route('/api/upvote/:tanamanid')
        .get(isLoggedIn, upvoteHandler.getUpvotes)
        .post(isLoggedIn, upvoteHandler.addUpvote)
        .delete(isLoggedIn, upvoteHandler.removeUpvote);

	app.route('/api/:id/penyakit')
		.get(isLoggedIn, penyakitHandler.getPenyakit);

	app.route('/api/:id/artikel')
		.get(isLoggedIn, articleHandler.getArticles);

	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);

	app.route('/api/:id/bookmark')
		.get(isLoggedIn, bookmarkHandler.getBookmarks);

	app.route('/api/bookmark/:articleid')
		.post(isLoggedIn, bookmarkHandler.addBookmark)
		.delete(isLoggedIn, bookmarkHandler.removeBookmark);



	// =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    /*
    app.route('/auth/facebook')
    	.get(passport.authenticate('facebook'));

    // handle the callback after facebook has authenticated the user
    app.route('/auth/facebook/callback')
    	.get(passport.authenticate('facebook', {
            failureRedirect : '/login'
        }),
		function(req, res) {
			res.redirect('/');
		}
        );
	*/
    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    /*
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/',
            failureRedirect : '/login'
        }));
    */
};
