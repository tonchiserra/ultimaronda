import { reactive, computed } from "vue"
import { ChinchonPlayer } from "./ChinchonPlayer"
import type { IChinchonState, IChinchonPlayer } from "./ChinchonInterface"
import type { GameInterface } from "../shared/GameInterface"

class ChinchonStore implements GameInterface {
    public state: IChinchonState
    public computeds: any
    
    constructor(baseState: IChinchonState) {
        this.state = reactive(baseState)
        window.addEventListener('addPlayer::chinchon', this.addPlayer.bind(this))
        this.createComputeds()
    }
    
    public addPlayer() {
        this.state.players.push(new ChinchonPlayer(`J${this.state.players.length + 1}`))
    }
    
    public setPlayerWinner() {
        if(this.isGameFinished()) {
            const playerWinner = this.state.players.find((player: IChinchonPlayer) => !player.isLoser)
            this.state.playerWinner = !!playerWinner ? playerWinner.name : "EMPATE"
    
            this.setHistory()
        }
    }
    
    public isGameFinished() {
        let finished = false
        const playersInGame = this.state.players.filter((player: IChinchonPlayer) => !player.isLoser)
        if(playersInGame.length <= 1) finished = true
    
        return finished
    }
    
    public createComputeds() {
        const playerWinner = computed(() => this.state.playerWinner)
    
        this.computeds = reactive({
            playerWinner
        })
    }
    
    public setHistory() {
        const history = JSON.parse(localStorage.getItem('ultima-ronda:chinchon') ?? '[]')
        history.push({
            players: this.state.players,
            playerWinner: this.state.playerWinner
        })

        localStorage.setItem('ultima-ronda:chinchon', JSON.stringify(history))
    }
    
    public getHistory() {
        return JSON.parse(localStorage.getItem('ultima-ronda:chinchon') ?? '[]')
    }
}
    
const baseState: IChinchonState = {
    players: [
        new ChinchonPlayer('J1'),
        new ChinchonPlayer('J2')
    ],
    playerWinner: undefined
}
    
const chinchonStore = new ChinchonStore(baseState)
    
export default chinchonStore