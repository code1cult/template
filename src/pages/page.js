import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'



const IndexPage = ({ data }) => {

  

  let blog = data.allPrismicBlogpost.edges[0].node.data
  debugger
  return (
    <div>
      <Navigation />
      <Header title={blog.title.text}   image={blog.image.url} />
      <article>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: blog.description.html }}/>
          </div>
        </div>
      </div>
    </article>

      <Footer/>  
    </div>


  )

}
export default IndexPage

export const query = graphql`
query($productId: Int){
  allPrismicBlogpost (filter:{data:{
    id:{eq: $productId}
  }}){
    edges {
      node  {
        id
        data  {
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

