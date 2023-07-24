import { ChangeEventHandler } from "react";
import "./parametr.css"


type ParametrProps = {
    id: string;
    title: string;
    value: string;
    onChange : ChangeEventHandler<HTMLInputElement>
  };
  
  
  export const Parametr = ({id, title, value, onChange}: ParametrProps): JSX.Element => {
  return (
  <div className="rate">
    <input
          type="range"
          name={id}
          id={id}
          min={1}
          max={5}
          onChange={onChange}
          value={value}
        />
    <label>{title}</label>
  </div>
  )
  }

