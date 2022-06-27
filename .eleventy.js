const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Collections
  eleventyConfig.addCollection(`pages`, function (collection) {
    return collection.getFilteredByGlob(`./src/content/pages/*.md`);
  });

  return {
    dir: {
      layouts: "_includes/layouts",
      input: "src",
      output: "dist",
    },
  };
};
