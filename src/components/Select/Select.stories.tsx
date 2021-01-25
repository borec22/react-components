import {OptionType, Select} from './Select';
import {useCallback, useMemo, useState} from 'react';
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
   title: 'select',
   component: Select
} as Meta;

export const DefaultSelect = () => {
   const [cities, setCities] = useState<OptionType[]>([
      {value: '1', codeCountry: 2, population: 4000000, title: 'Minsk'},
      {value: '5', codeCountry: 2, population: 2000000, title: 'Gomel'},

      {value: '2', codeCountry: 1, population: 7000000, title: 'Kiev'},
      {value: '6', codeCountry: 1, population: 4000000, title: 'Lviv'},

      {value: '3', codeCountry: 3, population: 15000000, title: 'San Francisco'},
      {value: '4', codeCountry: 3, population: 8000000, title: 'New York'},
   ]);
   const [optionSelected, setOptionSelected] = useState<any>('2');
   const [count, setCount] = useState<number>(0);

   const onClick = useCallback((value: any) => {
      setOptionSelected(value);
   },[]);

   const increaseCount = () => setCount(count + 1);

   const addCity = useMemo(() =>
      () => setCities([...cities, {value: '7', codeCountry: 1, population: 4000000, title: 'Odessa'}]), [cities]);

   const filterCitiesByLetterI = (cities: OptionType[]): OptionType[] => {
      return cities.filter(city => city.title
         .toLowerCase()
         .indexOf('i') !== -1);
   }
   const filterCitiesByCodeCountry = (cities: OptionType[]): OptionType[] => {
      console.log('code country')
      return cities.filter(city => city.codeCountry === 1);
   }
   const filterCitiesByPopulation = (cities: OptionType[]): OptionType[] => {
      console.log('population')
      return cities.filter(city => city.population > 5000000);
   }

   const filteredCitiesByLetterI = useMemo(() => filterCitiesByLetterI(cities), [cities]);
   const filteredCitiesByCodeCountry = useMemo(() => filterCitiesByCodeCountry(cities), [cities])
   const filteredCitiesByPopulation = useMemo(() => filterCitiesByPopulation(cities), [cities]);

   return <>
      <h4 style={{textAlign: 'center', color: 'gray'}}>Filter cities by letter I</h4>
      <Select value={optionSelected} onChange={onClick} options={filteredCitiesByLetterI}/>
      <br/>

      <h4 style={{textAlign: 'center', color: 'gray'}}>Filter cities by code country</h4>
      <Select value={optionSelected} onChange={onClick} options={filteredCitiesByCodeCountry}/>
      <br/>

      <h4 style={{textAlign: 'center', color: 'gray'}}>Filter cities by population</h4>
      <Select value={optionSelected} onChange={onClick} options={filteredCitiesByPopulation}/>
      <br/>

      <div>{count}</div>
      <button onClick={increaseCount}>+</button>

      <button onClick={addCity}>Add new city</button>
      <ul>
         {cities.map((city, index) => <li key={index}>{city.title}</li>)}
      </ul>
   </>
}

export const WithoutValue = () => {
   const [optionSelected, setOptionSelected] = useState<any>('');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   return <Select value={optionSelected} onChange={onClick} options={[
      {value: '1', codeCountry: 2, population: 4000000, title: 'Minsk'},
      {value: '5', codeCountry: 2, population: 2000000, title: 'Gomel'},

      {value: '2', codeCountry: 1, population: 7000000, title: 'Kiev'},
      {value: '6', codeCountry: 1, population: 4000000, title: 'Lviv'},

      {value: '3', codeCountry: 3, population: 15000000, title: 'San Francisco'},
      {value: '4', codeCountry: 3, population: 8000000, title: 'New York'},
   ]}/>


}