import React, {ChangeEvent} from 'react';

export type ScaleType = 'c' | 'f';
export type TemperatureInputType = {
   scale: ScaleType
   celsius?: string
   fahrenheit?: string
   changeTemperature: (scale: ScaleType, newTemperature: string) => void
}

export function TemperatureInput(props: TemperatureInputType) {
   const scaleNames = {
      'c': 'Celsius',
      'f': 'Fahrenheit',
   }

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newTemperature = e.currentTarget.value;
      props.changeTemperature(props.scale, newTemperature);
   }

   return (<div>
      <fieldset>
         <legend>Enter temperature in {scaleNames[props.scale]}</legend>
         <input type="text"
                value={props.scale === 'c' ? props.celsius : props.fahrenheit}
                onChange={onChange}/>
      </fieldset>
   </div>);
}