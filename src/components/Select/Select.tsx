import React, {useEffect, useState, KeyboardEvent} from 'react';
import s from './select.module.css';

type OptionType = {
   value: string
   title: string
}
type SelectPropsType = {
   value?: any
   onChange: (value: any) => void
   options: OptionType[]
}

export function Select(props: SelectPropsType) {
   const {options, value, onChange, ...restProps} = props;

   const [collapsed, setCollapsed] = useState<boolean>(true);
   const [hoveredElementValue, setHoveredElementValue] = useState<any>(value);

   let selectedOption = options.find(o => o.value === value);

   useEffect(() => {
      setHoveredElementValue(value);
   }, [value])

   let hoveredElement = options.find(o => o.value === hoveredElementValue);

   const onDefaultFieldClick = () => {
      setCollapsed(!collapsed);
   };

   const onOptionClick = (value: any) => {
      onChange(value);
      setCollapsed(true);
   }
   const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
         for (let i = 0; i < options.length; i++) {
            if (options[i].value === hoveredElementValue) {
               let nextOption = e.key === "ArrowUp" ? options[i - 1] : options[i + 1];
               if (nextOption) {
                  onChange(nextOption.value);
                  return;
               }
            }
         }

         if (!selectedOption) {
            onChange(options[0].value);
         }
      }

      if (e.key === 'Enter' || e.key === 'Escape') {
         setCollapsed(true);
      }
   }

   return (
      <div className={s.selectContainer}>
         <div onClick={onDefaultFieldClick} onKeyUp={onKeyUpHandler} tabIndex={0} className={`${s.select}  ${!collapsed ? s.selectCollapsed : ''}`}>
            <span>{selectedOption && selectedOption.title} </span>
         </div>

         {!collapsed &&
         <div className={s.options}>
            {options.map((o, index) =>
               <div key={index}
                    className={`${s.option} ${hoveredElement && o === hoveredElement ? s.optionSelected : ''}`}
                    onClick={() => {
                       onOptionClick(o.value);
                    }}
                    onMouseEnter={() => setHoveredElementValue(o.value)}
               >
                  {o.title}
               </div>)}
         </div>}
      </div>
   );
}