const ADD_CENTRAL_HEATING = 'ADD_CENTRAL_HEATING';
const ADD_KEEPING_THE_BUILDING = 'ADD_KEEPING_THE_BUILDING';
const ADD_WATER = 'ADD_WATER';
const ADD_CLEANING = 'ADD_CLEANING';
const ADD_INTERNET = 'ADD_INTERNET';
const ADD_CLEANING_PRODUCTS = 'ADD_CLEANING_PRODUCTS';


const Expenses = {
    id: '',
    centralHeating: '',
    keepingTheBuilding: '',
    water: '',
    cleaning: '',
    internet: '',
    cleaningProducts: ''
};


const addExpensesReducer = (state = Expenses, action) => {
    switch (action.type) {
        case ADD_CENTRAL_HEATING: {
            return {...state, centralHeating: action.payload}
        }
        case ADD_KEEPING_THE_BUILDING: {
            return {...state, keepingTheBuilding: action.payload}
        }
        case ADD_WATER: {
            return {...state, water: action.payload}
        }
        case ADD_CLEANING: {
            return {...state, cleaning: action.payload}
        }
        case ADD_INTERNET: {
            return {...state, internet: action.payload}
        }
        case ADD_CLEANING_PRODUCTS: {
            return {...state, cleaningProducts: action.payload}
        }
        default: {
            return state
        }
    }
};

export const addCentralHeating = (newCentralHeating) => ({type: ADD_CENTRAL_HEATING, payload: newCentralHeating});

export const addKeepingTheBuilding = (newKeepingTheBuilding) => ({type: ADD_KEEPING_THE_BUILDING, payload: newKeepingTheBuilding});

export const addWater = (newWater) => ({type: ADD_WATER, payload: newWater});

export const addCleaning = (newCleaning) => ({type: ADD_CLEANING, payload: newCleaning});

export const addInternet = (newInternet) => ({type: ADD_INTERNET, payload: newInternet});

export const addCleaningProducts = (newCleaningProducts) => ({type: ADD_CLEANING_PRODUCTS, payload: newCleaningProducts});



export default addExpensesReducer;