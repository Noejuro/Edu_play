<template>
    <v-col align="center" style=" height: 100%;"  md="12" lg="12" xl="12" cols="12" class="py-0 my-0">
        <v-row justify="center" align="center" style="background-color: #F2E8DC; height: 100%;">
            <transition name="fade" appear>
                <v-img src="@/assets/resources/landing_logo.png" max-width="550px"></v-img>
            </transition>
        </v-row>
    </v-col>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {  this.$router.push({ name: 'landing'}); }, 3500);
    }
}
</script>

<style scoped>

    .fade-enter-active, .fade-leave-active {
    transition: opacity 2.5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
    }

    .slide-fade-enter-active {
    transition: all 1s ease;
    }
    .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
    }

</style>