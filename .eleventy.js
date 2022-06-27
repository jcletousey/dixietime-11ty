const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      layouts: "_includes/layouts",
      input: "src",
      output: "dist",
    },
  };
};
