<template>
  <div>
      <section class="main2" id="Destinos">
          <div class="container">
              <div class="row">
                  <div class="col-xl-6">
                      <div class="texto-destinos">
                          <h2>{{titulo1}}</h2>
                          <span>Conoce las características y seguridad de tu próxima aventura por el mundo</span>         
                      </div>
                      <div class="boton">
                      <router-link to="/paises" ><button>{{boton}}</button></router-link>
                      </div>
                  </div>
                <div class="col-xl-6">
                    <div class="row">
                        <div class="col-xl-6">
                            <div class="tarjeta-destino">
                                <div class="numero">
                                    <h2>1</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Elige tu próximo destino </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Elige cualquier lugar del mundo</span>
                                </div>
                            </div>
                        </div>
                         <div class="col-xl-6">
                            <div class="tarjeta-destino">
                                <div class="numero">
                                    <h2>2</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Consulta la seguridad del sitio en nuestra app</span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Consulta en nuestra app todo lo que necesitas saber sobre tu próxima aventura</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-xl-6">
                            <div class="tarjeta-destino2">
                                <div class="numero">
                                    <h2>3</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Elige una fecha </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Elige la mejor época para viajar </span>
                                </div>
                            </div>
                        </div>
                         <div class="col-xl-6">
                            <div class="tarjeta-destino2">
                                <div class="numero">
                                    <h2>4</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Disfruta </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Y ahora que  has llegado hasta aquí disfruta de tu aventura lo máximo posible  ¡Te lo mereces!</span>
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
        boton: 'Ver destinos',
        titulo1: 'Destinos',
    }
},
}
</script>

<style>
.main2{
    height: 40rem;
}
.texto-destinos{
    color: white;
    margin-top: 7rem;
}

.tarjeta-destino{
    background: #334756;
    height: 13rem;
    padding: 1rem;
    border-radius: 0.9rem;
    box-shadow: 0px 10px 30px black;
}
::placeholder{
    color: white;
}
.numero h2{
    justify-content: center;
    display: flex;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: #FF4C29;
    border-radius: 50%;
    color: white;
}
.titulo-numero span{
    color: white;
    font-weight: 700;
}
.contenido-numero span{
    color: white;
    font-size: 0.8rem;
}
.tarjeta-destino2{
        background: #334756;
    height: 13rem;
    padding: 1rem;
    border-radius: 0.9rem;
    box-shadow: 0px 10px 30px black;
    margin-top: 2rem;
}
.boton{
        width: 96%;
    text-align: center;
    margin-top: 1rem;
}
.boton button{
    border-radius: 1.5rem;
    padding: 0.8rem;
    width: 30%;
    background: #FF4C29;
    box-shadow: 0 10px 25px #ff4c29;
    border: none;
    color: #ffff;
    transition: all 0.3s ease-in-out;
}
@media screen and (max-width:700px){
    .texto-destinos{
        text-align: center;
        }
        .texto-destinos h2{
            font-size: 3rem;
            text-align: center;
        }
        .tarjeta-destino{
            text-align: center;
            margin-bottom: 2rem;
            margin-top: 2rem;
        }
        .numero h2{
            margin: auto;
            width: 4rem;
            height: 4rem;
        }
    .tarjeta-destino2{
        text-align: center;
    }
    .boton{
        width: 100%;
    }
    .boton button{
        width: 51%;
    }
    .main2{
        height: 95rem;
    }
}
@media screen and (min-width:701px) and (max-width:1024px){
      .texto-destinos{
      text-align: center;
  }
  .tarjeta-destino{
      width: 75%;
      margin: auto;
      margin-top: 2rem;
      text-align: center;
  }
  .tarjeta-destino2{
      width: 75%;
      margin: auto;
      margin-top: 2rem;
      text-align: center;
  }
  .numero h2{
      margin: auto;
  }
  .main2{
      height: 150vh;
  }

}

</style>