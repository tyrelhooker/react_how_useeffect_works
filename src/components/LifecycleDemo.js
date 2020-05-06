import React, { useEffect } from 'react';

const LifecycleDemo = () => {
  useEffect(() => {
    console.log('render');

    // Called prior to unmounting ~ componentWillUnmount
    return () => console.log('unmounting...');
  })

  return "I'm an lifecycle demo";
}

export default LifecycleDemo;