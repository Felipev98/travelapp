<template>
  <div>
      <section class="nosotros">
      <div class="container">
          <div class="row">
              <div class="col-6">
                  <div class="texto-nosotros">
                      <h2>NOSOTROS</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur dunt, unc malesuada.</p>
                      <p>Nos dedicamos a:</p>
                  </div>
              </div>
              <div class="col-6">
                  <div class="imagen-horizonte">
                      <img src="../assets/hombre-horizonte.png" alt="horizonte.png">
                  </div>
                <div class="tarjeta">
                    <div class="row">
                        <div class="col-6">
                            <div class="texto-tarjeta">
                                <h2>Satisfacción</h2>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis orci at congue condimentum</span>
                            </div>
                        </div>
                        <div class="col-6">
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

}
</script>

<style>
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

</style>