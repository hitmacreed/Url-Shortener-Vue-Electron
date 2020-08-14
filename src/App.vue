<template>
  <v-app>
    <v-app-bar app color="dark" dark>
        <v-toolbar-title>Link Shortener</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-flex xs12 sm6 md6 class="search">
 
        </v-flex>
    </v-app-bar>

    <v-main>
        <UrlShortener  />
    </v-main>
  </v-app>
</template>

<script>

import UrlShortener from "../src/components/UrlShortener";

export default {
    name: 'App',
    components: { UrlShortener },

  };
</script>


<style>
.search{
    margin-top: 4%;
}
</style>