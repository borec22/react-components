import {changeHoveredElementValueAC, reducer, StateType, toggleCollapseAC} from './reducer';

let randomValue = () => Math.floor(Math.random() * 5) + 1;

test('collapsed should be false', () => {
   let state: StateType = {
      collapsed: true,
      hoveredElementValue: randomValue(),
   }

   let newState = reducer(state, toggleCollapseAC());

   expect(newState.collapsed).toBe(false);
} );

test('collapsed should be true', () => {
   let state: StateType = {
      collapsed: false,
      hoveredElementValue: randomValue(),
   }

   let newState = reducer(state, toggleCollapseAC());

   expect(newState.collapsed).toBe(true);
} );

test('value should changed', () => {
   let state: StateType = {
      collapsed: false,
      hoveredElementValue: randomValue(),
   }

   let newState = reducer(state, changeHoveredElementValueAC(5));

   expect(newState.hoveredElementValue).toBe(5);
} );