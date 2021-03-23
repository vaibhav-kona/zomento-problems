import React from 'react';
import ObjectDisplay from '.';

interface Props {
  keyV: string;
  val: any;
}

function Unit(props: Props) {
  const { keyV, val } = props;

  return (
    <div>
      <span style={{
        display: 'inline-block'
      }}>{`${keyV} : `}</span>
      <span style={{
        display: (typeof val === 'object') ? 'block' : 'inline-block',
        paddingLeft: 8
      }}>{typeof val === 'object' ? <ObjectDisplay obj={val} /> : val}</span>
    </div>
  );
}

export default Unit;