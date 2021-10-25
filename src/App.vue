<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animate__animated  animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
}
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans");
@import "./assets/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
body{
  background-color:#082032;
}
html{
  scroll-behavior: smooth;
}
</style>
