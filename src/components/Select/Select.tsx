import React, {KeyboardEvent, useEffect, useReducer} from 'react';
import s from './select.module.css';
import {changeHoveredElementValueAC, reducer, StateType, toggleCollapseAC} from './reducer/reducer';

export type OptionType = {
   value: string
   title: string
   codeCountry: 1 | 2 | 3
   population: number
}
type SelectPropsType = {
   value?: any
   onChange: (value: any) => void
   options: OptionType[]
}



export const Select = React.memo(function (props: SelectPropsType) {
   console.log('render Select')
   const {options, value, onChange, ...restProps} = props;

   const initialState: StateType = {
      collapsed: true,
      hoveredElementValue: value,
   }

   const [state, dispatch] = useReducer(reducer, initialState);

   let selectedOption = options.find(o => o.value === value);

   useEffect(() => {
      dispatch(changeHoveredElementValueAC(value));
   }, [value])

   let hoveredElement = options.find(o => o.value === state.hoveredElementValue);

   const onDefaultFieldClick = () => dispatch(toggleCollapseAC());

   const onOptionClick = (value: any) => {
      onChange(value);
      dispatch(toggleCollapseAC());
   }

   const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
         for (let i = 0; i < options.length; i++) {
            if (options[i].value === state.hoveredElementValue) {
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
         dispatch(toggleCollapseAC())
      }
   }

   return (
      <div className={s.selectContainer}>
         <div onClick={onDefaultFieldClick} onKeyUp={onKeyUpHandler} tabIndex={0} className={`${s.select}  ${!state.collapsed ? s.selectCollapsed : ''}`}>
            <span>{selectedOption && selectedOption.title} </span>
         </div>

         {!state.collapsed &&
         <div className={s.options}>
            {options.map((o, index) =>
               <div key={index}
                    className={`${s.option} ${hoveredElement && o === hoveredElement ? s.optionSelected : ''}`}
                    onClick={() => {
                       onOptionClick(o.value);
                    }}
                    onMouseEnter={() => dispatch(changeHoveredElementValueAC(o.value))}
               >
                  {o.title}
               </div>)}
         </div>}
      </div>
   );
});
