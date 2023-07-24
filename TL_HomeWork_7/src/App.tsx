import { useState, ChangeEvent } from "react";
import "./App.css";
import ReplyRatingForm from "./components/replyRatingForm/replyRatingForm";
import ReplyAreaForm from "./components/textarea/replyAreaForm";
import Button from "./components/button/button";
import NewReply from "./components/newReply/newReply";



function App() {
  const [rate1, setRate1] = useState("1");
  const [rate2, setRate2] = useState("1");
  const [rate3, setRate3] = useState("1");
  const [rate4, setRate4] = useState("1");
  const [rate5, setRate5] = useState("1");
  const [range, setRange] = useState("");
  const [text, setText] = useState("");
  const [replies, setReplies] = useState([]);

  const addNewReply = () => {
    const newReply = <NewReply text={text} rating={(Number(rate1) + Number(rate2) + Number(rate3) + Number(rate4) + Number(rate5)) / 5}/>;
    setReplies((repl) => [newReply, ...repl])
  }

return (
  <>
    <div className="container">
      <div className="form">
        <div className="content">
          <div className="formContent">
            <h2 className="title">How nice was my reply?</h2>
            <div className="rating">
              <ReplyRatingForm setRate1={setRate1} setRate2={setRate2} setRate3={setRate3} setRate4={setRate4} setRate5={setRate5}
              rate1={rate1} rate2={rate2} rate3={rate3} rate4={rate4} rate5={rate5}/>
              <p className="range">{(Number(rate1) + Number(rate2) + Number(rate3) + Number(rate4) + Number(rate5)) / 5}/5</p>
            </div>
            <div className="reply">
              <ReplyAreaForm 
                id = "6"
                text={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="buttonArea">
              <Button onClick={addNewReply}>Send</Button>
            </div>
          </div>
          <div className="reply_container">
            {replies}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
