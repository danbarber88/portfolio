module.exports = {
  siteMetadata: {
    title: `Dan Barber`,
    description: `Browse a selection of my work and don't hesitate to get in touch.`,
    author: `Dan Barber`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Barber's Porftfolio`,
        short_name: `Dan Barber`,
        start_url: `/`,
        background_color: `#2D2F45`,
        theme_color: `#2D2F45`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
