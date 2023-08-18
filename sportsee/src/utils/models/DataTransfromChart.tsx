import { BarChartType, LineChartType, RadarChartType, RadialChartType, dataSession, receiveDataFromfetch, kind, sessions } from "./Types"

export default class DataTransfromChart{
    _sessions: sessions
    _kind: kind
    _data: dataSession
    _score: number | undefined

    constructor(data?: receiveDataFromfetch){
        this._sessions = data?.sessions || undefined
        this._kind = data?.kind || undefined
        this._data = data?.data || undefined
        this._score = data?.score ? data?.score : data?.todayScore || undefined
    }

    get barChart(){

        let newSessions: BarChartType = []

        let number = 0

        this._sessions?.forEach((session) => {
            number += 1
            
            if ('kilogram' in session && 'calories' in session){
                newSessions.push({
                    day: number.toString(),
                    kilogram: Number(session.kilogram),
                    calories: Number(session.calories),
                    })
            }
        });

        return newSessions
    }

    get lineChart(){

        let newSessions: LineChartType = []

        const defaultvalue = {
            day: 'day',
            sessionLength:0,
        }

        const firstSession = (this._sessions?.[0] && 'sessionLength' in this._sessions?.[0]) ? {
            day: '',
            sessionLength: this._sessions?.[0].sessionLength,
        } : defaultvalue

        const lastSession = (this._sessions?.[6] && 'sessionLength' in this._sessions?.[6]) ? {
            day: '',
            sessionLength: this._sessions?.[6].sessionLength,
        } : defaultvalue

        let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        this._sessions?.forEach((session, index) => {
            
            if ('sessionLength' in session){
                newSessions.push({
                    day: week[index],
                    sessionLength: session.sessionLength,
                })
            }
        });

        newSessions.unshift(firstSession)
        newSessions.push(lastSession)

        return newSessions
    }

    get radarChart(){
    
        type kindType = undefined | { [key: number]: string };

        let newSessions: RadarChartType = []
        const kind: kindType = this._kind || {}
        const data = this._data
        

        data?.forEach((session, index) => {
            
            newSessions.push({
                  subject: kind[index + 1].toString(),
                  A: session.value,
                  fullMark: 300,
                })

        });

        return newSessions
    }

    get radialChart(){

        const pourcentage = (this._score || 0) * 100

        let session: RadialChartType = [
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