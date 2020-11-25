import React, {useState} from 'react';
import {BoilingVerdict} from './BoilingVerdict/BoilingVerdict';
import {ScaleType, TemperatureInput} from './TemperatureInput/TemperatureInput';

export function Calculator() {
   const [temperature, setTemperature] = useState('');
   const [scale, setScale] = useState<ScaleType>('c');

   const changeTemperature = (scale: ScaleType, newTemperature: string) => {
      setTemperature(newTemperature);
      setScale(scale);
   }

   const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
   const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

   return (<div>
      <TemperatureInput scale='c'
                        changeTemperature={changeTemperature}
                        celsius={celsius}/>
      <TemperatureInput scale='f'
                        changeTemperature={changeTemperature}
                        fahrenheit={fahrenheit}/>
      <BoilingVerdict celsius={parseFloat(celsius)}/>
   </div>);
}

function toCelsius(fahrenheit: number) {
   return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
   return (celsius * 9 / 5) + 32
}

function tryConvert(temperature: string, convert: (scale: number) => number) {
   const input = parseFloat(temperature);

   if (Number.isNaN(input)) {
      return '';
   }

   const output = convert(input);
   const rounded = Math.round(output * 1000) / 1000;
   return rounded.toString();
}

