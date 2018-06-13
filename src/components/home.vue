<template>
<div id="home">
  
<b-jumbotron id="mainjumbo" class="text-md-left rounded-0" header="MJ Sveikatos ir Grožio sprendimai" lead="Palepink Save nepamirštamomis akimirkomis"  header-level="4">
  <b-container fluid class="pl-0">
    <b-row>
      <b-col lg="6" >
    <p class="text-right" id="parag1">
  Veido ir nugaros masažai, individualios jogos pamokos, sveikatos konsultacijos
  - tai tik maža dalis viso to ką gali patirti apsilankęs MJ Sveikatos ir Grožio kabinete.</p>
          <b-btn class="float-right" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn>
          <!-- <a href="pages-landing.html" class="btn btn-link">Sužinok daugiau..  
             <icon name="chevron-right" scale="0.7"></icon>
             </a> -->

    </b-col>
    </b-row>
   
  </b-container>
</b-jumbotron>
<!-- carousel -->


<hr class="my-4">
 <!--         proceduros          -->

<b-container >
  <b-row > 
    <div class="col-md-3">
      <b-card  title-tag="h5" img-fluid  style="margin-top:10px;" title="Veido procedūros" img-src="../assets/36_judesiai.jpg" >
        <p class="card-text"></p>
        <b-btn :to="{ name: 'proceduros' }" variant="primary" class="text-white">Daugiau</b-btn>
      </b-card>
        </div>
    <div class="col-md-3 ">
      <b-card  title-tag="h5"  style="margin-top:10px;"  title="Kūno procedūros" img-src="../assets/dekolte.jpg">
        <p class="card-text "></p>
        <b-btn :to="{ name: 'masazai' }" variant="primary" class="text-white">Daugiau</b-btn>
      </b-card>
        </div>
    <div class="col-md-3">
      <b-card  title-tag="h5" img-fluid  style="margin-top:10px;" title="Individualios jogos pamokos" img-src="../assets/joga.jpeg" >
        <p class="card-text"></p>
        <b-btn :to="{ name: 'joga' }" variant="primary" class="text-white">Daugiau</b-btn>
      </b-card> 
        </div>
        <div class="col-md-3">
      <b-card  title-tag="h5" img-fluid  style="margin-top:10px;" title="Bioinformacinis tyrimas" img-src="../assets/tyrimas.jpeg" >
        <p class="card-text"></p>
        <b-btn :to="{name: 'bioinformacinistyrimas' }" variant="primary" class="text-white">Daugiau</b-btn>
      </b-card>
        </div>
  </b-row>      
</b-container>    
<hr class="my-4">


       
</div>
</template>
<script>
	export default {
    name: 'home',
  }
</script>
<style> #home{
margin-top: 40px;

}
#mainjumbo {
	background-image: url('..\assets\mainjumbo.jpg');
  background-size: 100vw;
  height: 80vh;
min-height: fit-content;
} 


@media (max-width: 940px){
  #mainjumbo {
    background-size: 400%;
  }
}
</style>
