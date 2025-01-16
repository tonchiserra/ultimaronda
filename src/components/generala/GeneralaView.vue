<template>
    <Header 
        :backLink="'/'"
        :showRefresh="true"
        :showAddPlayer="true"
        :historyLink="'/generala/history'"
    >
        GENERALA
    </Header>

    <div class="game">
        <div class="column default-column">
            <div class="block"><p>Jugador</p></div>
            <div class="block"><p><Dice :number="1" /></p></div>
            <div class="block"><p><Dice :number="2" /></p></div>
            <div class="block"><p><Dice :number="3" /></p></div>
            <div class="block"><p><Dice :number="4" /></p></div>
            <div class="block"><p><Dice :number="5" /></p></div>
            <div class="block"><p><Dice :number="6" /></p></div>
            <div class="block"><p>Escalera</p></div>
            <div class="block"><p>Full</p></div>
            <div class="block"><p>Poker</p></div>
            <div class="block"><p>Generala</p></div>
            <div class="block"><p>Doble Generala</p></div>
            <div class="block"><p>Total</p></div>
        </div>

        <div class="column" v-for="(player, i) in players">
            <div class="block"><input type="text" v-model="player.name" @input="event => player.setName(event.target.value)" class="input--transparent text" /></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'one')">{{ player.sets.one }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'two')">{{ player.sets.two }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'three')">{{ player.sets.three }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'four')">{{ player.sets.four }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'five')">{{ player.sets.five }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'six')">{{ player.sets.six }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'ladder')">{{ player.sets.ladder }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'full')">{{ player.sets.full }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'poker')">{{ player.sets.poker }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'generala')">{{ player.sets.generala }}</button></div>
            <div class="block"><button @click="generalaStore.changePoints(i, 'doubleGenerala')">{{ player.sets.doubleGenerala }}</button></div>
            <div class="block"><p :class="{ 'text-special': player.isWinning }">{{ player.total }}</p></div>
        </div>
    </div>

    <WinnerPopup v-if="!!generalaStore.computeds.playerWinner" :playerWinner="generalaStore.computeds.playerWinner" />
</template>

<script setup>
    import { computed } from 'vue'
    import Header from '../shared/Header.vue'
    import Dice from './Dice.vue'
    import WinnerPopup from '../shared/WinnerPopup.vue'
    import generalaStore from './GeneralaStore'

    const players = generalaStore.state.players
</script>

<style scoped>
    .game {
        height: calc(100dvh - var(--header-height));
        display: flex;
        overflow-x: auto;
    }

    .default-column {
        position: sticky;
        top: 0;
        left: 0;
        
        .block {
            &:nth-child(odd) {
                border-right: 2px solid var(--table-second-color);
            }

            &:nth-child(even) {
                border-right: 2px solid var(--table-first-color);
            }
        }
    }

    .column {
        height: 100%;
        display: grid;
        grid-template-rows: repeat(13, 1fr);
        width: calc(100dvw / 3);
        min-width: 100px;
    }

    .block {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;

        &:nth-child(odd) {
            background-color: var(--table-first-color);
        }

        &:nth-child(even) {
            background-color: var(--table-second-color);
        }

        p {
            text-align: center;
        }

        button {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
    }
</style>