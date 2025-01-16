<template>
    <RouterLink :to="game.url" class="game-button press-on-hover">
        <img :src="`/${game.icon}`">
        {{ game.name }}
    </RouterLink>
</template>

<script setup lang="ts">
    defineProps<{
        game: {
            name: string
            icon: string
            url: string
        }
    }>()
</script>

<style scoped>
    .game-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        padding: 0 20px;
        height: 60px;
        width: 100%;
        border-radius: 10px;
        font-size: 24px;
        font-weight: 700;
        background-color: #fff;
        box-shadow: 4px 4px 16px 0px #3333331a;
    }
</style>