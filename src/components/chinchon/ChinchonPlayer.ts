import type { IChinchonPlayer, IChinchonPoints } from "./ChinchonInterface"
import chinchonStore from "./ChinchonStore"

export class ChinchonPlayer implements IChinchonPlayer {
    public name: string
    public newPoint: number | undefined
    public total: number
    public points: IChinchonPoints[]
    public isLoser: boolean
    public madeChinchon: boolean

    constructor(playerName: string) {
        this.name = playerName ?? 'Jugador'
        this.newPoint = undefined
        this.total = 0
        this.points = []
        this.isLoser = false
        this.madeChinchon = false
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

    setMadeChinchon() {
        this.madeChinchon = true
        this.points.push({ point: 'Chinchon', total: this.total })
        chinchonStore.setPlayerWinner()
    }

    setName(newName: string): void {
        this.name = newName
    }
}