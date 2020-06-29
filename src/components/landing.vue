<template>
    <v-col align="center" style=" height: 100%;"  md="12" lg="12" xl="12" cols="12" class="py-0 my-0">
        <v-row class="sticky" align="center" style="height: 60px; background-color: #F2E8DC;">
            <v-col class="py-0 my-0">
                <v-row class="py-0 my-0" style="max-width: 1110px; margin: 0 auto; ">
                    <v-col cols="auto" class="py-0 my-0" align-self="center">
                        <v-img src="@/assets/resources/logo.png" max-width="45px"></v-img>
                    </v-col>
                    <v-col>
                    </v-col>
                    <v-col cols="auto" align-self="center">
                        <v-row justify="center" class="px-4">
                            <a style="color: #36593C">
                                Inicio
                            </a>
                        </v-row>
                    </v-col>
                    <v-col cols="auto" align-self="center">
                        <v-row justify="center" class="px-4">
                            <a style="color: #36593C">
                                Iniciar Sesión
                            </a>
                        </v-row>
                    </v-col>
                    <v-col cols="auto" align-self="center">
                        <v-row justify="center" class="px-4">
                            <v-btn class="buttonLower" rounded color="#36593C" style="color: white">
                                Entrar
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="py-0 my-0">
            <v-img src="@/assets/resources/code-banner.jpg"  height="570" max-width="100%" style="opacity:1; position: relative">
                <v-row class="Thin" justify="center" style="position: absolute; left: 0; right: 0; margin-left: auto; margin-right: auto; top: 30%; color: white; font-size: 50px; max-width: 990px">
                    ¡Hola! Bienvenido a Edu Play, tu STI para aprender desarrollo web como un profesional
                </v-row>
            </v-img>
        </v-row>
        <v-row class="Thin mt-10" justify="center" style="font-size: 40px; color: #4D4D4D">
            ¡Nuestras clases!
        </v-row>
        <v-row justify="center">
            <v-col cols="auto">
                <v-card width="350" height="390" elevation="5" style="border-radius: 15px">
                    <v-col cols="12" class="py-0 my-0" style="height: 100%">
                        <v-row style="height: 100%">
                            <v-img src="@/assets/resources/under.jpg"  height="100%" max-width="100%" style="border-radius: 15px"></v-img>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
            <v-col cols="auto">
                <v-card width="350" height="390" elevation="5" style="border-radius: 15px">
                    <v-col cols="12" class="pt-0 mt-0">
                        <v-row>
                            <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                        </v-row>
                        <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                            Curso de Vue
                        </v-row>
                        <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                            ¡Todo lo que necesitas para aprender a programar web single page!
                        </v-row>
                        <v-row justify="center" class="pt-10">
                            <v-btn class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                Comenzar
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
            <v-col cols="auto">
                <v-card width="350" height="390" elevation="5" style="border-radius: 15px">
                    <v-col cols="12" class="py-0 my-0" style="height: 100%">
                        <v-row style="height: 100%">
                            <v-img src="@/assets/resources/under.jpg"  height="100%" max-width="100%" style="border-radius: 15px"></v-img>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
            
        </v-row>
        <v-row justify="center" class="mt-12 mb-12">
            <v-btn class="buttonLower" x-large="" rounded color="#4C8055" style="color: white; font-size: 15px">
                Ver todas las clases
            </v-btn>
        </v-row>
    </v-col>
</template>

<script>
export default {
}
</script>

<style scoped>

    div.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: -1px;
        z-index: 1;
    }

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