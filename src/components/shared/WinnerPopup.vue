<template>
    <div class="winner-popup">
        <p v-if="playerWinner === 'EMPATE'">Ups... Tenemos un</p>
        <p v-else>¡Felicidades! Ganador</p>
        <h2 class="text-special">{{ playerWinner }}</h2>
        <button @click="retryGame" class="button--primary press-on-hover">Volver a jugar</button>
    </div>

    <div class="winner-popup__overlay"></div>
</template>

<style scoped>
    .winner-popup {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 10;
        width: 100%;
        max-width: 500px;
        height: max-content;
        background-color: #FFF;
        background-image: linear-gradient(to left bottom, #fff3dd, #fff0e7, #fff0f2, #f8f2f7, #f4f4f4);
        padding: 50px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border-radius: 10px;
        animation: fadeIn 0.3s ease-in-out both;
        opacity: 0;
        transform: scale(0.8) translateY(-50px);

        h2 {
            font-weight: 900;
        }

        button {
            margin-top: 20px;
        }
    }

    .winner-popup__overlay {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9;
        width: 100%;
        height: 100%;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.8) translateY(-50px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
</style>

<script setup lang="ts">
    defineProps<{
        playerWinner: string
    }>()

    const retryGame = () => {
        location.reload()
    }
</script>
