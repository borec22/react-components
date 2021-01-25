import React, {useEffect, useState} from 'react';

export default {
   title: 'Example/useEffect demo'
}

export const USE_EFFECT_SIMPLE = () => {
   const [fake, setFake] = useState<number>(1);
   const [count, setCount] = useState<number>(1);

   console.log('USE_EFFECT_SIMPLE RENDER');

   useEffect(() => {
      console.log('Render every time')
      //console.log('in effect')
      document.title = count.toString();
   });

   useEffect(() => {
      console.log('Render first time (Component did mount)');
      //console.log('in effect')
      document.title = count.toString();
   }, []);

   useEffect(() => {
      console.log('Render when changed count');
      //console.log('in effect')
      document.title = count.toString();
   }, [count]);

   return (
      <div>
         {count} <hr/>
         {fake}
         <button onClick={() => setCount(count + 1)} style={{marginLeft: 5}}>+ count</button>
         <button onClick={() => setFake(fake + 1)} style={{marginLeft: 5}}>+ fake</button>
      </div>
   );
}

export const USE_EFFECT_SET_INTERVAL = () => {
   const [fake, setFake] = useState<number>(1);
   const [count, setCount] = useState<number>(1);

   const [intervalId, setIntervalId] = useState<number>(0);
   const [date, setDate] = useState<Date>();
   const [runTime, setRunTime] = useState<number>(0);

   console.log('USE_EFFECT_SET_INTERVAL RENDER');

   useEffect(() => {
      console.log('effect')

      let id: number = window.setInterval(() => {
         console.log('interval');
         setDate(new Date());
      }, 1000);

      setIntervalId(id);

      return () => {
         console.log('clear interval')
         clearInterval(id)
      };
   }, [runTime]);

   const stop = () => clearInterval(intervalId);
   const start = () => {
      stop();
      setRunTime(runTime + 1);
   }

   let timeString = date ? date.toLocaleTimeString() : '';

   return (
      <div>
         {'count: ' + count} <hr/>
         {'fake: ' + fake}<hr/>
         <button onClick={() => setCount(count + 1)} style={{marginLeft: 5}}>+ count</button>
         <button onClick={() => setFake(fake + 1)} style={{marginLeft: 5}}>+ fake</button>

         <hr/><br/>

         {'Clock: ' + timeString} <hr/><br/>

         <button onClick={stop}>Stop</button>
         <button onClick={start}>Start</button>
      </div>
   );
}