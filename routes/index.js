var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var projectData = req.app.get('portfolioData');
	var thumbnails = [];
	var projectTitle = [];

	projectData.Projects.forEach(function(item) {
		thumbnails = thumbnails.concat(item.thumbnail);
		projectTitle = projectTitle.concat(item.title);
	});

	res.render('index', { 
		title: 'Portfolio',
		id: 'Home',
		portfolioThumb: thumbnails,
		portfolioTitle: projectTitle
	});
});


module.exports = router;
