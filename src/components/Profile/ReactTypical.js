import React from 'react';

import Typical from 'react-typical';

export function TypicalComponent({ loop, steps, wrapper }) {
  return (
    <Typical
      loop={loop}
      steps={steps}
      wrapper={wrapper}
    />
  );
}