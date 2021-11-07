// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogListItems} = props

  return (
    <ul className="blog-list">
      {blogListItems.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
