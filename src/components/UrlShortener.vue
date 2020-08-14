<template>
    <v-card class="card_search" color="dark" dark>
        <v-img height="350" src="@/assets/img/background.jpg">
        </v-img>
        <v-form>
            <v-container>
                <v-layout wrap>

                    <v-flex md12 md>
                        <v-text-field label="URL Shortener " placeholder="URL Shortener Link " v-model="query_string">
                        </v-text-field>
                    </v-flex>

                </v-layout>
                <v-layout wrap>

                    <v-flex v-if="reponseData === null" md12 md>
                       
                    </v-flex>

                    <v-flex v-else md12 md>
                        <v-list color="dark" dark>
                            <v-list-item-group >
                                 <v-list-item >
                                    <v-list-item-content @click="doCopy(reponseData.full_short_link)">
                                        <v-list-item-title v-text="reponseData.full_short_link"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                 <v-list-item >
                                    <v-list-item-content @click="doCopy(reponseData.short_link2)">
                                        <v-list-item-title v-text="reponseData.short_link2"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-flex>

                </v-layout>
                
            </v-container>
        </v-form>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="disabledBtn" :loading="isUpdating" color="blue-grey darken-3" depressed
                @click="urlShortenter">
                <v-icon left>mdi-update</v-icon>
                Shorten URL
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import API_CONFIG from "../config/enviroment";

    export default {

        name: 'UrlShortener',

        data: () => ({
            returnDate: null,
            isUpdating: false,
            disabledBtn: false,
            api: API_CONFIG,
            query_string: null,
            reponseData: null
        }),


        methods: {
            urlShortenter: function () {
                this.isUpdating = true;
                this.disabledBtn = true;
                this.$http.get(`${this.api.API_CONFIG.API_URL}${this.query_string}`)
                    .then(response => {
                        this.reponseData = response.body.result;
                        this.isUpdating = false;
                        this.disabledBtn = false;
                    }, erro => {
                        this.reponseData = null;
                        this.isUpdating = false;
                        this.disabledBtn = false;
                        console.log(erro)
                         alert(erro.body.error)
                    });
            },

            doCopy: function (link) {
                this.$copyText(link).then(function (e) {
                    alert('Copied')
                    console.log(e)
                }, function (e) {
                    alert('Can not copy')
                    console.log(e)
                })
            }
        }

    }
</script>

<style>
    .card_search {
        height: 100%;
    }

    .img_null{
        margin-top: 10%;
    }

</style>