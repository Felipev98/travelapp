<template>
  <div>
      <section class="main2">
          <div class="container">
              <div class="row">
                  <div class="col-6">
                      <div class="texto-destinos">
                          <h2>{{titulo1}}</h2>
                          <span>Vivamus et rhoncus est, vel viverra ipsum. Donec vulputate condimentum risus vel viverra. Duis ullamcorper varius purus sit amet interdum. Phasellus placerat metus a urna consequat porta</span>         
                      </div>
                      <div class="boton">
                      <router-link to="/paises" ><button>{{boton}}</button></router-link>
                      </div>
                  </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <div class="tarjeta-destino">
                                <div class="numero">
                                    <h2>1</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Vivamus et rhoncus est, vel . </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Vivamus et rhoncus est, vel viverra ipsum. Donec vulputate condimentum risus vel viverra. Duis </span>
                                </div>
                            </div>
                        </div>
                         <div class="col-6">
                            <div class="tarjeta-destino">
                                <div class="numero">
                                    <h2>2</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Vivamus et rhoncus est, vel . </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Vivamus et rhoncus est, vel viverra ipsum. Donec vulputate condimentum risus vel viverra. Duis </span>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-6">
                            <div class="tarjeta-destino2">
                                <div class="numero">
                                    <h2>3</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Vivamus et rhoncus est, vel . </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Vivamus et rhoncus est, vel viverra ipsum. Donec vulputate condimentum risus vel viverra. Duis </span>
                                </div>
                            </div>
                        </div>
                         <div class="col-6">
                            <div class="tarjeta-destino2">
                                <div class="numero">
                                    <h2>4</h2>
                                </div>
                                <div class="titulo-numero">
                                    <span>Vivamus et rhoncus est, vel . </span>
                                </div>
                                <div class="contenido-numero">
                                    <span>Vivamus et rhoncus est, vel viverra ipsum. Donec vulputate condimentum risus vel viverra. Duis </span>
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

</style>