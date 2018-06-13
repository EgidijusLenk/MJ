/* eslint-disable */
<template>
  <div id="app">
 
<b-navbar toggleable="md" type="dark" variant="primary" fixed="top" class="py-0">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand :to="{ name: 'home' }">MJ  Sveikata ir Grožis
</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav >
        <b-nav-text><b-nav-item :to="{ name: 'proceduros' }">Veido procedūros</b-nav-item></b-nav-text>
        <b-nav-text><b-nav-item :to="{ name: 'masazai' }" class="text-danger">Kūno procedūros</b-nav-item></b-nav-text>
        <b-nav-text><b-nav-item :to="{ name: 'joga' }">Joga</b-nav-item></b-nav-text>
        <b-nav-text><b-nav-item :to="{ name: 'bioinformacinistyrimas' }">Bioin  formacinis tyrimas</b-nav-item></b-nav-text>
        <b-nav-text><b-nav-item :to="{ name: 'kontaktai' }">Kontaktai</b-nav-item></b-nav-text>
        <!-- <b-nav-text><b-nav-item :to="{ name: 'naujienos' }">Naujienos</b-nav-item></b-nav-text> -->
        </b-navbar-nav>
        <!-- <b-navbar-nav class="ml-auto">
      <b-nav-item right href="tel:+370 630 29891" text-variant="white" class="text-white"><icon name="phone-square" scale="1.5"></icon> +370 630 29891</b-nav-item>
    </b-navbar-nav> -->
  </b-collapse>
</b-navbar> 
   
   
   
<router-view/>
<b-jumbotron  class="text-light bg-dark text-left mb-0 rounded-0">
    <b-container >
        <b-row no-gutters="">
            <b-col md="4" ><h5 >Apie</h5><p class="text-muted"> Dirbame kiekvieną dieną, siekdamos padėti žmonėms pagerinti gyvenimo kokybę tiek fiziniu, tiek dvasiniu požiūriu.
              
             
              </P></b-col>
            <b-col md="4" offset-md="1" offset-sm="0"><h5>Paslaugos</h5>
            <ul>
              <li><b-link :to="{ name: 'proceduros' }" class="text-light">Veido procedūros</b-link></li>
              <li><b-link :to="{ name: 'masazai' }" class="text-light">Kūno procedūros</b-link></li>
              <li><b-link :to="{ name: 'joga' }" class="text-light">Individualios jogos pamokos</b-link></li>
              <li><b-link :to="{ name: 'bioinformacinistyrimas' }" class="text-light">Bioinformacinis tyrimas</b-link></li>
            </ul>
            </b-col>
            <b-col sm="3" ><h5>Kontaktai</h5>
            <ul>
            <li><b-link class="text-light" href="https://www.facebook.com/MJsveikatairgrozis/" target="_blank"><icon name="brands/facebook-square" scale="1.2"></icon> Facebook </b-link> 
             <div class="fb-like" data-href="https://www.facebook.com/MJsveikatairgrozis/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"  	
            ></div>
            </li>
            <li><b-link class="text-light" href="https://www.instagram.com/mj_sveikata_ir_grozis" target="_blank"><icon name="brands/instagram" scale="1.2"></icon> Instagram</b-link></li>
            <li><b-link class="text-light" href="tel:+370 630 29891"><icon name="phone-square" scale="1.2"></icon> +370 630 29891 <span class="text-muted">Justina</span></b-link></li>
            <li><b-link class="text-light" href="tel:+370 611 42413"><icon name="phone-square" scale="1.2"></icon> +370 611 42413 <span class="text-muted" style="padding-left:2px"> Milda</span></b-link></li>
            <li><b-link class="text-light" href=""><icon style="padding-left:3px" name="map-marker" scale="1.2"></icon> Varpo gatvė, Šiauliai</b-link></li>
            </ul>
            
            
            </b-col>
        </b-row>
    </b-container>
</b-jumbotron> 
</div>
</template>

<script>


export default {
  name: 'App',
  components:  {},
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'MJ Sveikata ir Grožis',
      // all titles will be injected into this template
      titleTemplate: null
    }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin');
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
#app {
font-family: 'Libre Franklin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a7ef1;



}

ul {
  list-style-type: none;
  padding-left: 0;
}
svg {

  position: relative;
  top: 4px;
}
a:hover {
  text-decoration-line: initial;
}


/* #mainjumbo {
	background-image: url(..\assets\mainjumbo.jpg);


} */
</style>
