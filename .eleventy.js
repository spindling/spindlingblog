// eleventy config
const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){

	eleventyConfig.addPlugin(pluginNavigation);

    //luxon date formating
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("dd LL yyyy")
    })

    //luxon make it accessible for html datetime="yyyy-LL-dd"
    eleventyConfig.addFilter("dateToString", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("yyyy-LL-dd")
    })
	
	//copy css to the output
	eleventyConfig.addPassthroughCopy('src/css/style.css');

    return {
	templateFormats: [
		"md",
		"njk",
		"html",
	],
    dir: {
        input: "src",
        output: "dist",
        }
    };
};
