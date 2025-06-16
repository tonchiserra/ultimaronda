export interface IChinchonState {
    players:            IChinchonPlayer[]
    playerWinner:       any
}

export interface IChinchonPlayer {
    name:               string
    newPoint:           number | undefined
    points:             IChinchonPoints[]
    total:              number
    isLoser:            boolean
    setTotal: (newPoints: number) => void
    setName: (newName: string) => void
    setNewPoint: (newPoint: number) => void
}

export interface IChinchonPoints {
    point: number
    total: number
}