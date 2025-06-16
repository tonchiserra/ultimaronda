export interface IGeneralaState {
    players:            IGeneralaPlayer[]
    sets:               IGeneralaSets
    highestTotal:       number
    playerWinner:       any
}

export interface IGeneralaPlayer {
    name:               string
    sets:               IGeneralaSets
    total:              number
    isWinning:          boolean
    setTotal():         void
    setName(newName: string): void
}

export interface IGeneralaSets {
    one:                any
    two:                any
    three:              any
    four:               any
    five:               any
    six:                any
    ladder:             any
    full:               any
    poker:              any
    generala:           any
    doubleGenerala:     any
}