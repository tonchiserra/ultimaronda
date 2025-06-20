<template>
    <div class="scroll-warning" ref="scrollWarningRef" style="opacity: 0;">
        <ArrowRight />
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import ArrowRight from '../../assets/ArrowRight.vue'

    let props = defineProps<{
        columns: number
    }>()

    const scrollWarningRef = ref<HTMLElement | null>(null)

    watch(() => props.columns, newColumns => {
        let columnWidth = document.querySelector('.column')?.clientWidth || 100
        let totalWidth = newColumns * columnWidth
        if(totalWidth > window.innerWidth) {
            scrollWarningRef.value!.style.opacity = '1'
            setTimeout(() => {
                scrollWarningRef.value!.style.opacity = '0'
            }, 6000)
        }
        else scrollWarningRef.value!.style.opacity = '0'
    })

</script>

<style scoped>
    .scroll-warning {
        position: fixed;
        top: 50%;
        right: 20px;
        width: 32px;
        height: 32px;
        border-radius: 100px;
        background-color: #fff;
        color: #000;
        box-shadow: 0 2px 16px rgba(148, 148, 148, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: wave 2s ease infinite;
        transition: opacity 500ms ease;
    }

    @keyframes wave {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-10px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>