<template>
  <v-app>
    <v-app-bar
      app
      color="#66BB6A"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="BiddingE Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer/>

      <v-btn
        href="https://bidding2.kr"
        target="_blank"
        text
      >
        <span class="mr-2">홈페이지</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <MainView/>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './components/MainView'

export default {
  name: 'App',

  components: {
    MainView
  },

  data: () => ({
    //
  })
}
</script>
