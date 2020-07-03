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
                    Test de conocimientos
                </v-row>
                <v-row justify="center" class="Regular mt-0" style="font-size: 15px; color: #4D4D4D; max-width: 665px">
                    Con este test podremos conocer que nivel de conocimiento tienes sobre las one page y Vue, asi podremos asignarte a las clases que realmente necesitas conocer.
                </v-row>
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Que tienen como caracteristica primordial Vue, Angular y React?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="zero">
                        <v-radio
                            label="Uso de componentes"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Que son Single Page"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="Manejan framweorks"
                            value="3"
                        ></v-radio>
                        <v-radio
                            label="No se tienen que instalar"
                            value="4"
                        ></v-radio>
                    </v-radio-group>
                </v-row>
                <v-row justify="start" class="Bold mt-8" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    ¿Cuál de estas son realmente ventajas de Vue?
                </v-row>
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-checkbox v-model="first" label="Tamaño pequeño" value="v1"></v-checkbox>
                    <v-checkbox v-model="first" label="Facil de entender" value="v2"></v-checkbox>
                    <v-checkbox v-model="first" label="No necesitas instalación" value="f1"></v-checkbox>
                    <v-checkbox v-model="first" label="Codificación sincrona" value="f2"></v-checkbox>
                    <v-checkbox v-model="first" label="Uso de componentes" value="v3"></v-checkbox>
                    <v-checkbox v-model="first" label="Integración simple" value="v4"></v-checkbox>
                </v-row>
                
                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    El ciclo de vida de Vue se compone por las siguientes partes: beforeCreated, mounted, beforeDestroyed, afterMounted. ¿Cuál de ellos es incorrecto?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="second">
                        <v-radio
                            label="beforeCreated"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="mounted"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="beforeDestroyed"
                            value="3"
                        ></v-radio>
                        <v-radio
                            label="afterMounted"
                            value="4"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿La propiedad watch sirve como metodos get?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="third">
                        <v-radio
                            label="Cierto"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Falso"
                            value="2"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿La propiedad watch fija una variale y espera un cambio en ella para actuar?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="fourth">
                        <v-radio
                            label="Cierto"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Falso"
                            value="2"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Para qué sirve vuex?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="fifth">
                        <v-radio
                            label="Para manejo de direcciones de los componentes y URL"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Para manejo de HTTP Request"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="Para centralización de datos"
                            value="3"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="start" class="Bold mt-6" style="font-size: 17px; color: #4D4D4D; width: 85%; text-align: left">
                    ¿Para qué sirve vue-router?
                </v-row> 
                <v-row justify="center" class="Bold mt-1" style="font-size: 17px; color: #4D4D4D; width: 85%">
                    <v-radio-group v-model="six">
                        <v-radio
                            label="Para manejo de direcciones de los componentes y URL"
                            value="1"
                        ></v-radio>
                        <v-radio
                            label="Para manejo de HTTP Request"
                            value="2"
                        ></v-radio>
                        <v-radio
                            label="Para centralización de datos"
                            value="3"
                        ></v-radio>
                    </v-radio-group>
                </v-row>

                <v-row justify="center" class="mt-5 mb-12">
                        <v-btn @click="getLevel" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
                            Terminar
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
            zero: null,
            first: [],
            second: null,
            third: null,
            fourth: null,
            fifth: null,
            six: null,
        }
    },
    methods: {
        getLevel() {
            var score = 0;
            console.log(this.zero, this.first, this.first.length)
            if(this.zero == 2)
                score+= 2;
            for(var i = 0; i < this.first.length; i++)
            {
                if(this.first[i] == "v1" || this.first[i] == "v2" || this.first[i] == "v3" || this.first[i] == "v4")
                    score++;
                else
                    score--;
            }
            if(this.second == 4)
                score+= 2;
            if(this.third == 2)
                score+= 2;
            if(this.fourth == 1)
                score+= 2;
            if(this.fifth == 3)
                score+= 2;
            if(this.six == 1)
                score+= 2;

            if(score >= 14)
            {
                this.$store.state.completed.uno = 1;
                this.$store.state.completed.dos = 1;
                this.$store.state.completed.tres = 1;
                this.$store.state.completed.cuatro = 1;
                this.$store.state.completed.cinco = 1;
                this.$store.state.completed.seis = 1;
                this.$store.state.completed.siete = 1;
                this.$store.state.class.uno = null;
                this.$store.state.class.dos = null;
                this.$store.state.class.tres = null;
                this.$store.state.class.cuatro = null;
                this.$store.state.class.cinco = null;
                this.$store.state.class.seis = null;
                this.$store.state.class.siete = null;
                this.$store.state.class.ocho = null;
                this.$store.state.class.nueve = null;
                this.$store.state.userLeveltres = 3;
                this.$store.state.userLeveldos = 2;
            }
            else if(score < 14 && score > 7)
            {
                this.$store.state.completed.uno = 1;
                this.$store.state.completed.dos = 1;
                this.$store.state.completed.tres = 1;
                this.$store.state.class.uno = null;
                this.$store.state.class.dos = null;
                this.$store.state.class.tres = null;
                this.$store.state.class.cuatro = null;
                this.$store.state.class.cinco = null;
                this.$store.state.class.seis = null;
                this.$store.state.class.siete = null;
                this.$store.state.userLeveltres = null;
                this.$store.state.userLeveldos = 2;
            }
            else
            {
               this.$store.state.class.uno = null;
                this.$store.state.class.dos = null;
                this.$store.state.class.tres = null;
                this.$store.state.class.cuatro = null; 
                this.$store.state.userLeveluno = 1;
            }
                
            this.$router.push({ name: 'classess'});
            console.log(score, this.$store.state.userLevel);
        }
    }
}
</script>