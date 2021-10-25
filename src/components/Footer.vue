<template>
  <div>
      <section class="footer">
          <div class="container">
          <div class="row">
              <div class="col-xl-3">
                  <div class="logo">
                      <h1>LOGO</h1>
                  </div>
              </div>
              <div class="col-xl-3">
                  <div class="logo">
                      <h2>SECCIÓN 1</h2>
                      <span class="seccion-footer">sección1</span>
                      <span class="seccion-footer">seccion2</span>
                      <span class="seccion-footer">seccion3</span>
                  </div>
              </div>
              <div class="col-xl-3">
                  <div class="logo">
                      <h2>SECCIÓN 2</h2>
                        <span class="seccion-footer">sección1</span>
                      <span class="seccion-footer">seccion2</span>
                      <span class="seccion-footer">seccion3</span>
                  </div>
              </div>
              <div class="col-xl-3">
                  <div class="logo">
                      <h2>SECCIÓN 3</h2>
                        <span class="seccion-footer">sección1</span>
                      <span class="seccion-footer">seccion2</span>
                      <span class="seccion-footer">seccion3</span>
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
.footer{
    height: 13rem;
    background: #020E1D;
}
.seccion-footer{
    display: block;
    font-size: 0.8rem;
}
.logo{
    margin-top: 4rem;
}
.logo h2{
    font-size: 1rem;
    color: #E6E4E4;
}
.logo h1{
        color: white;
}
.logo span{
    color:#A8A5A5;
}
@media screen and (max-width:700px){
    .footer{
        height: 28rem;
        text-align: center;
    }
    .logo{
        margin-top: 2rem;
    }
    .texto-banner{
        margin-top: 2rem;
    }
}
@media screen and (min-width:701px) and (max-width:1024px){
    .footer{
        height: 29rem;
        text-align: center;
    }
    .logo{
        margin-top: 2rem;
    }
}
</style>