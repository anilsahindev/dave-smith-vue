<template>
    <button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4">
        {{buttonText}}
    </button>
</template>

<script>
    export default {
        name: "Button",
        props : {
            buttonText: null,
            size: null,
        }
    }
</script>

<style scoped>

</style>