const ADD_USER_NAME = 'ADD_USER_NAME';
const ADD_DAY_PRESENT = 'ADD_DAY_PRESENT';
const ADD_PRICE_FOR_ENERGY = 'ADD_PRICE_FOR_ENERGY';
const ADD_CONSTA = 'ADD_CONSTA';
const ADD_TO_PAY = 'ADD_TO_PAY';


const UserState = {
    id: '',
    userName: '',
    daysPresent: '',
    priceForEnergy: '',
    consta: '',
    toPay: '',
    energyPriceOneDay:''
};

const addUsersReducer = (state = UserState, action) => {
    switch (action.type) {
        case ADD_USER_NAME: {
            return {...state, userName: action.payload}
        }
        case ADD_DAY_PRESENT: {
            return {...state, daysPresent: action.payload}
        }
        case ADD_PRICE_FOR_ENERGY: {
            return {
                ...state, priceForEnergy: action.payload}
        }
        case ADD_CONSTA: {
            return {...state, consta: action.payload}
        }
        case ADD_TO_PAY: {
            return {...state, toPay: action.payload}
        }
        default: {
            return state
        }
    }
};

export const addUserName = (newUserName) => ({type: ADD_USER_NAME, payload: newUserName});

export const addDaysPresent = (newDaysPresent) => ({type: ADD_DAY_PRESENT, payload: newDaysPresent});

export const addPriceForEnergy = (newPriceForEnergy) => ({type: ADD_PRICE_FOR_ENERGY, payload: newPriceForEnergy});

export const addConsta = (newConsta) => ({type: ADD_CONSTA, payload: newConsta});

export const addToPay = (newToPay) => ({type: ADD_TO_PAY, payload: newToPay});


export default addUsersReducer;