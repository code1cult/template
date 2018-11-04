import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Header from '../components/header'
import Footer from '../components/footer'

let renderPosts = (array) => {

  return array.map((value, i) => {
    let title = value.node.data.title.text
    let url = value.node.data.id;
    let description = value.node.data.description.text.split(' ',50).join(' ') + '...';

    
    return (
      <div>
        <div className="post-preview">
          <Link to={'/'+url}>
            <h2 className="post-title">
            {title}
                </h2>
            <h3 className="post-subtitle">
             {description}
                </h3>
          </Link>
        </div>
        <hr />
      </div>
    )
  })



}

const IndexPage = ({ data }) => {

  debugger
  return (
    <div>
      <Navigation  />
      <Header title={'How to Lose Weight'} description={'Blog About How to Lose Weight'}  image={'https://images.pexels.com/photos/1332189/pexels-photo-1332189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">

            {renderPosts(data.allPrismicBlogpost.edges)}


            <div className="clearfix">
              {/* <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a> */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>  
    </div>


  )

}
export default IndexPage



export const query = graphql`
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

