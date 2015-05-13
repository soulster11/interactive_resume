var bio=	{
	"name"	: "James Waltz",
	"role"	: "Terribly Aweful Programmer",
	"contacts": {
		"mobile": "317-989-6667",
		"email": "abeardedmoose@gmail.com",
		"github": "soulster11",
		"twitter" : "@soulster11",
		"location" : "Indianapolis, IN",
		"title": "Senior Network Support",
		"employer": "AT&T"  
	},
	"welcomeMsg" : "Welcome to the Udacity Resume of James Waltz, Application Developer for AT&T",
	"skills": [ "Wanting to Learn!", "But Not Getting This Programming Thing!", "So I'm a Struggling Developer!"],
	"biopic": "images/me.jpg",
	"display": function displaybio(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedmobile	= HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedgithub	= HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		var formattedskills = HTMLskills.replace("%data%", bio.skills);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedmobile);
		$("#topContacts").append(formattedemail);
		$("#topContacts").append(formattedtwitter);
		$("#topContacts").append(formattedgithub);
		$("#topContacts").append(formattedlocation);
		$("#header").append(formattedbioPic);
		$("#header").append(formattedwelcomeMsg);

		$("#footerContacts").append(formattedmobile);
		$("#footerContacts").append(formattedemail);
		$("#footerContacts").append(formattedgithub);
		$("#footerContacts").append(formattedtwitter);
		$("#footerContacts").append(formattedlocation);

		if (bio["skills"].length > 0)
		{
			$("#header").append(HTMLskillsStart);
			
			for (count in bio.skills)
			{
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[count]);
				$("#header").append(formattedSkills);
			}
		}
	}
}

var work = {
	"jobs":
	[
		{
			"employer": "AT&T",
			"title": "Senior-Network Support",
			"location": "Indianapolis, IN",
			"dates": "2001 - 2015",
			"description": "Transport Technical Support and Programming."
		},
		{
			"employer": "Communications Company",
			"title": "Fiber Optic Technician",
			"location": 
			[
				"Indiana",
				"Ohio"
			],
			"dates": "1999 - 2001",
			"description": "Install, Splice, Terminate and Test Fiber Optics, CAT3, CAT5 and CAT5e cable."
		}
	],
	"display": function displayWork(){
		for (job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}


var projects={
	"projects":
	[
		{
			"title": "Small Cell Automation",
			"location": "USA",
			"dates": "Jan. 2014 to Present",
			"description": "Develop an application that will automate the configuration of Small Cell devices",
			"images":
			[
				"images/proj1.jpg"
			]
		}
	],
	"display": function displayProjects(){
		for (project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0)
			{
				for (image in projects.projects[project].images)
				{
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}


var education = {
	"schools":
	[

		{
			"name": "IUPUC",
			"location": "Columbus, IN",
			"degree": "N/A",
			"major": "Business Management",
			"dates": "2006",
			"url": "http://www.iupuc.edu"

		},
		{
			"name": "IvyTech",
			"location": "Columbus, IN",
			"degree": "N/A",
			"major": "Graphic Design",
			"dates": "1994-1995",
			"url": "http://www.ivytech.edu/columbus/"
		}
	],
	"onlineCourses":
	[
		{
			"title": "JavaScript",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title": "HTML Basics",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
			"title": "Version Control",
			"school": "Udacity",
			"date": "2015",
			"url": "https://www.udacity.com/course/viewer/#!c-nd001/l-2958618869"
		}
	],
	"display": function displayEducation() {
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			
			var formattedNameDegree = formattedName + formattedDegree;
			
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
			
		$(".education-entry:last").append(HTMLonlineClasses);
			
		for (onlinecourse in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
			var formattedDate = HTMLschoolDates.replace("%data%", education.onlineCourses[onlinecourse].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			
			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDate);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc)
{
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];
	
	for (jobs in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray .push(newLocation);
	}

	return locationArray;
}

function inName(name){
	var name = name.trim().split(" ");

	name[0] = name[0].toLowerCase();
	name[0] = name[0].substr(0,1).toUpperCase();
	name[1] = name[1].toUpperCase;

	return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);