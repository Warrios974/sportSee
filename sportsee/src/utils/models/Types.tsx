/* Components Props Types */

export type BannerProps = {
    name: string | undefined,
    description: string
}

export type ChartsBoardProps = {
    userID: number
}

/*Utils Charts Data Types */

export type receiveDataFromfetch = { 
    id?:number,
    userId?: number,
    score?: number,
    todayScore?: number,
    sessions?: { day: string | number; kilogram: number; calories: number; }[] | { day: string | number, sessionLength: number }[]
    kind?: { 1: string, 2: string, 3: string, 4: string, 5: string, 6: string},
    data?: { value: number, kind: number }[],
}

export type BarChartType = { day:  string | number, kilogram: number, calories: number, }[]
export type LineChartType = { day:  string | number, sessionLength: number;}[]
export type RadarChartType = { subject: string; A: number, fullMark: number; }[]
export type RadialChartType = { name: string, uv: number, pv: number, fill: string }[]

export type sessions = BarChartType | LineChartType | undefined
export type kind = undefined | { 1: string, 2: string, 3: string, 4: string, 5: string, 6: string}
export type dataSession = undefined | { value: number, kind: number }[]
