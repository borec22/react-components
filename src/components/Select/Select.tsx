import React, {useState} from 'react';
import s from './select.module.css';

type OptionType = {
   id: number
   value: string
}
type SelectPropsType = {
   value?: any
   onClick: (value: any) => void
   options: OptionType[]
}

export function Select(props: SelectPropsType) {
   const {options, value, onClick, ...restProps} = props;

   const [collapsed, setCollapsed] = useState<boolean>(true);

   const onDefaultFieldClick = () => {
      setCollapsed(!collapsed);
   };

   const onOptionClick = (value: any) => {
      onClick(value);
      setCollapsed(true);
   }

   return (
      <div className={s.selectContainer}>
         <div onClick={onDefaultFieldClick} className={`${s.select}  ${!collapsed ? s.selectCollapsed : ''}`}>
            <span>{value} </span>
         </div>

         {!collapsed &&
         <div className={s.options}>
            {options.map(o =>
               <div key={o.id} className={s.option} onClick={() => { onOptionClick(o.value); }}>
                  {o.value}
               </div>)}
         </div>}
      </div>
   );
}