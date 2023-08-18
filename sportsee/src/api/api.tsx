import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../data/data"

export const urlAPI = 'http://localhost:3000/user/'

const useMockedData = false

export const getUserActivity = async (userID : number) => {
     
    let data

    if (useMockedData) {data = USER_ACTIVITY.find(element => element.userId === userID)}
    
    if(!useMockedData){
    
        const uri = urlAPI + userID + '/activity'
    
        await fetch(uri)
        .then((response) => response.json())
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            data = {
                erreur: 'Connection à la base de données impossible',
            }
        })

    }

    return data
}

export const getUserAverageSessions = async (userID : number) => {
     
    let data

    if (useMockedData) {data = USER_AVERAGE_SESSIONS.find(element => element.userId === userID)}
    
    if(!useMockedData){
    
        const uri = urlAPI + userID + '/average-sessions'
    
        await fetch(uri)
        .then((response) => response.json())
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            data = {
                erreur: 'Connection à la base de données impossible',
            }
        })

    }

    return data
}

export const getUserPerformance = async (userID : number) => {
     
    let data

    if (useMockedData) {data = USER_PERFORMANCE.find(element => element.userId === userID)}
    
    if(!useMockedData){
    
        const uri = urlAPI + userID + '/performance'
    
        await fetch(uri)
        .then((response) => response.json())
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            data = {
                erreur: 'Connection à la base de données impossible',
            }
        })

    }

    return data
}

export const getUserMainData = async (userID : number) => {
     
    let data

    if (useMockedData) {data = USER_MAIN_DATA.find(element => element.id === userID)}
    
    if(!useMockedData){
    
        const uri = urlAPI + userID
    
        await fetch(uri)
        .then((response) => response.json())
        .then((response) => {
            data = response.data
        })
        .catch((error) => {
            data = {
                erreur: 'Connection à la base de données impossible',
            }
        })

    }

    return data
}