<template>
    <Header 
        :backLink="'/'"
        :showRefresh="true"
        :showAddPlayer="true"
        :addPlayerEvent="'addPlayer::chinchon'"
    >
        CHINCHON
    </Header>

    <div class="game">
        <div class="column" v-for="player in players">
            <div class="block"><input type="text" v-model="player.name" @input="event => player.setName((event.target as HTMLInputElement).value)" class="input--transparent text" /></div>
            
            <div class="block block--stack" v-for="points in player.points">
                <span class="text-small text-grey">{{ points.point }}</span>
                <span class="text">{{ points.total }}</span>
            </div>

            <div class="block block--set-points">
                <input type="number" v-model="player.newPoint" @input="event => player.setNewPoint(Number((event.target as HTMLInputElement).value))" class="input--transparent" placeholder="Puntos" :disabled="player.isLoser" />
                <button @click="player.setTotal(Number(player.newPoint))" :disabled="typeof player.newPoint !== 'number' || player.isLoser"><ArrowRight /></button>
                <button @click="player.setTotal(-10)" :disabled="player.isLoser">- 10</button>
            </div>
        </div>
    </div>

    <WinnerPopup v-if="!!chinchonStore.computeds.playerWinner" :playerWinner="chinchonStore.computeds.playerWinner" />
</template>

<script setup lang="ts">
    import Header from '../shared/Header.vue'
    import WinnerPopup from '../shared/WinnerPopup.vue'
    import chinchonStore from './ChinchonStore'
    import ArrowRight from '../../assets/ArrowRight.vue'

    const players = chinchonStore.state.players
</script>

<style scoped>
    .column {
        width: 100%;
        min-width: 70px;
        display: flex;
        flex-direction: column;
    }

    .block {
        min-height: 5rem;
        height: 5rem;
    }
</style>