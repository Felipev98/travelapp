<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-12">
            <input v-model="pais" class="input-destinos" type="text" placeholder="Buscar país">
            <button @click="getcountry" >Aquí</button>
              </div>
             
          </div>
          <div class="row">
                    <div class="col-6">
                     <div  v-for="infos in info" :key="infos.id">
                  <div class="titulo-pais">
                      <h2>{{infos.full}}</h2>
                    </div>
                  </div>
                      <div class="imagen--">
                          <!-- <img :src="`https://travelbriefing.org/sites/views/default/images/flags/4x3/${prueba}.svg`" alt=""> -->
                      </div>
                    </div>
                     <div class="col-6">
                             <div class="row">
                                 <div class="col-6">
                            <div v-for="infos in info" :key="infos.id">
                               <p>{{infos.name}}</p>
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
            prueba:null
        }
    },
    methods:{
        async getcountry(){
            let paises = this.pais
            let datos = await axios.get(`https://travelbriefing.org/${paises}?format=json`)
            console.log(datos)
            this.info = datos.data
            this.prueba = JSON.stringify(datos.data.names.iso2.toLowerCase()).replace(/['"]+/g, '')
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

</style>