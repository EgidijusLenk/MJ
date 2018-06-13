<template>
<div id="kontaktai">
    <b-container id="kontaktaiContainer">
    <b-row align-h="around">
        <b-col class="border-dark border-right col-md-5  text-right text-muted">
          
          <h2> <b-link class="text-light" href="tel:+370 630 29891"> +370 630 29891 </b-link></h2>
          <h3> Justina</h3>
          <p>Veido ir kūno procedūros <br> Jogos pamokos <br>
           </p>
         
        </b-col>

        <b-col class="border-dark border-left col-md-5  text-left text-muted">
          
          <h2><b-link class="text-light" href="tel:+370 611 42413"> +370 611 42413 </b-link></h2>
           <h3> Milda</h3>
          <p>Bioinformacinis tyrimas <br> </p>
          
        </b-col> 
    </b-row>
    </b-container>

</div>

</template>
<script>
export default {
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Kontaktai',
      // all titles will be injected into this template
      titleTemplate: '%s | MJ Sveikata ir Grožis'
    }
}
</script>
<style scoped>
#kontaktai {
    background-image: url(..\assets\background1.jpeg);
    background-size: cover;
     background-position:left bottom;
}
#kontaktaiContainer {
    padding-top: 10vh;
    min-height: 60vh;
    
}
@media (min-width: 576px){
#kontaktaiContainer {
    min-height: 80vh;
    padding-top: 25vh;
}

}

</style>
