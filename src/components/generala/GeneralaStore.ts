import { reactive, computed } from "vue"
import { GeneralaPlayer } from "./GeneralaPlayer"
import type { IGeneralaState, IGeneralaSets, IGeneralaPlayer } from "./GeneralaInterface"
import type { GameInterface } from "../shared/GameInterface"

class GeneralaStore implements GameInterface {
    public state: IGeneralaState
    public computeds: any
    private timeout: any = null

    constructor(baseState: IGeneralaState) {
        this.state = reactive(baseState)
        window.addEventListener('addPlayer::generala', this.addPlayer.bind(this))
        this.createComputeds()
    }

    public changePoints(playerIndex: number, setName: keyof IGeneralaSets) {
        const selectedPlayer = this.state.players[playerIndex]
        const set = this.state.sets[setName]

        let nextPointIndex = set.indexOf(selectedPlayer.sets[setName]) // index of the current point
        if(nextPointIndex === set.length - 1) nextPointIndex = 0
        else nextPointIndex++

        selectedPlayer.sets[setName] = set[nextPointIndex]

        selectedPlayer.setTotal()
        this.setHighestTotal()
        
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setPlayerWinner()
        }, 2000)
    }

    public setHighestTotal() {
        this.state.highestTotal = Math.max(...this.state.players.map((player: any) => player.total))

        this.state.players.forEach((player: any) => {
            if(player.total >= this.state.highestTotal && player.total !== 0) player.isWinning = true
            else player.isWinning = false
        })
    }

    public addPlayer() {
        this.state.players.push(new GeneralaPlayer(`J${this.state.players.length + 1}`))
    }

    public setPlayerWinner() {
        if(this.isGameFinished()) {
            const playersWinner = this.state.players.filter((player: any) => player.isWinning)
            this.state.playerWinner = !!playersWinner && playersWinner.length === 1 ? playersWinner[0].name : "EMPATE"

            this.setHistory()
        }
    }

    public isGameFinished() {
        let finished = true
        this.state.players.forEach((player: IGeneralaPlayer) => {
            Object.entries(player.sets).forEach(([_, value]) => {
                if(value === '' || !!!value) finished = false
            })
        })

        return finished
    }

    public createComputeds() {
        const playerWinner = computed(() => this.state.playerWinner)

        this.computeds = reactive({
            playerWinner
        })
    }

    public setHistory() {
        const history = JSON.parse(localStorage.getItem('ultima-ronda:generala') ?? '[]')
        history.push({
            players: this.state.players,
            highestTotal: this.state.highestTotal,
            playerWinner: this.state.playerWinner
        })

        localStorage.setItem('ultima-ronda:generala', JSON.stringify(history))
    }

    public getHistory() {
        return JSON.parse(localStorage.getItem('ultima-ronda:generala') ?? '[]')
    }
}

const baseState: IGeneralaState = {
    players: [
        new GeneralaPlayer('J1'),
        new GeneralaPlayer('J2')
    ],
    sets: {
        one: ['', 1, 2, 3, 4, 5, 'X'],
        two: ['', 2, 4, 6, 8, 10, 'X'],
        three: ['', 3, 6, 9, 12, 15, 'X'],
        four: ['', 4, 8, 12, 16, 20, 'X'],
        five: ['', 5, 10, 15, 20, 25, 'X'],
        six: ['', 6, 12, 18, 24, 30, 'X'],
        ladder: ['', 20, 25, 'X'],
        full: ['', 30, 35, 'X'],
        poker: ['', 40, 45, 'X'],
        generala: ['', 50, 'X'],
        doubleGenerala: ['', 60, 100, 'X']
    },
    highestTotal: 0,
    playerWinner: undefined
}

const generalaStore = new GeneralaStore(baseState)

export default generalaStore