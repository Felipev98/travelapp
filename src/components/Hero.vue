<template>
  <div>
    <section class="hero">
  <div class="container">
<div class="row">
          <div class="col-xl-6">
              <div class="texto-banner">
            <h2>Conoce tu nuevo <span class="destino-hero">destino</span></h2>
              <p>Descubre las características y ventajas de tu próxima aventura</p>
              </div>
            <a href="#Destinos"><button class="btn btn-primary"  id="boton-hero">Ver destinos</button></a> 
          </div>
                <div class="col-xl-6">
                    <div class="circulo-pequeño">
                        <img src="../assets/calendario.png" alt="calendario">
                    </div>
                    <div class="mensaje">
                        <div class="imagen"></div>
                        <span class="text-imagen">Andrea fernandez</span>
                       <span>¡He conseguido todo lo que necesitaba gracias a esta app! 😍😍😍😍</span>
                    </div>
                    <div class="circulo">
                        <div class="circulo-abajo">
                            <img src="../assets/clock.png" alt="reloj">
                        </div>
                    <div class="imagen-banner">
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>

      </div>      
</template>

<script>
export default {

}
</script>

<style >
.destino-hero{
  font-weight: 800;
  color: #FF4C29;
}
.hero{
  height: 43rem;
}
.margin{
    margin-top: 13rem;
}
.texto-banner h2{
    font-size:3rem;
    color: white;
    font-weight: 700;
    width: 42rem;
}
.texto-banner p{
    color: white;
    opacity: 60%;
    letter-spacing: 2px;
    width: 32rem;
}

.texto-banner{
  margin-top: 14rem;
}
  .circulo{
    width: 400px;
    height:400px;
    background: linear-gradient(#2C394B,#802615);
    border-radius: 50%;
    position: relative;
    margin-left: 8rem;
  }
.imagen-banner{
  background-image: url('../assets/viajera.png');
  height: 25rem;
  width: 25rem;
  background-size: cover;
  background-position: center;
}

.mensaje{
  position: relative;
  padding: 1rem;
background: rgba(255, 255, 255, .7);
-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
  top: 24rem;
  left: -1rem;
  z-index: 99999;
  border-radius: 0.7rem;
  width: 20rem;
}
.circulo-pequeño img{
    width: 1.3rem;
}
div.circulo-pequeño{
  position: relative;
  top: 11rem;
  left: 13rem;
}
.imagen{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url('../assets/persona.jpg');
  background-size: cover;
  background-position: center;
  display: inline-block;
  position:absolute;
  top:-2rem;
  border:1px solid green;
}
.circulo-abajo{
  width: 3rem;
  height: 3rem;
  background: #313747;
  border-radius: 50%;
  position: absolute;
  left: 18rem;
  z-index: 20;
  top: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circulo-abajo img{
    width: 1.3rem;
}
.text-imagen{
  display: block;
  font-size: 0.9rem;
}
.texto-nosotros h2{
  color: #ECECEC;
  font-weight:700;
  font-size: 4.3rem;
}
.texto-destinos h2{
  font-size: 4.3rem;
  font-weight: 700;
  color: #ECECEC;
}
/* Media Queries */
@media screen and (min-width:701px) and (max-width:1024px){
.mensaje {
    top: 13rem;
    left: 10rem;
}
div.circulo-pequeño {
    top: 2rem;
    left: 17rem;
}
  .circulo-abajo{
    top: 22rem;
  }
  .elipse-down{
    display: none;
  }
  .elipse-nosotros-down{
    display: none;
  }
  .elipse-destinos-down{
    display: none;
  }
  .texto-banner{
    margin-top: 6rem;
  }
  .hero{
    height: 90vh;
  }
  .elipse-top{
    z-index: -1;
  }
  .navbar-nav{
    background-color: #FF4C29;
    padding: 0.8rem;
  }
  a.destinos{
    color: #ffff !important;
    font-weight: 400 !important;
  }
  .circulo{
    margin-left: 12rem;
    top: -9rem;
  }
}
@media screen and (max-width:700px){
.elipse-down{
  display: none;
}
.hero{
  height: 100vh;
}
.elipse-nosotros-down{
  display: none;
}
.elipse-destinos-down{
  display: none;
}
.texto-banner{
  margin-top: 7rem;
}
.boton-hero{
  width: 40%;
}
div.circulo-pequeño{
  left: 15rem;
  top: 4rem;
}
#boton-hero{
  width: 40%;
}
.circulo{
  margin-left: 36px;
  width: 350px;
height: 350px;
top: -9rem;
}
.texto-banner h2{
  width: 100%;
}
.texto-banner p{
  width: 100%;
}
.imagen-banner{
      height: 22rem;
    width: 22rem;
}

.circulo-abajo{
  left: 6rem;
  top: 17rem;
}
.texto-nosotros{
  text-align: center;
  margin-top: 9rem;
}
.texto-nosotros h2{
  font-size: 3rem;
}
.imagen-horizonte{
  padding-top: 3rem;
}
  .elipse-top{
  width: 27rem !important;
  z-index: -1;
}
.imagen-banner{
  margin-top: 2rem;
}
.mensaje {
    top: 10rem;
    left: 2rem;
}
.navbar-nav{
  background-color: #FF4C29;
  padding: 0.8rem;
}
a.destinos{
  color: #ffff !important;
  font-weight: 400 !important;
}
}

@media screen and (min-width:320px) and (max-width:360px){
.texto-banner p{
  font-size: 00.9rem;
}
.texto-banner h2{
  font-size: 2.1rem;
}
#boton-hero{
  width: 54%;
}
.elipse-top{
    display: none;
}
.imagen-banner {
    height: 17.5rem;
    width: 17rem;
}
.circulo {
    width: 280px;
    height: 280px;
}
.circulo-abajo {
    left: 6rem;
    top: 17rem;
}
.mensaje {
    top: 30rem;
}
}
@media screen and (min-width:1024px) and (max-width:1025px){
  .navbar-nav{
    background-color:  inherit !important;
  }
}
</style>