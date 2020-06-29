<template>
    <div>
        <h6 class="text-center text-4xl font-light mb-5">{{ sliderTitle }}</h6>
        <VueSlickCarousel :arrows="false" :dots="true" v-if="sliderType !== 'product'">
            <div class="flex justify-center">
                <productCard  type="gift" />
            </div>
            <div class="flex justify-center">
                <productCard type="gift" />
            </div>
            <div class="flex justify-center">
                <productCard  type="gift"/>
            </div>
        </VueSlickCarousel>
        <VueSlickCarousel :arrows="false" :dots="true" v-else>
            <div class="flex justify-center">
                <productCard />
            </div>
            <div class="flex justify-center">
                <productCard />
            </div>
            <div class="flex justify-center">
                <productCard />
            </div>
        </VueSlickCarousel>

    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import productCard from "../ui/productCard";

    export default {
        name: 'MyComponent',
        components: { VueSlickCarousel,productCard },
        props:{
            sliderTitle: null,
            sliderType: {
                type: String,
                default: 'product'
            },
        },
    }
</script>

<style lang="scss">
    .flex{
        display: flex !important;
    }
    .slick-slide {
        width: 100%;
    }
    .slick-slider {
        position:relative;
    }
    .slick-slide ~ *{
        display: block !important;
    }
    .slick-dots{
        top: -35px;
        left: -20px;
        li {
            &:first-child{
                button{
                    &:before {
                        color: red;
                    }
                }
            }
            &:last-child{
                button{
                    &:before {
                        color: green;
                    }
                }
            }
        }
    }
</style>