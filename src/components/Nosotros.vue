<template>
  <div>
      <section class="nosotros">
          <div class="elipse-top">
              <img src="../assets/Elipse.png" alt="3">
          </div>
          <div class="elipse-down">
              <img src="../assets/Elipse.png" alt="3">
          </div>
             <div class="elipse-nosotros">
              <img src="../assets/Elipse.png" alt="3">
          </div>
          <div class="elipse-nosotros-down">
              <img src="../assets/Elipse.png" alt="3">
          </div>
           <div class="elipse-destinos-up">
              <img src="../assets/Elipse.png" alt="3">
          </div>
           <div class="elipse-destinos-down">
              <img src="../assets/Elipse.png" alt="3">
          </div>
      <div class="container">
          <div class="row">
              <div class="col-xl-6">
                  <div class="texto-nosotros">
                      <h2>{{titulo}}</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur dunt, unc malesuada.</p>
                      <p>Nos dedicamos a:</p>
                  </div>
                  <div class="nosotros-beneficios">
                      <div class="row">
                          <div class="col-xl-6" id="col-la">
                              <i class="bi bi-heart-fill"></i>
                              <span class="beneficios-block">corajon</span>
                              <div class="texto-2">
                                <i class="bi bi-person-check-fill"></i>
                            <span class="beneficios-block">corajon</span>
                              </div>
                          </div>
                          <div class="col-xl-6">
                            <i class="bi bi-hand-thumbs-up-fill"></i>                              
                            <span>corajon</span>
                             <div class="texto-2">
                                <i class="bi bi-hammer"></i>
                                <span class="beneficios-block">corajon</span>
                              </div>
                          </div>
                      </div>
                      
              </div>
                  </div>                  
              <div class="col-xl-6">
                  <div class="imagen-horizonte">
                      <img src="../assets/hombre-horizonte.png" alt="horizonte.png">
                  </div>
                <div class="tarjeta">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="texto-tarjeta">
                                <h2>Satisfacción</h2>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis orci at congue condimentum</span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="estrellas">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                            <div class="smile-face">
                                <i class="bi bi-emoji-smile-fill"></i>
                            </div>
                        </div>
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
    data() {
        return {
            titulo:'Nosotros'
        }
    },
}
</script>

<style>
.elipse-top{
    position: absolute;
    top: -18rem;
    left: -17rem;
    width: 43rem;
}
.nosotros{
    height: 40rem;
}
.imagen-horizonte{
    margin: auto;
    text-align: center;
}
.imagen-horizonte img{
    width:30rem;
}
.texto-tarjeta{
    width: 13rem;
    color: white;
}
.tarjeta{
    background: #334756;
    width: 25rem;
    margin: auto;
    padding: 1rem;
    height: 10rem;
    box-shadow: 0 10px 30px #000000;
    transform: translateY(-4.5rem);
    border-radius: 0.9rem;
}
.texto-tarjeta h2{
        font-size: 1rem;
}
.texto-tarjeta span{
    font-size: 0.8rem;
}
.smile-face{
    text-align: center;
    font-size: 3rem;
    margin: auto;
}
.smile-face i{
    color: #FF4C29;
}
.estrellas{
    text-align: center;
}
.estrellas i{
    color: #FFF700;
    font-size: 0.8rem;
}
.texto-nosotros{
    margin-top: 7rem;
    color: white;
}
#col-la{
    width: 23%;
    border-right: 2px solid #FF4C29;
}
.nosotros-beneficios i{
    color: #FF4C29;
    font-size:1.3rem;
}
.nosotros span{
    color: white;
}
.elipse-down{
width: 13rem;
    position: absolute;
    top: 22rem;
    left: 58rem;
}
.elipse-down img{
    width: 20rem;
}
.elipse-nosotros{
    position: absolute;
}
.elipse-nosotros{
        top: 38rem;
    left: -6rem;
}
.elipse-nosotros img{
    width: 20rem;
}
.elipse-nosotros-down{
    position: absolute;
    left: 64rem;
    top: 62rem;
}
.elipse-nosotros-down img{
    width: 20rem;
}
.elipse-destinos-up{
    position:absolute;
    top: 81rem;
    left: -5rem
}
.elipse-destinos-up img{
    width: 20rem;
}
.elipse-destinos-down{
    position: absolute;
    top: 106rem;
    left: 64rem;
}
.elipse-destinos-down img{
    width: 20rem;
}
</style>