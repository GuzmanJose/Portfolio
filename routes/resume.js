var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	var projectData = req.app.get('portfolioData');
	var name,
	description,
	goals,
	background,
	education = [],
	experience = [],
	skills = [],
	software = [],
	development = [],
	language = [],
	contact;

	name = projectData.Author.name;
	description = projectData.Author.description;
	goals = projectData.Author.goals;
	background = projectData.Author.background;
	education = projectData.Author.education;
	experience = projectData.Author.experience;
	skills = projectData.Author.skills;
	software = projectData.Author.software;
	development = projectData.Author.development;
	language = projectData.Author.language;
	contact = projectData.Author.contact;



	res.render('resume', {
		title: "Resume",
		id: 'Resume',
		name: name,
		description: description,
		goals: goals,
		backgroundImage: background,
		education: education,
		experience: experience,
		skills: skills,
		software: software,
		development: development,
		language: language,
		contact: contact
	});
});

module.exports = router;
