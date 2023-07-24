import { ChangeEvent } from "react";
import "./newReply.css";


export type NewReplyProps = {
    text: string;
    rating: number;
  };
  
  function NewReply({text, rating }: NewReplyProps) {
    return (
      <div className="reply_content">
        <img src="https://art.pixilart.com/42e019c236fe77a.png" alt="user" className="reply__photo" />
        <div className="reply_name_text">
          <p className="replyname">Это ты</p>
          <p className="replytext">{text}</p>
        </div>
        <div className="replyrating">{rating}/5</div>
      </div>
    );
  }
  
  export default NewReply;