const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Collections
  eleventyConfig.addCollection(`pages`, function (collection) {
    return collection.getFilteredByGlob(`./src/content/pages/*.md`);
  });

  // Assets
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/assets/styles/main.css");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/styles/main.css": "./assets/css/main.css",
  });

  return {
    dir: {
      layouts: "_includes/layouts",
      input: "src",
      output: "dist",
    },
  };
};
