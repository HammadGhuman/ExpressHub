import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

type Props = {
  from:number,
  to:number
}

function Counter({ from, to }:Props) {
    const nodeRef = useRef(null);
  
    useEffect(() => {
      let node:any = "";
      if(nodeRef.current){
        node = nodeRef.current;
      }
      
  
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        }
      });
  
      return () => controls.stop();
    }, [from, to]);
  
    return <p className='text-5xl font-bold' ref={nodeRef} />;
  }

export default Counter