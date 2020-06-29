<template>
    <div class="flex ml-10">
        <div class="flex-auto border-r-4 px-4 py-2 m-2 inline-flex justify-center">
            <ul class="list-none ">
                <p class="mb-2">MORE INFO</p>
                <li><a href="#">about us</a></li>
                <li><a href="#">delivery info</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">rydale jobs</a></li>
                <li><a href="#">sitemap</a></li>
            </ul>
        </div>
        <div class="flex-auto  border-r-4  px-4 py-2 m-2 inline-flex justify-center items-center">
            <h1 class="font-bold text-3xl">DAVE SMITH</h1>
        </div>
        <div class="flex-auto  px-4 py-2 m-2 inline-flex justify-center">
            <ul class="list-none">
                <p class="mb-2">MORE INFO</p>
                <li><img src="../../../public/location.svg" alt="#"> rydale stockists</li>
                <li><img src="../../../public/flag.svg" alt="#">show & events</li>
                <li><img src="../../../public/phone.svg" alt="#">0545 451 45 19</li>
                <li><img src="../../../public/send.svg" alt="#">contact us</li>
                <li><img src="../../../public/flag.svg" alt="#">sitemap</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped lang="scss">
li{
    font-weight: 300;
    img {
        width: 15px;
        display: inline-block;
        margin-right: 10px;
    }

}
</style>