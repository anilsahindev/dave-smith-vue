<template>
    <div class="flex justify-center align-middle text-right my-12 ">
        <div class=" px-4 py-2 m-2 inline-block align-middle self-center">
            <h3 class="text-3xl font-bold text-primary">Give The Gift of Choice</h3>
            <Button buttonText="GIFT CARDS  >" />
        </div>
        <div class="flex-initial text-gray-700 text-center px-4 py-2 m-2">
            <img src="../../../public/gift-box.png" alt="">
        </div>
    </div>
</template>

<script>
    import Button from "../ui/Button";
    export default {
        name: "GiftCard",
        components:{
            Button,
        }
    }
</script>

<style scoped>

</style>