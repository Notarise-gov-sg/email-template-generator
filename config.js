/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    posthtml: {
      expressions: {
        delimiters: ["[[", "]]"]
      }
    },
    templates: {
      source: "maizzle/src/templates",
      destination: {
        path: "maizzle/build_local"
      }
    },
    tailwind: {
      css: "maizzle/src/css/tailwind.css"
    }
  },
  googleFonts: "family=Inter:wght@400;700"
};
