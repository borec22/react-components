import React, {useState} from 'react';

export default {
   title: 'Example/useState demo'
}
function difficultCounting () {
   console.log('counting')
   return 0;
}

export const Example2 = () => {
   // let initValue = useMemo(difficultCounting, []);

   const [count, setCount] = useState<number>(difficultCounting);

   return (
      <div>
         <button onClick={() => setCount(state => state + 1)} style={{marginRight: 5}}>Increase</button>
         {count}
      </div>
   );
}
