module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets/img");

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
};
