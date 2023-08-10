type data = { 
    userId: number; 
    score: number;
    todayScore: number;
    sessions: { day: string; kilogram: number; calories: number; }[] | { day: string; sessionLength: number; }[];
    kind: { 1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'};
    data: { value: number, kind: number }[]
}

type sessions = undefined | { day: string; kilogram: number; calories: number; }[] | { day: string; sessionLength: number; }[]
type kind = undefined | { 1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'}
type dataSession = undefined | { value: number, kind: number }[]

type activitySessions = { day: string; kilogram: number; calories: number; }[] | { subject: string; A: number; fullMark: number; }[]

export default class DataTransfromChart{
    _sessions: sessions
    _kind: kind
    _data: dataSession
    _score: number | undefined

    constructor(data?: data){
        this._sessions = data?.sessions
        this._kind = data?.kind
        this._data = data?.data
        this._score = data?.score ? data?.score : data?.todayScore
    }

    get barChart(){

        let newSessions: activitySessions = []

        let number = 0

        this._sessions?.forEach((session) => {

            number += 1
            
            if(session.hasOwnProperty('kilogram') && session.hasOwnProperty('calories')){
                // @ts-ignore
                newSessions.push({
                    day: number.toString(),
                    // @ts-ignore
                    kilogram: session.kilogram,
                    // @ts-ignore
                    calories: session.calories,
                    })
            }
        });

        return newSessions
    }

    get lineChart(){

        let newSessions: activitySessions = []

        const firstSession = {
            day: '',
            sessionLength: this._sessions?.[0].sessionLength,
        }

        const lastSession = {
            day: '',
            sessionLength: this._sessions?.[6].sessionLength,
        }

        let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        this._sessions?.forEach((session, index) => {
            
            if(session.hasOwnProperty('sessionLength')){
                newSessions.push({
                    day: week[index],
                    // @ts-ignore
                    sessionLength: session.sessionLength,
                })
            }
        });

        newSessions.unshift(firstSession)
        newSessions.push(lastSession)

        return newSessions
    }

    get radarChart(){

        let newSessions: activitySessions = []
        const kind = this._kind
        const data = this._data
        

        data?.forEach((session, index) => {
            
            // @ts-ignore
            newSessions.push({
                // @ts-ignore
                  subject: kind[index + 1],
                  A: session.value,
                  fullMark: 300,
                })

        });

        return newSessions
    }

    get radialChart(){

        const pourcentage = this._score * 100

        let session: activitySessions = [
            {
              name: 'todayScore',
              uv: pourcentage,
              pv: 2400,
              fill: '#E60000',
            }
        ]


        return session
    }
    
}