import { baseUrl, appId, cityName, cityLatLong } from '../Configuration.js';

export function loadWeather() {
    return (dispatch) => {
        const url = baseUrl + "/data/2.5/weather?q=" + cityName + "&APPID=" + appId;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                dispatch(saveWeather(myJson));
            })

    }
}

export function saveWeather(weatherJson) {
    return {
        type: 'SAVE_WEATHER',
        value: weatherJson
    }
}

export function loadForecast() {
    return (dispatch) => {
        const url = baseUrl + "/data/2.5/forecast?q=" + cityName + "&APPID=" + appId;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                dispatch(saveForecast(myJson));
            })

    }
}

export function saveForecast(forecastJson) {
    return {
        type: 'SAVE_FORECAST',
        value: forecastJson
    }
}

export function loadSO2() {
    return (dispatch) => {
        const url = baseUrl + "/pollution/v1/so2/" + cityLatLong + "/current.json?appid=" + appId;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                dispatch(saveSO2(myJson));
            })
    }
}

export function saveSO2(so2Json) {
    return {
        type: 'SAVE_SO2',
        value: so2Json
    }
}

export function updateUnits(units) {
    return {
        type: 'UPDATE_UNITS',
        value: units
    }
}

export function createNotification(temp) {
    const payload = {
        time_period: {
            start: {
                expression: "after",
                amount: Math.round(Date.now()/1000)
            },
            end: {
                expression: "after",
                amount: Math.round(Date.now()/1000 + 3600*24*7) 
            }
        },
        conditions:[
           {
              name:"temp",
              expression:"$gt",
              amount: temp
           }
        ],
        area:[
           {
              type:"Point",
              coordinates:[
                 42,
                 13 
              ]
           }
        ]
    }
    return (dispatch) => {
        const url = baseUrl + "/data/3.0/triggers?APPID=" + appId;
        fetch(url,
            {
                body: JSON.stringify(payload),
                headers: {'content-type': 'application/json'},
                method: 'POST'
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                dispatch(saveNotification(myJson));
            })
    }
}

export function loadNotification(id) {
    return (dispatch) => {
        const url = baseUrl + "/data/3.0/triggers/" + id + "?APPID=" + appId;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                dispatch(saveNotification(myJson));
            })
    }
}

export function saveNotification(notificationJson) {
    return {
        type: 'SAVE_NOTIFICATION',
        value: notificationJson
    }
}
