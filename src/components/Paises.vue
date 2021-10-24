<template>
  <div>
      <div class="full-height" id="banner">
  <b-navbar toggleable="lg" >
      <b-container>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand id="logo" to="/">LOGO</b-navbar-brand>
      </b-container>
        </b-navbar>
        </div>
      <div class="container">
          <div class="row">
              <div class="col-12">
            <input v-model.trim="$v.pais.$model" class="input-destinos" type="text" placeholder="Buscar país" @keyup.enter="getcountry">
            <div class="boton-buscar">
            <button @click="getcountry" :disabled="$v.$invalid"  >Buscar</button>
            </div>
            <div class="spinner text-center">
                <b-spinner v-if="spinner" variant="success"></b-spinner>
            </div>
              </div> 
          </div>
          <div class="row">
                    <div class="col-xl-6">
                     <div class="titulo-pais">
                      <h2>{{info.names.name}}</h2>
                  </div>
                      <div class="imagen--">
                          <img :src="`https://travelbriefing.org/sites/views/default/images/flags/4x3/${image}.svg`" alt="">
                      </div>
                    </div>
                     <div class="col-xl-6" id="colum-2">
                             <div class="row">
                                 <div class="col-xl-6">
                            <div class="info">
                            <i class="bi bi-info-square-fill"></i>
                            <span>Travel advice</span>
                               <p>{{info.advise.UA.advise}}</p>
                               <a :href="info.advise.CA.url">
                               <div class="boton-info">
                            <a :href="info.advise.CA.url">Ver</a>                                         
                            </div>
                               </a>
                            </div>
                            </div>
                            <div class="col-xl-6">
                            <div class="info">
                        <i class="bi bi-chat-fill"></i>
                            <span>Language</span>
                            <p>{{info.language[0].language}}</p>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-xl-6">
                            <div class="info water">
                            <i class="bi bi-droplet-fill"></i>
                            <span>Water</span>
                               <p>Drinking water in {{info.names.name}} is <span id="texto">{{info.water.short}}</span> </p>
                            </div>
                            </div>
                            <div class="col-xl-6">
                            <div class="info water">
                            <i class="bi bi-heart-fill"></i>                                
                            <span>Vaccinations and health</span>
                                <div v-for="Vaccination in Vaccinations" :key="Vaccination.id">
                            <span>{{Vaccination.name}}</span>
                                </div>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-xl-6">
                            <div class="info water">
                            <i class="bi bi-watch"></i>
                            <span>TimeZone</span>
                                {{info.timezone.name}}
                            </div>
                            </div>
                            <div class="col-xl-6">
                            <div class="info water">
                            <i class="bi bi-telephone-fill"></i>
                            <span>Telephone</span>
                            <p>+ {{info.telephone.calling_code}}</p>
                            </div>
                            </div> 
                            </div>
                             <div class="row">
                                 <div class="col-xl-6">
                            <div class="info water mb-4">
                        <i class="bi bi-map-fill"></i>                            
                        <span>Neighbors</span>
                            <div v-for="neigh in neightboor" :key="neigh.id">
                                <span>{{neigh.name}}</span>
                            </div>
                            </div>
                            </div>
                            <div class="col-xl-6">
                            <div class="info water">
                            <i class="bi bi-lightning-fill"></i>
                            <span>Electricity</span>
                            <div v-for="electricity in Electricity " :key="electricity.id">
                                <span>{{electricity}}</span>
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
            Vaccinations:null,
            Electricity:null,
            spinner:false,
            error:false,
            neightboor:true
            
        }
    },
    methods:{
        async getcountry(){
            this.spinner = true
            try{
            let paises = this.pais
            let datos = await axios.get(`https://travelbriefing.org/${paises}?format=json`)
            this.info = datos.data
            this.Vaccinations = datos.data.vaccinations            
            this.Electricity = datos.data.electricity
            this.neightboor = datos.data.neighbors
            this.image = JSON.stringify(datos.data.names.iso2.toLowerCase()).replace(/['"]+/g, '')
            // console.log(error)
            
            }catch(error){
                console.log(error)
            }finally{
                this.spinner = false
            }
           
        },
    },
    
            created() {
            this.getcountry()
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
    color: #ffff;
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
    color: #ffff;
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
a{
    text-decoration: none;
}
.info.water{
    margin-top: 1rem;
}
#logo{
  color: white;
  font-size: 1.2rem;
}
@media screen and (max-width:700px){
    .imagen-- img {
    width: 100%;
}
.titulo-pais{
    text-align: center;
}
.info{
    margin-top: 1rem;
}
#colum-2 {
    margin-top: 2rem;
}
.info{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.info-water{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
}
</style>