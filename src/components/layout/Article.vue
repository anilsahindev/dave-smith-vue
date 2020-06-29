<template>
    <div class="flex-initial text-gray-700 text-center my-24 bg-spots">
        <h1 class="text-primary font-bold text-6xl">GIFTS IN TIME FOR CHRISTMAS</h1>
        <i class="text-red text-4xl font-thin">guaranteed delivery ends in:</i>
        <div class="flex  justify-center">
            <div class="flex-initial text-red  text-5xl text-center px-4 py-2 m-2">
                03
            </div>
            <div class="flex-initial text-red  text-5xl text-center px-4 py-2 m-2">
                :
            </div>
            <div class="flex-initial text-red  text-5xl text-center px-4 py-2 m-2">
                26
            </div>
            <div class="flex-initial text-red  text-5xl text-center px-4 py-2 m-2">
                :
            </div>
            <div class="flex-initial text-red  text-5xl text-center px-4 py-2 m-2">
                {{ timerCount }}
            </div>
        </div>
        <div class="flex  justify-center">
            <Button buttonText="LADIES" class="mr-4 article-button"></Button>
            <Button buttonText="MENS" class="mr-4 article-button"></Button>
            <Button buttonText="CHILDRENS" class="article-button"></Button>
        </div>
    </div>
</template>

<script>
    import Button from '../ui/Button'
    export default {
        name: "Article",
        components: {
            Button
        },
        data() {
            return {
                timerCount: 60
            }
        },

        watch: {

            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true
            }

        }
    }
</script>

<style scoped>
    .article-button {
        width: 230px;
    }
    .bg-spots {
        background: url('../../../public/spots.png');
        background-size: cover;
    }
</style>