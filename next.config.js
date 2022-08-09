const withMdxEnhanced = require("next-mdx-enhanced");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const mdxPrism = require("mdx-prism");
const readingTime = require("reading-time");

module.exports = withPlugins([
  [
    withMdxEnhanced({
      layoutPath: "components/layouts",
      fileExtensions: ["mdx"],
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [],
      defaultLayout: true,
      extendFrontMatter: {
        process: (mdxContent, frontMatter) => {
          const time = new Date(
            frontMatter.timestamp * 1000
          ).toLocaleTimeString("en-US");
          const date = new Date(
            frontMatter.timestamp * 1000
          ).toLocaleDateString("en-US");
          return {
            ...frontMatter,
            time,
            date,
            readingTime: readingTime(mdxContent),
          };
        },
      },
    }),
  ],
  [optimizedImages],
  {
    env: {
      AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
      AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    },
  },
]);
