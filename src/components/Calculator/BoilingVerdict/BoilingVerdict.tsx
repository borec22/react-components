import React from 'react';

type BoilingVerdictType = {
   celsius: number
}

export function BoilingVerdict(props: BoilingVerdictType) {
   if (props.celsius > 100) {
      return <p>The water would boil.</p>
   } else {
      return <p>The water would not boil.</p>
   }
}