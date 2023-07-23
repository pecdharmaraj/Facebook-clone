import { MoreVert } from "@material-ui/icons"
import "./post.css"
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
   const [Like,setLike]=useState(post.like)
   const [isLiked,setIsLike]=useState(false)
   const likeHandler = ()=>{
    setLike(isLiked?Like-1:Like+1)
    setIsLike(!isLiked)
   }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt=""></img>
                    <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt=""></img>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt=""></img>
                <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt=""></img>
                <span className="postLikeCounter">{Like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments </span>
                </div>
            </div>
        </div>
    </div>
  )
}
