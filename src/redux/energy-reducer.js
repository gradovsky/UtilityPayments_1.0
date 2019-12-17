const ADD_CURRENT_VALUE = 'ADD_CURRENT_VALUE';
const ADD_LAST_VALUE = 'ADD_LAST_VALUE';
const ADD_ENERGY_USED_KW = 'ADD_ENERGY_USED_KW';
const ADD_ENERGY_PRICE = 'CHANGE_ADD_PRICE';
const ADD_ENERGY_PRICE_FOR_ONE_DAY = 'ADD_ENERGY_PRICE_FOR_ONE_DAY';
const ADD_COUNT_DAYS_IN_MONTH = 'ADD_COUNT_DAYS_IN_MONTH';



const EnergyState = {
    id:'',
    currentDate: '',
    currentValue: '',
    lastValue: '',
    energyUsedKw: '',
    energyPrice: '',
    countDaysInMonth:'',
    energyPriceOneDay: '',
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
        case ADD_COUNT_DAYS_IN_MONTH: {
            return {...state, countDaysInMonth: action.payload}
        }
        case ADD_ENERGY_PRICE_FOR_ONE_DAY: {
            return {...state, energyPriceOneDay: state.energyPrice / state.countDaysInMonth}
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
export const addCountDaysInMonth = (newCountDaysInMonth) => ({type: ADD_COUNT_DAYS_IN_MONTH, payload: newCountDaysInMonth});
export const addEnergyPriceOneDay = (newEnergyPriceOneDay) => ({type: ADD_ENERGY_PRICE_FOR_ONE_DAY, payload: newEnergyPriceOneDay});






export default addEnergyValuesReducer;