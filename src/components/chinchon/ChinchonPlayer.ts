import type { IChinchonPlayer, IChinchonPoints } from "./ChinchonInterface"
import chinchonStore from "./ChinchonStore"

export class ChinchonPlayer implements IChinchonPlayer {
    public name: string
    public newPoint: number | undefined
    public total: number
    public points: IChinchonPoints[]
    public isLoser: boolean

    constructor(playerName: string) {
        this.name = playerName ?? 'Jugador'
        this.newPoint = undefined
        this.total = 0
        this.points = []
        this.isLoser = false
    }

    setNewPoint(newPoint: number): void {
        this.newPoint = newPoint
    }

    setTotal(newPoints: number = 0): void {
        this.total = this.total + newPoints
        this.points.push({ point: newPoints, total: this.total })
        this.newPoint = undefined

        this.isLoser = this.total > 100
        chinchonStore.setPlayerWinner()
    }

    setName(newName: string): void {
        this.name = newName
    }
}