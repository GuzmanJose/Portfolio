var express = require('express');
var router = express.Router();



router.get('/:projectId', function (req, res, next) {
	var projectData = req.app.get('portfolioData');
	var projectTitle = req.params.projectId;
	var thumbLink = [],
	titleLink = [];
	var currentDevice = req.device.type;

	projectData.Projects.forEach(function(item) {
	thumbLink = thumbLink.concat(item.thumbnail);
	titleLink = titleLink.concat(item.title);
	});

	var title,
	 type,
	 link,
	 awards = [],
	 skills = [],
	 tools = [],
	 description,
	 processP,
	 hero,
	 videoHero,
	 thumbnail,
	 photos = [],
	 video;

	projectData.Projects.forEach(function(item) {
		if (item.thumbnail == projectTitle) {
			title = item.title;
			awards = item.awards;
			link = item.link;
			type = item.type;
			skills = item.skills;
			tools = item.tools;
			description = item.description;
			processP = item.process;
			hero = item.hero;
			videoHero = item.videoHero;
			thumbnail = item.thumbnail;
			photos = item.photos;
			video = item.video;
		}
	});

	res.render('projects', {
		id: "Project",
		title: title,
		type: type,
		device: currentDevice,
		hero: hero,
		videoHero: videoHero,
		thumbnail: thumbnail,
		awards: awards,
		skills: skills,
		tools: tools,
		description: description,
		process: processP,
		link: link,
		photos: photos,
		video: video,
		thumbLink: thumbLink,
		titleLink: titleLink 				
	});
});

module.exports = router;
