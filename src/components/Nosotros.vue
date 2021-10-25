<template>
  <div>
      <section class="nosotros" id="Nosotros">
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
                      <p> Somos una agencia dedicada a promover información de turismo receptivo y emisivo desde y hacia todas partes.</p>
                      <p>Nuestros valores:</p>
                  </div>
                  <div class="nosotros-beneficios">
                      <div class="row">
                          <div class="col-xl-6" id="col-la">
                              <i class="bi bi-heart-fill"></i>
                              <span class="beneficios-block">Amor</span>
                              <div class="texto-2">
                                <i class="bi bi-person-check-fill"></i>
                            <span class="beneficios-block">Bondad</span>
                              </div>
                          </div>
                          <div class="col-xl-6">
                              <div class="texto">
                            <i class="bi bi-hand-thumbs-up-fill"></i>                              
                            <span>Receptividad</span>
                             <div class="texto-2">
                                <i class="bi bi-hammer"></i>
                                <span class="beneficios-block">Trabajo duro</span>
                              </div>
                              </div>
                          </div>
                      </div>
                      
              </div>
                  </div>                  
              <div class="col-xl-6">
                  <div class="imagen-horizonte">
                      <img src="../assets/hombre-horizonte.png" alt="horizonte.png">
                  </div>
                  <div class="tarjeta-f">
  <div class="tarjeta">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="texto-tarjeta">
                                <h2>Satisfacción</h2>
                                <span>Queremos que siempre conozcas que tan seguro es tu próxima aventura.</span>
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
.nosotros span{
    padding-left: 0.8rem;
}
@media screen and (min-width:701px) and (max-width:1024px){
    .texto-nosotros{
    text-align: center;
  }
  #col-la{
      border-right:none;
      width:100%;
  }
  .nosotros-beneficios{
      text-align: center;
  }
  .nosotros span{
      padding-left: 0.8rem;
  }
  .imagen-horizonte{
      padding-top: 1rem;
  }
  .tarjeta{
      height: 11rem;
  }
  .smile-face{
      text-align: right;
      position: relative;
      top: -7rem;
  }
  .nosotros{
      height: 90vh;
  }
}
@media screen and (max-width:700px){
    .imagen-horizonte img{
  width: 100% ;
}
.tarjeta-f{
  width: 100% ;
}
.tarjeta{
  width: 86% ;
  height: 11rem ; 
}
.smile-face{
  text-align: right;
  position: relative;;
  top: -8rem ;
}
.nosotros{
  height: 114vh;
}
.imagen-banner {
    height: 17.5rem;
    width: 17rem;
}
.circulo{
    width: 280px;
    height: 280px;

}
.text-image span{
    font-size: 0.8rem;
}
.texto-nosotros p{
    font-size: 0.9rem;
}
#col-la{
    width: 100%;
    border-right: none;
    text-align: center;
}
.texto{
    text-align: center;
}
.nosotros span{
    padding-left: 1rem;
}
}

@media screen and (min-width:320px) and (max-width:360px){
.nosotros {
    height: 142vh;
}
.mensaje{
    width: 15rem;
}
}
</style>