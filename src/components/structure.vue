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
            <v-card width="550" elevation="3" >
                <v-row justify="center" class="Bold mt-12" style="font-size: 25px; color: #4D4D4D">
                    Inscribirse
                </v-row>
                <v-row justify="center" class="Bold mt-8" style="font-size: 20px; color: #4D4D4D; width: 80%; margin: 0 auto">
                    <v-text-field label="Nombre Completo" dense outlined color="#4C8055"> 
                    </v-text-field>
                </v-row>
                <v-row justify="center" class="Bold mt-2" style="font-size: 20px; color: #4D4D4D; width: 80%; margin: 0 auto">
                    <v-text-field label="Correo electronico" dense outlined color="#4C8055"> 
                    </v-text-field>
                </v-row>
                <v-row justify="center" class="Bold mt-2" style="font-size: 20px; color: #4D4D4D; width: 80%; margin: 0 auto">
                    <v-col class="mt-0 pt-0">
                        <v-row justify="start">
                            <v-text-field label="Contraseña" type="password"  dense outlined color="#4C8055"> 
                            </v-text-field>
                        </v-row>
                        
                    </v-col>
                    <v-col cols="1">
                    </v-col>
                    <v-col class="mt-0 pt-0">
                        <v-row justify="end">
                            <v-text-field label="Confirmar Contraseña" type="password" dense outlined color="#4C8055"> 
                            </v-text-field>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row align="center" style="max-width: 300px; margin: 0 auto;">
                        <v-checkbox v-model="terms" color="#36593C" hide-details></v-checkbox>
                        <span class="pt-5">Acepto las</span><span class="pt-5 pl-1 Bold" style="color: #36593C">políticas de privacidad</span>
                    </v-row>
                <v-row justify="center" class="mt-10 mb-12">
                    <v-btn @click="$router.push({ name: 'test'})" class="buttonLower" x-large="" rounded color="#36593C" style="color: white; font-size: 15px">
                        Registrarse
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