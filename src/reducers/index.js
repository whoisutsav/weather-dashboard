import { combineReducers } from 'redux'

function units(state = 'C', action) {
    switch(action.type) {
        case 'UPDATE_UNITS':
            return action.value;
        default:
            return state;
    }
}

function currentWeather(state = null, action) {
    switch (action.type) {
        case 'SAVE_WEATHER':
            return action.value;
        default:
            return state;
    }
}

function forecast(state = null, action) {
    switch (action.type) {
        case 'SAVE_FORECAST':
            return action.value;
        default:
            return state;
    }
}

function so2(state = null, action) {
    switch (action.type) {
        case 'SAVE_SO2':
            return action.value;
        default:
            return state;
    }
}

function notification(state = null, action) {
    switch (action.type) {
        case 'SAVE_NOTIFICATION':
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({
   units,
   currentWeather,
   forecast,
   so2,
   notification
})
