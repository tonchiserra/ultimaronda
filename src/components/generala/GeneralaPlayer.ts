import type { IGeneralaPlayer, IGeneralaSets } from "./GeneralaInterface"

export class GeneralaPlayer implements IGeneralaPlayer {
    public name: string
    public sets: IGeneralaSets
    public total: number
    public isWinning: boolean

    constructor(playerName: string) {
        let baseSets = {
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            ladder: '',
            full: '',
            poker: '',
            generala: '',
            doubleGenerala: ''
        }

        this.name = playerName ?? 'Jugador'
        this.sets = baseSets
        this.total = 0
        this.isWinning = false
    }

    setTotal(): void {
        this.total = [...Object.values(this.sets)].reduce((acc: number, set: any): any => {
            if(typeof set === 'number') acc += set

            return acc
        }, 0)
    }

    setName(newName: string): void {
        this.name = newName
    }
}