// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "http://forums.somethingawful.com/*",
  contentScriptFile: [	self.data.url("jquery-2.1.0.min.js"),
  						self.data.url("underscore-min.js"),
  						self.data.url("backbone-min.js"),
  						self.data.url("MetroJs.min.js"),
  						self.data.url("somethingreallyawful.js"),
  						self.data.url("posts.js"),
  						self.data.url("newpost.js"),
  						self.data.url("threads.js"),
  						self.data.url("forums.js"),
  						self.data.url("script.js")
  					 ],
  contentStyleFile: [	self.data.url("MetroJs.min.css"),
						self.data.url("custom.css")
					]
});