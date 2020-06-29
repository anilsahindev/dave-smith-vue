<template>

    <nav class="flex header items-center justify-between flex-wrap p-6 border-b-2 border-black-100">
        <div class="flex items-center flex-shrink-0 text-black mr-10">
            <span class="font-semibold text-xl tracking-tight">DAVE SMITH</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    New
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    Ladies
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    Men's
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold">
                    Children's
                </a>
            </div>
            <div class="text-sm lg:flex-grow text-right">
                <span href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    <div class="shiping-info">
                        <p>FREE DELIVERY</p>
                        <i>on orders over € 60 *</i>
                    </div>
                </span>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    <img src="../../../public/heart.svg" alt="">
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold mr-4">
                    <img src="../../../public/user.svg" alt="">
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 font-light hover:font-bold">
                    <img src="../../../public/shopping-cart.svg" alt="">
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped lang="scss">
.header {
    a {
        font-style: italic;
        color: #000;
        font-size: 14px;
        img {
            width: 15px;
            height: 22px;
        }
    }
    .shiping-info{
        width: 110px;
        p {
            font-size: 12px;
            line-height: 4px;
        }
        i {
            font-size: 8px;
        }
    }
    .shinping-icon {
        width: 30px;
        position: relative;
        top: 20px;
        right: 15px;
    }
}
</style>