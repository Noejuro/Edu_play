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
                    Primer proyecto SMASH BROS
                </v-row>
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Qué utilizarás?
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Utilizarás todos los metodos y estructura de Vue que hemos visto hasta ahora, en especial las condiciones, métodos y propiedad computada
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Con este proyecto reforzarás los conocimientos y estructura básica de Vue y su comportamiento.
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Descripción del proyecto
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Este proyecto consta de un simulador de peleas parecido al de Smash Bros en el cual por medio de un key listener tendrás que "atacar" a tu oponente y aumentarle el daño provocado, pero tú tambien pudiendo recibir daño de este. Además de que si ganas o pierdes se mostrará un mensaje de victoria o derrota
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    Producto esperado
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    <v-img src="@/assets/resources/smash.png" max-width="100%"></v-img>
                </v-row> 
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                   Después de realizarlo
                </v-row> 
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    En este proyecto ¿Para qué te fue útil la propiedad computed?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="first">
                        <v-radio
                            label="Para observar los cambios de la variable de salud"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Para no realizar el método de cambio de daño cada rato sino esperar un cambio de variable"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="Para centralizar los datos como la salud, daño dado, etc "
                            value="3"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    En este proyecto ¿En dónde utilizaste el atributo v-if?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="second">
                        <v-radio
                            label="Si hay un daño dado cambiar el valor de variable"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Si el jugador gana o pierde muestra un mensaje"
                            value="2"
                        ></v-radio>
                    </v-radio-group>
                </v-row>
                
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Cuántes secciones tenía tu proyecto?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="third">
                        <v-radio
                            label="Menos de 2"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="2"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="Más de 2"
                            value="3"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Utilizar key-up te sirvió de algo?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="fourth">
                        <v-radio
                            label="No"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Si"
                            value="2"
                        ></v-radio>
                    </v-radio-group>
                </v-row>
                
                <v-row justify="start" class="Regular mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Que aprendiste con este proyecto?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-textarea outlined></v-textarea>
                </v-row>
                

                <v-row justify="center" class="mt-10 mb-12">
                    <v-btn @click="evaluar" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
                        Evaluar
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
            terms: false,
            first: null,
            second: null,
            third: null,
            fourth: null
        }
    },
    methods: {
        evaluar() {
            var score = 0;
            if(this.first == 2)
                score++;
            if(this.second == 2)
                score++;
            if(this.third == 2 || this.third == 3)
                score++;
            if(this.fourth == 2)
                score++;
            if(score > 2)
            {
                this.$store.state.completed.cuatro = 1;
                this.$store.state.class.cinco = null;
                this.$store.state.class.seis = null;
                this.$store.state.class.siete = null;
            }
            else {
                this.$store.state.completed.uno = null;
                this.$store.state.completed.dos = null;
                this.$store.state.completed.tres = null;
                this.$store.state.userStyle = "Divergente";
            }
            this.$router.push({ name: 'classess'})
        }
    }
}
</script>