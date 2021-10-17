<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-12">
            <input v-model="$v.pais.$model" class="input-destinos" type="text" placeholder="Buscar país">
            <!-- <small v-if="!$v.pais.required">Campo Reque</small> -->
            <div class="boton-buscar">
            <button @click="getcountry" :disabled="$v.$invalid" >Buscar</button>
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
                            <div class="col-6">
                            <div class="info">
                            <i class="bi bi-chat"></i>
                            <span>Language</span>
                            <p>{{language}}</p>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-6">
                            <div class="info water">
                            <i class="bi bi-droplet-fill"></i>
                            <span>Water</span>
                               <p>Drinking water in {{name}} is {{water}}</p>
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="info water">
                                <i class="bi bi-heart"></i>
                                <span>Vaccinations and health</span>
                                <div v-for="Vaccination in Vaccinations" :key="Vaccination.id">
                            <span>{{Vaccination.name}}</span>
                                </div>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-6">
                            <div class="info water">
                            <i class="bi bi-watch"></i>
                            <span>TimeZone</span>
                                {{TimeZone}}
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="info water">
                            <i class="bi bi-telephone-fill"></i>
                            <span>Telephone</span>
                            <p>+ {{Telephone}}</p>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-6">
                            <div class="info water">
                            <i class="bi bi-map"></i>
                            <span>Visa requirements</span>
                               <p>Drinking water in {{name}} is {{water}}</p>
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="info water">
                            <i class="bi bi-lightning-fill"></i>
                            <span>Electricity</span>
                            <div v-for="electricity in Electricity " :key="electricity.id">
                                <!-- <span>{{Electricity[electricity]}}</span> -->
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
import { required } from 'vuelidate/lib/validators'
export default {
data() {
        return {
            pais:'',
            info:null,
            image:null,
            name:null,
            advise:null,
            linkadvise:null,
            language:null,
            water:null,
            Vaccinations:null,
            TimeZone:null,
            Telephone:null,
            Visa:null,
            Electricity:null
            
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
            this.language = datos.data.language[0].language
            this.water = datos.data.water.short
            this.Vaccinations = datos.data.vaccinations
            this.TimeZone = datos.data.timezone.name
            this.Electricity = datos.data.electricity
            this.Telephone = datos.data.telephone.calling_code
            this.image = JSON.stringify(datos.data.names.iso2.toLowerCase()).replace(/['"]+/g, '')
        }
    },
    validations: {
    pais: {
      required,
    },
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
.info.water{
    margin-top: 1rem;
}
</style>