module.exports = {
  // siteMetadata: {
  //   title: `How to Lose Weight`,
  //   siteUrl: `https://lose-weight.netlify.com/`,
  //   description: `Blog About How to Lose Weight`,
  // },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128204944-3",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '50986856',
        webvisor: true,
        trackHash: true,
        version: 2
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `pjb3ehbqdwuo`,
    //     accessToken: `936f4b8ce8b774d3f0cbcc30624d36fb7a67c4b3fd505ebf85de1664fee5d4c7`,
    //   },
    // },

    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'blog-template',
        accessToken: 'MC5XOXk0R1JBQUFDVUFZVEdK.MO-_vTLvv70SMe-_ve-_vWDvv73vv707cHfvv73vv73vv73vv71aQe-_vTs377-977-9CO-_ve-_ve-_ve-_vWxx',
      },
    }
  ],
}
