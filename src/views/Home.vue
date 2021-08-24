<template>
<div>
<Navbar/>
<Hero/>
<Nosotros/>
<Destinos/>
<Footer/>
</div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Nosotros from '../components/Nosotros.vue'
import Destinos from '../components/Destinos.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,Hero,Nosotros,Destinos,Footer
  }
}
</script>
