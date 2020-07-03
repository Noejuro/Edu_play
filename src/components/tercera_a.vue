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
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-12 pt-6">
            <v-card width="1050" elevation="3" >
                <v-row justify="center" class="Bold mt-12" style="font-size: 25px; color: #4D4D4D">
                    Condicionales y renderizando listas
                </v-row>
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    v-if
                </v-row> 
                <v-row justify="center" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/if2.png" max-width="700px"></v-img>
                </v-row> 
                <v-row justify="start" class="Regular mt-4" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Debido a que v-if es una directiva, debe adjuntarse a un solo elemento. Pero, ¿y si queremos cambiar más de un elemento? En este caso, podemos usar v-if en un elemento.
                </v-row> 
                <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Cómo imaginas que sería en el caso de querer un else? Intentalo tú mismo!
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    v-show
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/notshow.png" max-width="700px"></v-img>
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Diferencias
                </v-row> 
                <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Cuáles crees que sean las diferencias entre estos dos? Crea ambas y averigualo probando su comportamiento.
                </v-row> 
                
                

                <v-row justify="center" class="mt-10 mb-12">
                    <v-btn @click="$router.push({ name: 'classess'}); $store.state.completed.tres = 1;" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
                        Terminar Clase
                    </v-btn>
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
    }
}
</script>