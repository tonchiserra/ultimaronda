<template>
    <Header 
        :backLink="'/generala'"
        :showRefresh="false"
        :showAddPlayer="false"
    >
        HISTORIAL
    </Header>

    <div class="history">
        <div class="result" v-for="result in history">
            <div v-for="player in result.players" :class="{ 'text-special': player.total === result.highestTotal }">
                <p>{{ player.name }}</p>
                <p>{{ player.total }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .history {
        display: grid;
        grid-template-columns: 1fr;
    }

    .result {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        gap: 10px;
        justify-items: center;

        &:nth-child(odd) {
            background-color: var(--table-first-color);
        }

        &:nth-child(even) {
            background-color: var(--table-second-color);
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
        }
    }
</style>

<script setup lang="ts">
    import Header from '../shared/Header.vue'
    import generalaStore from './GeneralaStore'

    const history = generalaStore.getHistory()
</script>