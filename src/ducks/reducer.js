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

const STEP_ONE = 'STEP_ONE'

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case STEP_ONE:
      return {
        name: [...state.name, action.payload.name],
        address: [...state.address, action.payload.address],
        city: [...state.city, action.payload.city],
        state: [...state.state, action.payload.state],
        zip: [...state.zip, action.payload.zip]
      }
    default: 
      return state;
  }
}

export function stepOne(obj) {
  return {
    type: STEP_ONE,
    payload: obj
    
    //         {
    //   name,
    //   address,
    //   city,
    //   state,
    //   zip
    // }
  }
}