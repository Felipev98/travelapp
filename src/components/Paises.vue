<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-12">
            <input v-model="pais" class="input-destinos" type="text" placeholder="Buscar país">
            <div class="boton-buscar">
            <button @click="getcountry" >Buscar</button>
            </div>
              </div> 
          </div>
          <div class="row">
                    <div class="col-6">
                     <div class="titulo-pais">
                      <h2>{{name}}</h2>
                  </div>
                      <div class="imagen--">
                          <img :src="`https://travelbriefing.org/sites/views/default/images/flags/4x3/${image}.svg`" alt="">
                      </div>
                    </div>
                     <div class="col-6" id="colum-2">
                             <div class="row">
                                 <div class="col-6">
                            <div class="info">
                            <i class="bi bi-info-square"></i>
                            <span>Travel advice</span>
                               <p>{{advise}}</p>
                               <div class="boton-info">
                            <a :href="linkadvise">Ver</a>                                         
                            </div>
                            </div>
                            </div>
                            </div>
              </div>
      </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
data() {
        return {
            pais:'',
            info:null,
            image:null,
            name:null,
            advise:null,
            linkadvise:null
            
        }
    },
    methods:{
        async getcountry(){
            let paises = this.pais
            let datos = await axios.get(`https://travelbriefing.org/${paises}?format=json`)
            console.log(datos)
            this.name = datos.data.names.name
            this.advise = datos.data.advise.UA.advise
            this.linkadvise = datos.data.advise.UA.url
            this.image = JSON.stringify(datos.data.names.iso2.toLowerCase()).replace(/['"]+/g, '')
        }
    }
}
</script>

<style>
.input-destinos{
    display: block;
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    opacity: 81%;
    width: 19rem;
    background: #334756;
        margin: auto;
    width: 80%;
    margin-top: 2rem;
}
.titulo-pais{
    margin-top: 5rem;
}
.titulo-pais h2 {
    color: #ECECEC;
    font-weight: 700;
    font-size: 3.4rem;
}
.burbuja{
    background: red;
    height: 6rem;
    border-radius: 1rem;
    padding: 1rem;
}
#colum-2{
    margin-top:9rem;
}
.info{
    background: #31495B;
    padding: 1rem;
    border-radius: 0.9rem;
}
.info p {
    color: #ffff;
}
.imagen-- img{
    width: 34rem;
}
.boton-info{
    background: #FF4C29;
    text-align: center;
    padding: 1rem;
    border-radius:1.2rem;
        box-shadow: 0 10px 25px #FF4C29;
}
.boton-info a{
    color:#ffff;
    text-decoration:none;
}
.info i{
    color:#FF4C29;
    font-size: 2rem;
    padding-right: 1rem;
}
.info span{
    color:#ffff;
    font-size:1.1rem;
}
.info p{
    margin-top:1rem;
    font-size:0.9rem;
}
.boton-buscar{
    text-align: center;
    margin-top: 1rem;
}
.boton-buscar button{
    width: 10rem;
    padding: 0.5rem;
    border: none;
    background:#FF4C29;
    color:#ffff;
    border-radius:1.2rem;
    box-shadow: 0 10px 25px #FF4C29;
}

</style>