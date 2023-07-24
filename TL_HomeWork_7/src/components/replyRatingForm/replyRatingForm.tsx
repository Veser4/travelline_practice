
import { Parametr } from "../parametr/parametr";
import "./replyRatingForm.css";



const ReplyRatingForm = (props: any) => {
  const {setRate1, setRate2, setRate3, setRate4, setRate5, rate1, rate2, rate3, rate4, rate5} = props

  return (
    <div className="replyRate">
      <Parametr 
        id = "1"
        title="Cleanliness"
        onChange={(e) => setRate1(e.target.value)}
        value={rate1}
      />
      <Parametr 
        id = "2"
        title="Customer Service"
        value={rate2}
        onChange={(e) => setRate2(e.target.value)}
      />
      <Parametr 
        id = "3"
        title="Speed"
        value={rate3}
        onChange={(e) => setRate3(e.target.value)}
      />
      <Parametr 
        id = "4"
        title="Location"
        value={rate4}
        onChange={(e) => setRate4(e.target.value)}
      />
      <Parametr 
        id = "5"
        title="Facilities"
        value={rate5}
        onChange={(e) => setRate5(e.target.value)}
      />
    </div>
    );
}
export default ReplyRatingForm;