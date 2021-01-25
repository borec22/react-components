export const TOGGLE_COLLAPSE = 'TOGGLE-COLLAPSE';
export const CHANGE_HOVERED_ELEMENT_VALUE = 'CHANGE-HOVERED-ELEMENT-VALUE';
export type StateType = {
   collapsed: boolean
   hoveredElementValue: any
}

type ActionsType = ReturnType<typeof toggleCollapseAC> | ReturnType<typeof changeHoveredElementValueAC>;

export function reducer(state: StateType, action: ActionsType) {
   switch(action.type) {
      case TOGGLE_COLLAPSE:
         return {...state, collapsed: !state.collapsed}
      case CHANGE_HOVERED_ELEMENT_VALUE:
         return {...state, hoveredElementValue: action.value}
      default:
         throw new Error('Action is incorrect');
   }
}

//actions creators
export const toggleCollapseAC = () => ({type: TOGGLE_COLLAPSE}) as const;
export const changeHoveredElementValueAC = (value: any) => ({type: CHANGE_HOVERED_ELEMENT_VALUE, value}) as const;