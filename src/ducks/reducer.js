const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mort: 0,
  rent: 0
}

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case STEP_ONE:
      return {
        name: [...state.name, action.payload.name], // might not need the last .name
        address: [...state.address, action.payload.address],
        city: [...state.city, action.payload.city],
        state: [...state.state, action.payload.state],
        zip: [...state.zip, action.payload.zip]
      };
    case STEP_TWO: 
    return {
      img: [...state.img, action.payload]
    };
    case STEP_THREE:
    return {
      mort: [...state.mort, action.payload.mort],
      rent: [...state.rent, action.payload.rent]
    }
    default: 
      return state;
  }
}

export function stepOne(obj) {
  return {
    type: STEP_ONE,
    payload: obj
  }
}

export function stepTwo(obj) {
  return {
    type: STEP_TWO,
    payload: obj
  }
}
export function stepThree(obj) {
  return {
    type: STEP_THREE,
    payload: obj
  }
}
