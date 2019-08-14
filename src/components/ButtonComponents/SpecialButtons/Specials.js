import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
const [button, setButton] = useState(specials);
  return (
    <div>
      {button.map((item, index) => {
        return <SpecialButton key={index} text={item}/>;
      })}
    </div>
  );
};

export default Specials;
