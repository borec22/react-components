import React, {useEffect, useState} from 'react';
import classes from './Clock.module.css';

type PropsType = {
   datediff: number
   title: string
}

export const Clock: React.FC<PropsType> = React.memo((props) => {
   const [date, setDate] = useState<Date>(new Date());

   const [seconds, setSeconds] = useState<string | number>('');
   const [minutes, setMinutes] = useState<string | number>('');
   const [hours, setHours] = useState<string | number>('');

   useEffect(() => {
      console.log('Effect start');

      let id = setInterval(handleDate, 1000);

      return () => {
         clearInterval(id);
      }
   }, []);

   const handleDate = () => {
      const {datediff} = props;
      const date = new Date();

      date.setHours(date.getHours() + datediff);

      let hours = formatTime(date.getHours());
      let minutes = formatTime(date.getMinutes());
      let seconds = formatTime(date.getSeconds());

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
   }

   const formatTime = (time: number) => {
      return time < 10 ? `0${time}` : time;
   }

   const secondStyle = {
      transform: `rotate(${Number(seconds) * 6}deg)`
   }
   const minutesStyle = {
      transform: `rotate(${Number(minutes) * 6}deg)`
   }
   const hoursStyle = {
      transform: `rotate(${Number(hours) * 30}deg)`
   }

   const {title} = props;

   /*const hours = makeTwoDigitsNumber(date.getHours());
   const minutes = makeTwoDigitsNumber(date.getMinutes());
   const seconds = makeTwoDigitsNumber(date.getSeconds());*/

   return (
      <div  className={classes.clock}>
         <h3>{title}</h3>
         <div className={classes.analogClock}>
            <div className={`${classes.dial} ${classes.seconds}`} style={secondStyle}/>
            <div className={`${classes.dial} ${classes.minutes}`} style={minutesStyle}/>
            <div className={`${classes.dial} ${classes.hours}`} style={hoursStyle}/>
         </div>
         <div className={classes.digitalClock}>
            {hours}:{minutes}:{seconds}
         </div>
      </div>
   )
})
