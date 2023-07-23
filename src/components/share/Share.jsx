import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons"
import "./share.css"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
           <div className="shareTop">
              <img className="shareProfileImg" src="/assets/person/anu.png" alt=""></img>
              <input placeholder="what are in ur mind" className="shareInput"></input>
           </div>
           <hr className="shareHr"></hr>
           <div className="shareBottom">
              <div className="shareOptions">
                 <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Videos</span>
                 </div>
                 <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                 </div>
                 <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                 </div>
                 <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                 </div> 
              </div>
              <button className="shareButton">Share</button>
           </div>
      </div>
    </div>
  )
}
