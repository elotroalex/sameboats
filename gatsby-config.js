module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
        icon: "home.svg",
        alt: "A home",
      },
      {
        name: "Instructions",
        link: "/instructions",
        icon: "page.svg",
        alt: "A page",
      },
      {
        name: "Trajectories",
        link: "/trajectories",
        icon: "visualization.svg",
        alt: "An eye",
      },
      {
        name: "Intersections",
        link: "/intersections",
        icon: "visualization.svg",
        alt: "An eye",
      },
      {
        name: "Search",
        link: "/search",
        icon: "search.svg",
        alt: "A magnifying glass",
      },
      {
        name: "Credits",
        link: "/credits",
        icon: "page.svg",
        alt: "A page",
      },
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
