<template>
  <div id="proceduros">
      <b-container id="topcontainer" fluid="" >
          <b-row>
              
            <b-col md="8" offset-md="3" class="text-right"><h1 >Sveikatos ir Grožio procedūros</h1>
                <h4> Puoselėk kūną iš išorės ir vidaus</h4>
                <b-btn variant="outline-primary"  :to="{ name: 'kontaktai' }">Susisiekite..</b-btn>
            </b-col>
            
          </b-row>
      </b-container>
      <b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
			<b-col align-self="center">
			<b-img src="../assets/pilingas_kauke.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Veido valymas ultragarsu</h3>
			<div><p class="text-justify clearfix">Tereikia 2 žingsnių ir Jūsų oda atrodys nepriekaištingai!</p>
				<b-collapse id=collapse1 class="mt-2" >
        <section class="text-justify">
					<ul> 
                        <li>1 žingsnis: <br>
                        <p>ARTISTRY™ Dermasonic prietaisas giliai valo poras pasitelkdamas 30,000 Hz ultragarsines vibracijas ir taip sukuria povandeninius burbuliukus, kurie įsiskverbia giliai į odą ir išvalo inkštirus, makiažo likučius bei nešvarumus. Po šios procedūros pajusite tikrą malonumą!
                        </p>
                        <p>Oda tarsi iš naujo pradės kvėpuoti, atrodys skaistesnė, energingesnė, lygesnė, kadangi ne tik bus išvalytos poros, bet ir pašalintos negyvos odos ląstelės!! Po procedūros kurso pastebėsite, kad sumažėja riebalavimasis, odos jautrumas bei sumažėja poros.
                        </p>
                        </li>
                        <li>2 žingsnis: <br>
                        <p>Derma Ion Galvanic stimuliuoja ir masažuoja odą mikro lygiu, jo pagalba odos priežiūros priemonių ingredientai įsiskverbia giliai į odą ir taip suteikia patį geriausią efektą.
                        </p>
                        </li>
					</ul>
                    <p>Šis procedūros žingsnis padeda kovoti su raukšlėmis, intensyviai pridrėkina veido odą, ji tampa elastingesnė ir stangresnė!
                    </p>
					
					

					
        </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse1  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			</div> 
		
		</b-col>
	</b-row >
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		<!-- <b-col cols="8" md="3"><img src="../assets/topjumbotron.jpg"/> -->
			
			<b-col align-self="center">
			<b-img src="../assets/veido_masazas.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="text-justify border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Pilingas + Kaukė</h3>
			<div>
                <h6>Greita procedūra norintiems:</h6>
                <ul>
                    <li>greitai atnaujinti veido odą</li>
                    <li>suteikti jai švelnumo ir lygumo</li>
                    <li>atgaivinti po saulės vonių, sunkios darbo dienos ar savaitgalio</li>
                    <li>trumpam atsipalaiduoti</li>
                </ul>
				<b-collapse id=collapse2 class="mt-2" >
        <section class="">
            <h6>Po šios procedūros</h6>
            <ul>
                <li>pasijusite žvalesni ir turintys daugiau energijos</li>
                <li>atsiplaiduosite protiškai</li>
                <li>Jūsų veido oda taps lygesnė, švelnesnė ir šviesesnė</li>
                <li>moterims - žymiai lygiau pasidengs makiažas ir jis išliks ilgiau nei įprastai</li>
                <li>vyrams - tai puikus būdas nuraminti veido odą po skutimosi maratonų</li>
            </ul>
            <p>Procedūra tinka: moterims ir merginoms, bei vyrams ir vaikinams</p>
					

					
        </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse2  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			</div> 
		
		</b-col>
	</b-row >
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		
			
			<b-col align-self="center">
			<b-img src="../assets/jaunystes_magija.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="text-justify border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Jaunystės magija</h3>
            <h6>Unikali veido liftingo ir gilaus pridrėkinimo procedūra.</h6>
				<b-collapse id=collapse3 class="mt-2" >
        <section class="text-justify">
            <h6>Ši procedūra skirta mažinti tokius odos senėjimo požymius kaip:</h6>
            <ul>
                <li>raukšlių atsiradimas</li>
                <li>odos pakritimai</li>
                <li>odos elastingumo praradimas</li>
                <li>odos stangrumo praradimas</li>
                <li>išblyškusi odos spalva</li>
                <li>odos dehidratacija</li>
            </ul>
            <h6>Ši procedūra Jums suteiks:</h6>
            <ul>
                <li>geresnes odos regeneracines savybes</li>
                <li>didesnes ląstęlių galimybes įsisavinti maitinamąsias medžiagas</li>
                <li>apsaugą nuo laisvųjų radikalų</li>
                <li>aprūpins odą būtiniausiomis maitinamosiomis medžiagomis</li>
                <li>suteiks odai elastingumo</li>
                <li>pagerins kraujotaką</li>
            </ul>
            <h6>Koks bus efektas?</h6>
            <p>Atlikus „Jaunystės Magijos“ procedūrų kursą, bei tinkamai naudojant kosmetines priemones, Jūsų oda taps pastebimai lygesnė bei elastingesnė. Sumažės akių vokų, bei viso veido odos pakritimai. Taip pat sumažės pagurklis ir veido kontūras taps ryškesnis. Po procedūrų kurso pagerės veido odos kraujotaka, ji bus aprūpinta būtiniausiomis maitinamosiomis medžiagomis, todėl atsigaus odos spalva ir sulėtės tolimesnis odos senėjimo procesas.
            </p>
         </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse3  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			
		
		</b-col>
	</b-row >
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		
			
			<b-col align-self="center">
			<b-img src="../assets/36_judesiai.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="text-justify border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>36 judesiai</h3>
            <h6>Tai plataus poveikio veido odos priežiūros procedūra. Atliekama rankomis, procedūros metu yra veikiamos visos veido dalys ir akupunktūriniai taškai.</h6>
				<b-collapse id=collapse4 class="mt-2" >
        <section class="text-justify">
            <h6>Ši odos priežiūros procedūra mažina tokias odos problemas kaip:</h6>
            <ul>
                <li>papilkėjusi, skaistumą praradusi oda</li>
                <li>išsausėjusi oda</li>
                <li>tamsūs ratilai aplink akis</li>
                <li>pavargusios akys</li>
                <li>odos elastingumo praradimas</li>
                <li>išblyškusi odos spalva</li>
                <li>lengva veido ovalo korekcija</li>
            </ul>
            <h6>Ši procedūra Jums suteiks:</h6>
            <ul>
                <li>geresnes odos regeneracines savybes</li>
                <li>didesnes lastęlių galimybes įsisavinti maitinamąsias medžiagas</li>
                <li>apsaugą nuo laisvųjų radikalų</li>
                <li>aprūpins odą būtiniausiomis maitinamosiomis medžiagomis</li>
                <li>suteiks odai elastingumo</li>
                <li>pagerins kraujotaką</li>
            </ul>
            <h6>Koks bus efektas?</h6>
            <p>Atlikus „36 judesių“ procedūrų kursą, Jūsų oda taps pastebimai lygesnė bei gražesnė. Po procedūrų kurso pajusite, kaip atsigauna Jūsų oda, ją bus malonu liesti, ji taps skaisti ir švytinti. Pamatysite, kad makiažas pasidengia lengviau ir lygiau.

            </p>
         </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse4  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			
		
		</b-col>
	</b-row >
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		
			
			<b-col align-self="center">
			<b-img src="../assets/veido_guasha.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="text-justify border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Veido Gua sha</h3>
            <h6>Gua sha – tai seniausia kiniško masažo rūšis. Veido gua sha, tai kosmetinė, akupresūrinė procedūra skirta visapusiškai veido priežiūrai. Ši procedūra atliekama su specialiomis nefrito akmens mentelėmis dėl to odoje pagerėja apykaitos procesai, pagerinama organų veikla, geriau šalinami toksinai.</h6>
				<b-collapse id=collapse5 class="mt-2" >
        <section class="text-justify">
            <h6>Ši procedūra sprendžia šias veido odos problemas:</h6>
            <ul> 
                <li>valo užsikimšusias poras</li>
                <li>gerina sulėtėjusias odos regeneracines savybes</li>
                <li>pagerina limfos ir kraujo mikrocirkuliacijas, dėl to sumažėja patinimai, odos spalva tampa tolygi ir skaisti, padidėja antioksidacinė apsauga</li>
                <li>gerina veido raumenų inervaciją</li>
                <li>tinka kuperozinei odai – procedūra stiprina kapiliarų sieneles</li>
                <li>reguliuojamas drėgmės lygis</li>
                <li>mažina pigmentines dėmes ir randelius (likusius nuo spuogų)</li>
                <li>palaiko sveiką odos, bei viso organizmo būklę</li>
            </ul>
            <h6>Ši procedūra jums suteiks:</h6>
            <ul>
                <li>šviesesnę, lygesnę, mažiau raukšlelių ir kapiliarų išvagotą odą</li>
                <li>švelnesnę ir drėgnesnę odą</li>
                <li>mažesnį bėrimą spuogais</li>
                <li>palengvėjimą nuo galvos skausmo</li>
                <li>atsipalaidavimą nuo streso</li>
                <li>atsparesnį imunitetą</li>
                <li>subalansuotą vidaus organų veiklą</li>
            </ul>
            <h6>Koks bus efektas?</h6>
            <p>Atlikus “Veido Gua sha” procedūrų kursą, pajusite bendrą savijautos pagerėjimą. Turėsite daugiau energijos, atsikratysite streso ir įtampos, pagerės miego kokybė. Be viso to galėsite džiaugtis skaistesne, minkštesne ir lygesne oda!
            </p>
         </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse5  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			
		
		</b-col>
	</b-row >
</b-container>
<parallax fixed containerClass='Masthead__image' speedFactor='0.5'>
    <img src="../assets/background.jpg" alt="very cool bg">
  </parallax>
  </div>
</template>
<script>
import Parallax from 'vue-parallaxy'
export default {
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Veido procedūros',
      // all titles will be injected into this template
      titleTemplate: '%s | MJ Sveikata ir Grožis'
    },
    components: {
      Parallax
    }
}
</script>
<style scoped>
ul {
	list-style-type: disc;
	list-style-position: inside;
}
#proceduros {
    height: 140vh;
    /* background-image: url('..\assets\konsultacijos1.jpeg'); */
    background-size: auto;
    
    height: fit-content;
    
}
#topcontainer {
    height: 60vh;
    /* margin-top: 50vh; */
    padding-top: 25vh;
}
@media (max-width: 940px){
    #proceduros {
    background-position:50% 75%;
}}
</style>


