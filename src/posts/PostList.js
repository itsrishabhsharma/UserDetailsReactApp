import React, { Component} from 'react'
import PostData from '../data/posts.json'

class PostList extends Component {
render () {
  return (
    <div>
        <h1>hello</h1>
        {PostData.map((postDetail, index)=>{
            return <h1>{postDetail.name}</h1>
        })}    
    </div>
  )
}
}
export default PostList;
