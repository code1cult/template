
const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
    {
        allPrismicBlogpost {
          edges {
            node {
              id
              data {
                id
                title {
                  text
                  html
                }
                image {
                  alt
                  copyright
                  url
                }
                description {
                  text
                  html
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
      console.log(result)
    result.data.allPrismicBlogpost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.data.id}`,
        component: path.resolve(`./src/pages/page.js`),
        context: {
        productId: node.data.id
        },
      })
    })
    resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
};