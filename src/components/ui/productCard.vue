<template>
    <div>
        <div class="flex justify-center product-list" v-if="type==='gift'">
            <div class="max-w-sm rounded overflow-hidden relative"  v-for="gift in gifts" :key="gift.id">
                <img class="w-full" v-bind:src="gift.img" :alt="gift.text">
                <div class="text-center mt-3 mr-10">
                   <Button :buttonText="gift.text" />
                </div>
            </div>
        </div>
        <div class="flex justify-center product-list mb-24" v-else>
            <div class="max-w-sm rounded overflow-hidden relative"  v-for="product in products" :key="product.id">
                <div v-if="product.bundled">
                    <img class="bundled" src="../../../public/bundled.png" alt="bundled">
                </div>
                <div v-if="product.isNew">
                    <span class="new text-white bg-blue-900 p-3">NEW</span>
                </div>
                <img class="w-full" v-bind:src="product.img" :alt="product.description">
                <div>
                    <div class="font-bold text-xl mb-2">{{ product.price }}</div>
                    <a href="#" class="text-black font-bold">
                        {{ product.description }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "./Button";
    export default {
        name: "productCard",
        props: {
            type: null
        },
        components:{
            Button
        },
        data: function () {
            return {
                products: [
                    { id:1, img: require('../../../public/product1.png') ,price:'3 for 2',description:'LADIES SOCKS  >',bundled:false,isNew:false },
                    { id:2, img: require('../../../public/product2.png') ,price:'2 for €25',description:'MENS COUNTRY CHECK SHIRTS  >',bundled:true,isNew:false },
                    { id:3, img: require('../../../public/product3.png') ,price:'€125',description:'LADIES TWEED BLAZERS  >',bundled:false,isNew:false },
                    { id:4, img: require('../../../public/product4.png') ,price:'€60',description:'KILBURN YARD BOOTS  >',bundled:false,isNew:true }
                ],
                gifts: [
                    {id:1,img: require('../../../public/product5.png'),text:'Gifts for Horse Lovers  >'},
                    {id:2,img: require('../../../public/product6.png'),text:'Gifts for Farmers  >'},
                    {id:3,img: require('../../../public/product7.png'),text:'GIFTS FOR DOG WALKERS  >'}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .product-list {
        img {
            width: 300px;
            height: 400px;
            object-fit: cover;
            margin-right: 40px;
        }
        .bundled {
            top: 0;
            left: 5px;
            z-index: 9;
            width: 80px;
            height: 80px;
            position: absolute;

        }
        .new{
            top: 0;
            padding: 0;
            width: 60px;
            height: 25px;
            position: absolute;
            text-align: center;
        }
    }
</style>