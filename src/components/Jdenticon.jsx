// CREDIT: Based on react-jdenticon - https://github.com/jmcudd/react-jdenticon/blob/master/src/index.js

import React, { useEffect, useRef } from 'react';
import jdenticon from 'jdenticon/standalone';

function Jdenticon({ height = `32px`, name, width = `32px` }) {
  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, name);
  }, [ name ]);

  return (
    <>
      <svg data-jdenticon-value={name} ref={icon} height={height} width={width} />
    </>
  );
}

export default Jdenticon;
