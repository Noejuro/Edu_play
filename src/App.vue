<template>
  <v-app>
    <v-col align="start" style="height: 100%;" md="12" lg="12" xl="12" cols="12" class="mt-0 pt-0 pb-0 mb-0">
      <v-row justify="center" style="width: 100vw; height: 100%" class="py-0 my-0">
        <router-view></router-view> 
      </v-row>
    </v-col>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  html{
      overflow-y: scroll;
      overflow-x: hidden;
      scroll-behavior: smooth;
      height: 100%;
    }

    body {
      height: 100%;
    }

  .hidscroll {
    overflow-y: scroll;
    overflow-x: hidden
  }
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
    height: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  .buttonLower{
      text-transform: none !important;
  }

  .Bold {
        font-family: 'Work Sans', sans-serif; 
        font-weight:600;
    }

    .Regular {
        font-family: 'Work Sans', sans-serif; 
        font-weight:400;
    }

    .Thin {
        font-family: 'Work Sans', sans-serif; 
        font-weight:300;
    }
</style>
