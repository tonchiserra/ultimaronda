<template>
    <div class="page-width home">
        <h1 class="main-title">ÚLTIMA RONDA</h1>

        <nav class="game-list">
            <template v-for="game in games">
                <GameButton :game="game" />
            </template>
        </nav>
    </div>
</template>

<style scoped>
    .home {
        background-image: linear-gradient(to left bottom, #fff3dd, #fff0e7, #fff0f2, #f8f2f7, #f4f4f4);
        padding-top: 100px;
        height: 100dvh;
    }

    .game-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 70px;
    }
</style>

<script setup lang="ts">
    import GameButton from './GameButton.vue'

    const games = [
        { name: 'Generala', icon: 'dice.svg', url: '/generala' },
        { name: 'Truco', icon: 'poker.svg', url: '/truco' }
    ]
</script>