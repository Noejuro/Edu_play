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
                    Empezamos
                </v-row>
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Estamos muy contentos con que hayas iniciado este curso de Vue el cual te garantiza que podrás desarrollar aplicaciónes single page de calidad competente al mercado actual que existe sobre el desarrollo web
                    En este curso aprenderás el desarrollo de Single Page por medio de Vue, el cual es un framwork de desarrollo web parecido a Angular y React ya que estos también son SPA.
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Instancia de Vue
                </v-row> 
                <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Cada aplicación de Vue se comienza creando una nueva Instancia de Vue con la función Vue:
                </v-row> 
                <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/instancia.png" max-width="100%"></v-img>
                </v-row> 
                 <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Aunque no estrictamente asociado con el patrón MVVM, el diseño de Vue fue en parte inspirado por él. Como una convención, solemos usar la variable vm (abreviación de ViewModel) para hacer referencia a nuestra instancia de Vue.
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Comencemos a programar
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    En esta sección comenzaremos programando un código para escribir Hola mundo! Para esto debes ingresar a jsfiddle.net y escribir el código como se muestra
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/primera.png" max-width="100%"></v-img>
                </v-row> 
                
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Para entender este código vemos que tenemos dos secciones, una es el html donde por medio de un div paterno invocamos la estancia de Vue y dentro de este div colocaremos todos los elementos que deseemos. Y la seccion de Vue que es donde tenemos nuestros datos, metodos, propiedades, etc.
                </v-row> 

                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Realiza un código
                </v-row> 
                <v-row justify="start" class="Regular mt-2" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    En este código deberas de imprimir dos mensajes distintos
                </v-row> 

                <v-row justify="center" class="mt-10 mb-12">
                    <v-btn @click="$router.push({ name: 'classess'}); $store.state.completed.uno = 1;" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
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