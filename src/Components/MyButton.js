import * as React from 'react';

export default function MyButton({height, width, fontSize, text}) {
  const fSize = fontSize.toString()+'px';
  const h = width.toString();
  const w = height.toString();
  let padding = h.toString()+"px "+w.toString()+"px"
  return (
      <div className='button' style={{padding:padding, fontSize:fSize}}>
        {text}
      </div>
  );
}