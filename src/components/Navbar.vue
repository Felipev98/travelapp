<template>
  <div>
<div class="full-height" id="banner">
  <b-navbar toggleable="lg" >
      <b-container>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand id="logo" href="#">LOGO</b-navbar-brand>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav >
        <b-nav-item href="#InicioSección">Inicio</b-nav-item>
        <b-nav-item href="#Youtube" >Youtube</b-nav-item>
        <b-nav-item class="destinos" id="destinos">Destinos</b-nav-item>
      </b-navbar-nav>
          </b-collapse>
      </b-container>
        </b-navbar>
        </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
#logo{
  color: white;
  font-size: 1.2rem;
}
.destinos{
    list-style: none;
}
.navbar-light .navbar-nav .nav-link{
  color: white;
}
#destinos a{
  color: #FF4C29;
  font-weight: 700;
}
</style>