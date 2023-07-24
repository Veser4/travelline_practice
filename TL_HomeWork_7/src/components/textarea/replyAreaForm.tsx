import { ChangeEvent } from "react";
import "./replyAreaForm.css";

type ReplyAreaFormProps = {
  id: string;
  text: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

function ReplyAreaForm({ id, text, onChange }: ReplyAreaFormProps) {
  return (
    <textarea
      className="replyArea"
      name={id}
      id={id}
      value={text}
      placeholder="What we can improve?"
      onChange={onChange}
    />
  );
}

export default ReplyAreaForm;