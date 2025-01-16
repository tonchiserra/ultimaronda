<template>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="3" fill="#333333"/>
        
        <template v-if="number === 1">
            <circle cx="8" cy="8" r="1" fill="white"/>
        </template>
        
        <template v-if="number === 2">
            <circle cx="12" cy="4" r="1" fill="white"/>
            <circle cx="4" cy="12" r="1" fill="white"/>
        </template>

        <template v-if="number === 3">
            <circle cx="12" cy="4" r="1" fill="white"/>
            <circle cx="8" cy="8" r="1" fill="white"/>
            <circle cx="4" cy="12" r="1" fill="white"/>
        </template>

        <template v-if="number === 4">
            <circle cx="12" cy="4" r="1" fill="white"/>
            <circle cx="4" cy="4" r="1" fill="white"/>
            <circle cx="12" cy="12" r="1" fill="white"/>
            <circle cx="4" cy="12" r="1" fill="white"/>
        </template>

        <template v-if="number === 5">
            <circle cx="12" cy="4" r="1" fill="white"/>
            <circle cx="4" cy="4" r="1" fill="white"/>
            <circle cx="8" cy="8" r="1" fill="white"/>
            <circle cx="12" cy="12" r="1" fill="white"/>
            <circle cx="4" cy="12" r="1" fill="white"/>
        </template>

        <template v-if="number === 6">
            <circle cx="12" cy="4" r="1" fill="white"/>
            <circle cx="4" cy="4" r="1" fill="white"/>
            <circle cx="12" cy="8" r="1" fill="white"/>
            <circle cx="4" cy="8" r="1" fill="white"/>
            <circle cx="12" cy="12" r="1" fill="white"/>
            <circle cx="4" cy="12" r="1" fill="white"/>
        </template>
    </svg>
</template>

<script setup lang="ts">
    defineProps<{
        number: number
    }>()
</script>

<style scoped>
    svg {
        width: 20px;
        height: 20px;
    }
</style>