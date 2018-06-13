<template>
  <div id="joga">
      <b-container id="topcontainer" fluid="" >
            <b-row>
              
            <b-col lg="7" offset-lg="1" class="text-right"><h1 >Individualios jogos pamokos</h1>
                <h4> Išlaisvink sielą</h4>
                <b-btn variant="outline-primary" class="text-white" :to="{ name: 'kontaktai' }">Susisiekite..</b-btn>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>
<script>
export default {
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Jogos pamokos',
      // all titles will be injected into this template
      titleTemplate: '%s | MJ Sveikata ir Grožis'
    }
}
</script>
<style scoped>
#joga {
    height: 140vh;
    background-image: url('..\assets\joga_background.jpg');
    background-size: auto;
    background-position:500% 130%;
    
}
#topcontainer {
    height: 100vh;
    /* margin-top: 50vh; */
    padding-top: 30vh;
}
@media (max-width: 940px){
    #joga {
    background-position:50% 75%;
}}  

</style>


