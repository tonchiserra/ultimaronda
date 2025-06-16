export interface GameInterface {
    state: any
    computeds: any
    addPlayer: () => void
    setPlayerWinner: () => void
    isGameFinished: () => boolean
    createComputeds: () => void
    getHistory: () => any[]
    setHistory: () => void
}