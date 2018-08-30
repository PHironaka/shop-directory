module.exports = {
  siteMetadata: {
    title: 'Superstylin',
    description: 'A Gatsby Starter with styled-components'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}
