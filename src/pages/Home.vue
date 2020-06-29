<template>
    <div>
        <Header/>
        <Article />
        <Slider sliderTitle="Top Festive Picks" />
        <Slider sliderTitle="Gifts For The Whole List" sliderType= "gift" />
        <GiftCard />
        <GiftBox />
        <AppFooter />
    </div>
</template>

<script>
    import Header from '../components/layout/AppHeader'
    import Article from '../components/layout/Article'
    import Slider from '../components/article/Slider'
    import GiftCard from "../components/article/GiftCard";
    import GiftBox from "../components/article/GiftBox";
    import AppFooter from "../components/layout/AppFooter";
    export default {
        name: "Home",
        components: {
            Header,
            Article,
            Slider,
            GiftCard,
            GiftBox,
            AppFooter,
        }
    }
</script>

<style scoped>

</style>