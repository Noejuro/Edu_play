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
            <v-card width="90%" elevation="3" class="mb-12" >
                <v-col class="pl-12" align="start">
                    <v-row justify="center" class="Bold mt-12" style="font-size: 25px; color: #4D4D4D">
                        ¡Bienvenido a Edu Play! 
                    </v-row>
                    <v-row justify="center" class="Thin mt-0" style="font-size: 18px; color: #4D4D4D; width: 80%; margin: 0 auto; text-align: center">
                        Que gusto que te nos hayas unido. Para empezar, te haremos el test de Kolb para conocer tu éstilo de aprendizaje y poder maximizar tus aprendizajes 
                    </v-row>
                    <v-row justify="start" class="Bold mt-5" style="font-size: 22px; color: #4D4D4D; width: 90%; margin: 0 auto">
                        Instrucciones
                    </v-row>
                    <v-row justify="center" class="Regular mt-0" style="font-size: 16px; color: #4D4D4D; width: 90%; text-align: left; margin: 0 auto">
                        Lee atentamente las preguntas y por medio de los botones de subir o bajar acomoda las respuestas hasta ordenarlas según creas que te describen mejor, poniendo en primer lugar la respuesta más acertada y en último lugar la menos acertada.
                    </v-row>
                    
                    <v-row justify="start" v-for="(question, inde) in questions" :key="inde" class="Regular mt-5" style="font-size: 16px; color: #4D4D4D; width: 90%; margin: 0 auto">
                        <v-col class="pt-0 mt-0">
                            <v-row justify="start" class="Bold mb-2" style="font-size: 18px; color: #4D4D4D;">
                                {{question.ask}}
                            </v-row>
                            <v-row v-for="(option, index) in question.options" :key="index" style="border: 1px solid #4D4D4D;" class="pa-1 mb-2 pl-3">
                                <v-col>
                                    <v-row>
                                        {{option.text}}
                                    </v-row>
                                </v-col>
                                <v-col align-self="center" cols="auto">
                                    <v-row justify="end" align="center">
                                        <v-col cols="auto" class="pa-0 ma-0">
                                            <v-btn @click="up(index, inde)" fab elevation="0" x-small text icon>
                                                <v-icon  color="green" size="30px" >mdi-arrow-up-bold-circle</v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col cols="auto" class="py-0 my-0">
                                            <v-btn @click="down(index, inde)" fab elevation="0" x-small text icon>
                                                <v-icon  color="red" size="30px" >mdi-arrow-down-bold-circle</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-5 mb-12">
                        <v-btn @click="getKolb" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
                            ¡Conoce tus resultados!
                        </v-btn>
                    </v-row>



                </v-col>
                
            </v-card>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data () {
        return {
            terms: false,
            questions: [
                {
                    ask: "1. Cuando aprendo...",
                    options: [
                        {text: "Me gusta vivir sensaciones", type: "EC"},
                        {text: "Me gusta pensar sobre ideas", type: "OR"},
                        {text: "Me gusta estar haciendo cosas", type: "CA"},
                        {text: "Me gusta observar y escuchar", type: "EA"},
                    ]
                },
                {
                    ask: "2. Aprendo mejor cuando...",
                    options: [
                        {text: "Escucho y observo cuidadosamente", type: "EC"},
                        {text: "Confio en el pensamiento lógico", type: "OR"},
                        {text: "Confío en mi intuición y sentimientos", type: "CA"},
                        {text: "Trabajo duro para lograr hacer las cosas", type: "EA"},
                    ]
                },
                {
                    ask: "3. Cuando estoy aprendiendo...",
                    options: [
                        {text: "Tiendo a usar el razonamiento", type: "EC"},
                        {text: "Soy responsable con lo que hago", type: "OR"},
                        {text: "Soy callado y reservado", type: "CA"},
                        {text: "Tengo fuertes sensaciones y reacciones", type: "EA"},
                    ]
                },
                {
                    ask: "4. Yo aprendo...",
                    options: [
                        {text: "Sintiendo", type: "EC"},
                        {text: "Haciendo", type: "OR"},
                        {text: "Observando", type: "CA"},
                        {text: "Pensando", type: "EA"},
                    ]
                },
                {
                    ask: "5. Cuando aprendo...",
                    options: [
                        {text: "Estoy abierto a nuevas experiencias", type: "EC"},
                        {text: "Observo todos los aspectos del asunto", type: "OR"},
                        {text: "Me gusta analizar las cosas, descomponerlas en sus partes", type: "CA"},
                        {text: "Me gusta probar e intentar hacer las cosas", type: "EA"},
                    ]
                },
                {
                    ask: "6. Cuando estoy aprendiendo...",
                    options: [
                        {text: "Soy una persona observadora", type: "EC"},
                        {text: "Soy una persona activa", type: "OR"},
                        {text: "Soy una persona intuitiva", type: "CA"},
                        {text: "Soy una persona lógica", type: "EA"},
                    ]
                },
                {
                    ask: "7. Yo aprendo mejor de...",
                    options: [
                        {text: "La observación", type: "EC"},
                        {text: "La realación con otras personas", type: "OR"},
                        {text: "Las teorías racionales", type: "CA"},
                        {text: "La oportunidad de probar y practicar", type: "EA"},
                    ]
                },
                {
                    ask: "8. Cuando aprendo...",
                    options: [
                        {text: "Me gusta ver los resultados de mi trabajo", type: "EC"},
                        {text: "Me gustan las ideas y las teorías", type: "OR"},
                        {text: "Me tomo mi tiempo antes de actuar", type: "CA"},
                        {text: "Me siento personalmente involucrado en las cosas", type: "EA"},
                    ]
                },
                {
                    ask: "9. Aprendo mejor cuando...",
                    options: [
                        {text: "Confío en mis observaciones", type: "EC"},
                        {text: "Confío en mis sentimientos", type: "OR"},
                        {text: "Puedo probar por mi cuenta", type: "CA"},
                        {text: "Confío en mis ideas", type: "EA"},
                    ]
                },
                {
                    ask: "10. Cuando estoy aprendiendo...",
                    options: [
                        {text: "Soy una persona reservada", type: "EC"},
                        {text: "Soy una persona receptiva", type: "OR"},
                        {text: "Soy una persona responsable", type: "CA"},
                        {text: "Soy una persona racional", type: "EA"},
                    ]
                },
                {
                    ask: "11. Cuando aprendo...",
                    options: [
                        {text: "Me involucro", type: "EC"},
                        {text: "Me gusta observar", type: "OR"},
                        {text: "Evalúo las cosas", type: "CA"},
                        {text: "Me gusta ser activo", type: "EA"},
                    ]
                },
                {
                    ask: "12. Aprendo mejor cuando...",
                    options: [
                        {text: "Analizo ideas", type: "EC"},
                        {text: "Soy receptivo y abierto", type: "OR"},
                        {text: "Soy cuidadoso", type: "CA"},
                        {text: "Soy práctico", type: "EA"},
                    ]
                }
            ]
        }
    },
    methods: {
        up(index, inde){
            if(index != 0)
                this.questions[inde].options.splice(index-1, 0, this.questions[inde].options.splice(index, 1)[0]);
        },
        down(index, inde){
            this.questions[inde].options.splice(index+1, 0, this.questions[inde].options.splice(index, 1)[0]);
        },
        getKolb() {
            var EC = 0, OR = 0, CA = 0, EA = 0;
            for(var i = 0; i < this.questions.length; i++)
            {
                for(var j = 0; j < this.questions[i].options.length; j++)
                {
                    if(this.questions[i].options[j].type == "EC")
                        EC += 4-j;
                    else if(this.questions[i].options[j].type == "OR")
                        OR += 4-j;
                    else if(this.questions[i].options[j].type == "CA")
                        CA += 4-j;
                    else if(this.questions[i].options[j].type == "EA")
                        EA += 4-j;
                }
            }
            var CAEC = CA - EC;
            var EAOR = EA - OR;
            var estilo = "";
            if(CAEC <= 3 && EAOR <= 5)
                estilo = "Divergente";
            else if(CAEC <= 3 && EAOR > 5)
                estilo = "Adaptador";
            else if(CAEC > 3 && EAOR > 5)
                estilo = "Convergente";
            else if(CAEC > 3 && EAOR <= 5)
                estilo = "Asimilador";
            console.log(EC, OR, CA, EA);
            console.log(CAEC, EAOR);
            console.log(estilo);
        }
    }
}
</script>