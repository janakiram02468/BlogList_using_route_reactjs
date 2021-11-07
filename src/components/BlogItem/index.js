// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props

  const {title, description, publishedDate} = eachBlogDetails

  return (
    <li className="blog-item">
      <div className="name-date">
        <h1 className="blog-name">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
