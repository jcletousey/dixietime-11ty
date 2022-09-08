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
  eleventyConfig.addCollection(`events`, function (collection) {
    return collection.getFilteredByGlob(`./src/content/events/*.md`);
  });

  // Filters
  eleventyConfig.addFilter("addNbsp", (str) => {
    if (!str) {
      return;
    }
    let title = str.replace(/((.*)\s(.*))$/g, "$2&nbsp;$3");
    title = title.replace(/"(.*)"/g, '\\"$1\\"');
    return title;
  });
  eleventyConfig.addFilter("formatDate", function (str) {
    const date = new Date(str);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("fr", options).format(date);
  });
  eleventyConfig.addFilter("eventsFilter", function (collection, filter) {
    let events = [];
    const date = new Date();
    if (filter == "past") {
      events = collection.filter(
        (item) => new Date(item.data.start.date) < date
      );
    } else if (filter == "coming") {
      events = collection.filter(
        (item) => new Date(item.data.start.date) >= date
      );
    } else {
      return events;
    }
    return events.sort((a, b) =>
      a.data.start.date >= b.data.start.date ? 1 : -1
    );
  });

  // Assets
  eleventyConfig.addWatchTarget("./src/assets/styles/global.css");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/sounds");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/styles/main.css": "./assets/css/main.css",
    "./src/assets/styles/fonts.css": "./assets/css/fonts.css",
    "./src/assets/styles/player.css": "./assets/css/player.css",
  });

  return {
    dir: {
      layouts: "_includes/layouts",
      input: "src",
      output: "dist",
    },
  };
};
