<template>
    <header>
        <RouterLink :to="backLink">
            <ArrowLeft />
        </RouterLink>

        <h1><slot></slot></h1>

        <div class="game-actions">
            <button class="button--icon" @click="refresh()" v-if="showRefresh"><Refresh /></button>
            <button class="button--icon" @click="addPlayer()" v-if="showAddPlayer"><UserPlus /></button>
            <RouterLink :to="historyLink" class="button--icon" v-if="!!historyLink"><Clock /></RouterLink>
        </div>
    </header>
</template>

<script setup lang="ts">
    import ArrowLeft from '../../assets/ArrowLeft.vue'
    import Refresh from '../../assets/Refresh.vue'
    import UserPlus from '../../assets/UserPlus.vue'
    import Clock from '../../assets/Clock.vue'

    const props = defineProps<{
        backLink: string
        showRefresh: boolean
        showAddPlayer: boolean
        addPlayerEvent?: string
        historyLink?: string
    }>()

    const refresh = () => location.reload()

    const addPlayer = () => {
        window.dispatchEvent(new Event(props.addPlayerEvent ?? 'addPlayer'))
    }
</script>

<style scoped>
    header {
        height: var(--header-height);
        padding: 0 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        width: 100%;
        background-color: #fff;
        border-bottom: 1px solid var(--gray-color-100);

        h1 {
            text-align: center;
        }
    }

    .game-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
    }
</style>