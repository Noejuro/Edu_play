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


                <v-dialog v-model="dialog" persistent max-width="900px">
                    <v-card width="100%">
                        <v-col>
                            <v-row justify="center" class="Bold mt-6" style="font-size: 25px; color: #4D4D4D">
                                Eres estilo {{estilo}}
                            </v-row>
                            <v-row justify="center" class="Regular mt-4" style="font-size: 16px; color: #4D4D4D; width: 90%; text-align: left; margin: 0 auto">
                                {{description}}
                            </v-row>
                            <v-row justify="center" class="Regular mt-2" style="font-size: 16px; color: #4D4D4D; width: 90%; text-align: left; margin: 0 auto">
                                {{caracteristicas}}
                            </v-row>
                            <v-row justify="center" class="Bold mt-5" style="font-size: 14px; color: #4D4D4D; width: 90%; text-align: center; margin: 0 auto">
                                Ahora que conocemos tu éstilo de aprendizaje puedes regresar al inicio y seleccionar un curso, nosotros adaptaremos cualquier curso que tomes de la mejor forma para que aprovechemos tu estilo de aprendizaje {{estilo}} ¡Bienvenido a tu futuro!
                            </v-row>
                            <v-row justify="center" class="mt-10 mb-2">
                                <v-btn @click="$router.push({ name: 'landing'}); dialog = false" class="buttonLower" x-large="" width="200px" rounded color="#36593C" style="color: white; font-size: 15px">
                                    Inicio
                                </v-btn>
                            </v-row>
                        </v-col>
                    </v-card>
                </v-dialog>


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
            estilo: "",
            description: "",
            dialog: false,
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
            if(CAEC <= 3 && EAOR <= 5)
                {
                    this.estilo = "Divergente";
                    this.description = "Se desempeña mejor en cosas concretas (EC) y la observación reflexiva (OR). Su punto más fuerte es la capacidad imaginativa. Se destaca porque tiende a considerar situaciones concretas desde muchas perspectivas. Se califica este estilo como “divergente” porque es una persona que funciona bien en situaciones que exigen producción de ideas (como en la “lluvia de ideas”)."
                    this.caracteristicas = "CARACTERÍSTICAS DEL DIVERGENTE: Kinestésico, aprende con el movimiento. Experimental, reproduce lo aprendido. Flexible, se acomoda hasta lograr aprender. Creativo, tiene propuestas originales. Informal, rompe las normas tradicionales."
                }
            else if(CAEC <= 3 && EAOR > 5)
            {
                this.estilo = "Adaptador";
                this.description = "Se desempeña mejor en la experiencia concreta (EC) y la experimentación activa (EA). Su punto más fuerte reside en hacer cosas e involucrarse en experiencias nuevas. Suele arriesgarse más que las personas de los otros tres estilos de aprendizaje. Se le llama “acomodador” porque se destaca en situaciones donde hay que adaptarse a circunstancias inmediatas específicas. Es pragmático, en el sentido de descartar una teoría sobre lo que hay que hacer, si ésta no se aviene con los “hechos”. El acomodador se siente cómodo con las personas, aunque a veces se impacienta y es “atropellador”.";
                this.caracteristicas = "CARACTERÍSTICAS DEL ACOMODADOR: Intuitivo, anticipa soluciones. Observador, atento a los detalles. Relacionador, enlaza los diversos contenidos. Imaginativo, grafica mentalmente. Dramático, vivencia los contenidos. Emocional, el entorno es determinante.";
            }
                
            else if(CAEC > 3 && EAOR > 5)
            {
                this.estilo = "Convergente";
                this.description = "Su punto más fuerte reside en la aplicación práctica de las ideas. Esta persona se desempeña mejor en las pruebas que requieren una sola respuesta o solución concreta para una pregunta o problema. Organiza sus conocimientos de manera que se pueda concretar en resolver problemas usando razonamiento hipotético deductivo. Estas personas se orientan más a las cosas que a las personas. Tienden a tener menos intereses por la materia física y se orientan a la especialización científica.";
                this.caracteristicas = "CARACTERÍSTICAS DEL CONVERGENTE: Práctico. Transfiere lo aprendido. Se involucra en experiencias nuevas. Entra fácilmente en materia. Hábil para captar. Va a la solución de problemas. Es eficiente en la aplicación de la teoría.";
            }
            else if(CAEC > 3 && EAOR <= 5)
            {
                this.estilo = "Asimilador";
                this.description = "Predomina en esta persona la conceptualización abstracta (CA) y la observación reflexiva (OR). Su punto más fuerte lo tiene en la capacidad de crear modelos teóricos. Se caracteriza por un razonamiento inductivo y poder juntar observaciones dispares en una explicación integral. Se interesa menos por las personas que por los conceptos abstractos, y dentro de éstos prefiere lo teórico a la aplicación práctica. Suele ser un científico o un investigador.";
                this.caracteristicas = "CARACTERÍSTICAS DEL ASIMILADOR: Reflexivo, razona lo aprendido. Analítico (descompone el mensaje en sus elementos constituyentes. Organizado, metódico y sistemático. Estudioso, se concentra en el aprender. Lógico, riguroso en el razonamiento. Racional, sólo considera verdad lo que su razón puede explicar. Secuencial, tiende al razonamiento deductivo.";
            }
            console.log(EC, OR, CA, EA);
            console.log(CAEC, EAOR);
            console.log(this.estilo);
            this.$store.state.userStyle = this.estilo;
            this.dialog = true;
        }
    }
}
</script>