import React, { useState } from 'react';
import Unit from './Unit';

// b: 4
// c: 5
// d: 6

// f:
//   g: 6
//   h: 8

interface Props {
  obj: Record<string, any>;
  isInitiallyOpen?: boolean;
}

function ObjectDisplay(props: Props) {
  const { obj, isInitiallyOpen = false } = props;
  const keys = Object.keys(obj);

  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  }

  if (isOpen) {

    return (
      <div>

        <span onClick={toggleDetails}>X</span>

        {keys.map((Objkey) => {
          const v = obj[Objkey];
          return (
            <div style={{ paddingLeft: 80 }}><Unit key={Objkey} keyV={Objkey} val={v} /></div>
          )
        })}

      </div>
    );
  }

  return (
    <div onClick={toggleDetails}>
      <span>...</span>
    </div>
  )
}

export default ObjectDisplay;