<template>
  <div id="joga">
      <b-container id="topcontainer" fluid="" >
          <b-row >
               <b-col md="8" offset-md="2" class="text-left"><h1 >Bioinformacinis tyrimas</h1>
                <h4>Įveik savo kūno labirintą</h4>
                <b-btn variant="primary" :to="{ name: 'kontaktai' }">Susisiekite..</b-btn>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>
<script>
export default {
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Bioinformacinis tyrimas',
      // all titles will be injected into this template
      titleTemplate: '%s | MJ Sveikata ir Grožis'
    }
}
</script>
<style scoped>
#joga {
    height: 140vh;
    background-image: url('..\assets\biotyrimas2.jpg');
    background-size: cover;
    
}
#topcontainer {
    height: 100vh;
    /* margin-top: 50vh; */
    padding-top: 30vh;
}
</style>


