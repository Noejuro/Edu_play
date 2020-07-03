<template>
    <v-col align="center" style=" height: 100%; background-color: #f5f6f7"  md="12" lg="12" xl="12" cols="12" class="py-0 my-0">
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
                                Mi perfil
                            </a>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-4 pt-6">
            <v-card width="95%" elevation="3" >
                <v-row justify="center" class="Bold mt-12" style="font-size: 25px; color: #4D4D4D">
                    Mis clases
                </v-row>
                <v-row justify="center" class="mt-4">
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.uno }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Empezamos
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Introduccion al curso en general y primer vistazo a Vue
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="primera"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.dos }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Entendiendo Vue
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Explicación de como se maneja el framework Vue
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="segunda"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.tres }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Condicionales y listas
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                   Condicionales como v-if y v-show y manejo de listas con v-for
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="tercera" class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mt-4">
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.cuatro }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Proyecto Smash Bros
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Realizacion del primer proyecto
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="cuarta"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.cinco }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Usando un entorno real
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Instalación de vue-cli
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="quinta" :class="{ completed: !!$store.state.class.cinco }"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.seis }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Componentes
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                   Explicación de que son los componentes
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="sexta" :class="{ completed: !!$store.state.class.seis }"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row justify="center" class="mt-4">
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.siete }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Uso de los componentes
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Manejo de los componentes
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="septima" :class="{ completed: !!$store.state.class.siete }"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.ocho }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Enrutamiento en Vue.js
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                    Manejo e instalación de vue-router
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="octava" :class="{ completed: !!$store.state.class.ocho }"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card  width="350" height="390" elevation="5" style="border-radius: 15px" :class="{ completed: !!$store.state.completed.nueve }">
                            <v-col cols="12" class="pt-0 mt-0">
                                <v-row>
                                    <v-img src="@/assets/resources/vue.png"  height="180" max-width="100%" style="border-radius: 15px 15px 0px 0px"></v-img>
                                </v-row>
                                <v-row justify="center" class="pt-3 Bold" style="font-size: 25px; color: #4D4D4D">
                                    Vuex para almacenamiento
                                </v-row>
                                <v-row justify="center" class="pt-1" style="font-size: 18px; color: #4D4D4D">
                                   Explicación y uso de vuex
                                </v-row>
                                <v-row justify="center" class="pt-10">
                                    <v-btn @click="novena" :class="{ completed: !!$store.state.class.nueve }"  class="buttonLower" rounded color="#4C8055" style="color: white; width: 50%">
                                        Comenzar
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>
                
            </v-card>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data () {
        return {
            terms: false
        }
    },
    methods: {
        primera(){
            if(this.$store.state.userStyle == "Divergente")
            {
                this.$router.push({ name: 'primera_d'});
            }
            if(this.$store.state.userStyle == "Adaptador")
            {
                this.$router.push({ name: 'primera_a'});
            }
            if(this.$store.state.userStyle == "Asimilador")
            {
                this.$router.push({ name: 'primera_as'});
            }
            if(this.$store.state.userStyle == "Convergente")
            {
                this.$router.push({ name: 'primera_c'});
            }
        },
        segunda(){
            if(this.$store.state.userStyle == "Divergente")
            {
                this.$router.push({ name: 'segunda_d'});
            }
            if(this.$store.state.userStyle == "Adaptador")
            {
                this.$router.push({ name: 'segunda_a'});
            }
            if(this.$store.state.userStyle == "Asimilador")
            {
                this.$router.push({ name: 'segunda_as'});
            }
            if(this.$store.state.userStyle == "Convergente")
            {
                this.$router.push({ name: 'segunda_c'});
            }
        },
        tercera(){
            if(this.$store.state.userStyle == "Divergente")
            {
                this.$router.push({ name: 'tercera_d'});
            }
            if(this.$store.state.userStyle == "Adaptador")
            {
                this.$router.push({ name: 'tercera_a'});
            }
            if(this.$store.state.userStyle == "Asimilador")
            {
                this.$router.push({ name: 'tercera_as'});
            }
            if(this.$store.state.userStyle == "Convergente")
            {
                this.$router.push({ name: 'tercera_c'});
            }
            
        },
        cuarta(){
            if(this.$store.state.userStyle == "Divergente")
            {
                this.$router.push({ name: 'first_project'});
            }
            if(this.$store.state.userStyle == "Adaptador")
            {
                this.$router.push({ name: 'first_project_a'});
            }
            if(this.$store.state.userStyle == "Asimilador")
            {
                this.$router.push({ name: 'first_project_as'});
            }
            if(this.$store.state.userStyle == "Convergente")
            {
                this.$router.push({ name: 'first_project_c'});
            }
        }
    },
    created() {
        console.log(this.$store.state.userLeveluno, this.$store.state.userLeveldos, this.$store.state.userLeveltres)
    }
}
</script>

<style scoped>
    .completed{
        opacity: 0.5;
    }
</style>