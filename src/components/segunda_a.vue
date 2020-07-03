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
                    Entendiendo Vue
                </v-row>
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Qué es un SPA? es una aplicación web de una sola pagina, es decir, la interacción de la aplicación es en una pagina. En una SPA el HTML, JavaScript, CSS se carga una sola vez, ¡Increíble!.
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Todos los días es probable que interactues con aplicaciones SPA, como por ejemplo YouTube, Netflix, Gmail, etc.
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Debe de resolver estos tres puntos: Enrutado, Interfaz de usuario dinámica, Acceso a los datos.
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Como primero, el enrutado, debe de permitir al usuario navegador a través de URLs. Respecto a la Interfaz de usuario dinámica, se refiere a actualizar la información que se visualiza en la pagina cuando recibimos datos a través del API. Finalmente, acceso a los datos, la aplicación pueda acceder a un sistema de almacenamiento de datos en cliente. El navegador nos proporciona una serie de servicios como: Local Storage, Session Storage, Fetch, etc.
                </v-row> 
                
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/onepage.png" max-width="100%"></v-img>
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/onepage.jpeg" max-width="100%"></v-img>
                </v-row> 
                
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Esto que soluciona
                </v-row> 
                <v-row justify="start" class="Reguular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Es múy común que páginas gigantescas como Facebook nos resulten ser algo pesadas, o plataformas sencillas pero tardan mucho tiempo en cargar cada página, esto suele ser muy tedioso para cualquier usuario,
                    entonces imagina que encuentras una página o plataforma que nunca carga una nueva página ¿Sería increible que eso sucediera, no? Pues eso ya existe y lo estas viendo en esta plataforma. Para eso sirve Vue, para crear plataformas Simple Page donde solo carguen componentes y no toda la pagina
                </v-row> 


                <v-row justify="center" class="mt-10 mb-12">
                    <v-btn @click="$router.push({ name: 'classess'}); $store.state.completed.dos = 1;" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
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