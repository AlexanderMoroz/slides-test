const path = require('path');

require("dotenv").config({
  path: path.resolve(__dirname, '../../../../../.env'),
});

module.exports = {
  siteMetadata: {
    siteUrl: "localhost:8000",
    title: "Slides test",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-deep',
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        default: {
          placeholder: 'none',
          backgroundColor: "transparent",
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['lato\:300,700'],
        display: 'swap'
      }
    }
  ],
};
