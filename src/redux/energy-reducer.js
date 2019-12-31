const ADD_CURRENT_VALUE = 'ADD_CURRENT_VALUE';
const ADD_LAST_VALUE = 'ADD_LAST_VALUE';
const ADD_ENERGY_USED_KW = 'ADD_ENERGY_USED_KW';
const ADD_ENERGY_PRICE = 'ADD_ENERGY_PRICE';



const EnergyState = {
    id:'',
    currentDate: '',
    currentValue: '',
    lastValue: '',
    energyUsedKw: '',
    energyPrice: '',
};




const addEnergyValuesReducer = (state = EnergyState, action) => {
    switch (action.type) {
        case ADD_CURRENT_VALUE: {
            return {...state, currentValue: action.payload}
        }
        case ADD_LAST_VALUE: {
            return {...state, lastValue: action.payload}
        }
        case ADD_ENERGY_USED_KW: {
            return {...state, energyUsedKw: state.currentValue - state.lastValue}
        }
        case ADD_ENERGY_PRICE: {
            return {...state, energyPrice: state.energyUsedKw * 1.68}
        }
        default: {
            return state
        }
    }
};

export const addCurrentValue = (newCurrentValue) => ({type: ADD_CURRENT_VALUE, payload: newCurrentValue});
export const addLastValue = (newLastValue) => ({type: ADD_LAST_VALUE, payload: newLastValue});
export const addEnergyUsedKw = (newEnergyUsedKw) => ({type: ADD_ENERGY_USED_KW, payload: newEnergyUsedKw});
export const addEnergyPrice = (newEnergyPrice) => ({type: ADD_ENERGY_PRICE, payload: newEnergyPrice});






export default addEnergyValuesReducer;