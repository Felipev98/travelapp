<template>
  <div>
<div class="full-height" id="banner">
  <b-navbar toggleable="lg" class="navbar-dark" >
      <b-container>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand id="logo" href="#">LOGO</b-navbar-brand>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav >
          <router-link to="/" class="destinos" >Inicio</router-link>
        <b-nav-item href="#Nosotros" >Nosotros</b-nav-item>
    <router-link to="/paises" class="destinos" >Destinos</router-link>
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
.destinos{
  text-decoration: none;
  padding-top: 0.5rem;
  color: #ffff;
}
.destinos:last-child{
  color: #FF4C29;
  font-weight: 700;

}

</style>