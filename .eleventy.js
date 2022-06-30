const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);

  // Collections
  eleventyConfig.addCollection(`pages`, function (collection) {
    return collection.getFilteredByGlob(`./src/content/pages/*.md`);
  });
  eleventyConfig.addCollection(`posts`, function (collection) {
    return collection.getFilteredByGlob(`./src/content/posts/*.md`);
  });

  // Filters
  eleventyConfig.addFilter("formatDate", function (str, locale) {
    const date = new Date(str);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat(locale, options).format(date);
  });

  // Assets
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/assets/styles/global.css");
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
