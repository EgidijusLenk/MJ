<template>
<div id="masazai">
<b-container fluid>
	<b-row>
		<b-jumbotron id="topjumbotron" class="text-left rounded-0" header-tag="h3" header-level="4" header="Masažai" lead="kūnui ir sielai..." >
			<b-container fluid class="pl-0">
    <b-row>
      <b-col md="8" >
			<p style="max-width:100%" class="topparagraph" >Masažas kaip geros savijautos ir sveikatingumo šaltinis buvo žinomas dar gilioje senovėje. Jau tada žmogaus rankų prisilietimas laikytas turinčiu didelės galios paveikti viso organizmo būseną. Šiandien tikrai žinoma, kad profesionaliai ir efektyviai atliktas masažas atpalaiduoja ir nuramina, suteikia jėgų ir padeda pasijusti geriau. Papildomai panaudojus tam tikras natūralias priemones, tokias kaip medus ar šokoladas, kvapiąsias aromaterapines medžiagas, vaistažoles, akmenis ar bambukus, pasiekiamas dar stipresnis ir gilesnis poveikis. Leiskite sau atsipalaiduoti bei užsimiršti ir mėgaukitės maloniais masažais</p>
      </b-col>
    </b-row>
			</b-container>
		
		</b-jumbotron>
	</b-row>
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		<!-- <b-col cols="8" md="3"><img src="../assets/topjumbotron.jpg"/> -->
			
			<b-col align-self="center">
			<b-img src="../assets/veido_masazas.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Galvos masažas</h3>
			<div><p class="text-justify clearfix">Galvos masažas - tai vienas iš greičiausių būdų ne tik atsipalaiduoti, bet ir pasikrauti teigiamos energijos bei pagerinti savijautą! Masažo metu yra pasitelkiama akupresūra bei mentelė iš nefrito akmens.</p>
				<b-collapse id=collapse1 class="mt-2" >
        <section class="text-justify">
					<h6>Šis masažas skirtas:</h6>
					<ul>
						<li>nuraminti įsitempusią nervų sistemą</li>
						<li>kenčiantiems nuo kraujagyslių susiaurėjimo kakle</li>
						<li>pašalinti emocinę įtampą</li>
						<li>sumažinti galvos skausmus</li>
						<li>sumažinti pleiskanas</li>
						<li>ustiprinti plaukus ir skatinti jų augimą</li>
						<li>norintiems atpalaiduoti kūną, protą ir sielą</li>
					</ul>
					<h6>Šis masažas Jums gali suteikti:</h6>
					<ul>
						<li>geresnį galvos smegenų aprūpinimą krauju bei maistinėmis medžiagomis</li>
						<li>didesnį darbingumą ir geresnę atmintį bei koncentraciją</li>
						<li>kokybiškesnį miegą</li>
						<li>energijos antplūdį ir pakilią nuotaiką</li>
						<li>pagerėjusį plaukų augimą ir sumažėjusį slinkimą</li>
						<li>pagerėjusį kaklo sąnarių judrumą</li>
					</ul>
					<h6>Koks bus efektas?</h6>
					<p>Po galvos masažų kurso pastebėsite pagerėjusią plaukų, galvos odos ir viso kūno būklę. Dėl stimuliuojamos limfotakos ir pagerėjusios kraujotakos iš galvos zonos geriau pasišalins toksinai, todėl pagerės protinė veikla, miegas ir sumažės galvos skausmai.
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
		
			
			<b-col align-self="center">
			<b-img src="../assets/nugaros_masazas.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Atpalaiduojantis nugaros masažas</h3>
			<div><p class="text-justify clearfix">
				Atpalaiduojantis nugaros masažas yra viena populiariausių masažo formų visame pasaulyje. Tai ypatingai švelni, raminanti ir kūno harmoniją suteikianti procedūra, kuri padės Jums pailsėti po dienos darbų, nuimti stresą, įtampą ir pasinerti į teigiamų emocijų sūkurį.
			</p>
				<b-collapse id=collapse3 class="mt-2" >
        <section class="text-justify">
					<h6>Ši procedūra skirta:</h6>
					<ul>
						<li>pašalinti skausmą ir įsitempimą raumenyse</li>
						<li>pašalinti nuolatinį nuovargį, nerimą ir nervingumą</li>
						<li>pagerinti kraujotaką</li>
						<li>suaktyvinti medžiagų apykaitą</li>
						<li>atstatyti nuilsusius raumenis</li>
						<li>pagerinti miego kokybę</li>
						<li>rasti vidinę ramybę</li>
					</ul>
					<h6>Ši procedūra Jums gali suteikti:</h6>
					<ul>
						<li>geresnę koncentraciją</li>
						<li>kokybišką miegą</li>
						<li>gerą darbingumą, nuotaiką bei savijautą</li>
						<li>padidėjusį lankstumą stuburo kaklinėje dalyje</li>
						<li>aktyvesnę smegenų veiklą</li>
					</ul>
					<h6>Koks bus efektas?</h6>
					<p>Apsilankius kartą į savaitę, atpalaiduojančio nugaros masažo seansas garantuoja Jums gerą darbingumą, puikią nuotaiką bei savijautą. Masažas taip pat gerina kraujo cirkuliaciją, medžiagų apykaitą, atstato pavargusius raumenis, todėl puikiai atgaivins po sunkios darbo dienos, padės atsipalaiduoti ir susigrąžinti prarastas dvasines bei fizines jėgas.
					</p>
					
        </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse3  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			</div> 
		
		</b-col>
	</b-row >
</b-container>
<b-container fluid class="mt-4 pt-4" style="max-width:960px">
	<b-row class="p-md-4 pb-2" >
		
			
			<b-col align-self="center">
			<b-img src="../assets/dekolte.jpg" fluid alt="Fluid image" />
		</b-col>
		<b-col cols="12" md="8" class="border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Dekoltė ir pečių juostos masažas</h3>
			<div><p class="text-justify clearfix">Tai priemonė, išsivaduoti nuo įtampos. Ši procedūra rekomenduojama profilaktiškai žmonėms, dirbantiems sėdimą darbą, ypač tiems, kurie ilgesnį laiką dirba kompiuteriu ar kitaip nuolat įtempia ir kenčia skausmą pečių juostos bei kaklo srityje.</p>
				<b-collapse id=collapse1 class="mt-2" >
        <section class="text-justify">
					<h6>Ši procedūra skirta:</h6>
					<ul>
						<li>pašalinti įtampą pečių juostos srityje</li>
						<li>pagerinti kaklo slankstelių lankstumą</li>
						<li>sumažinti galvos skausmus</li>
						<li>stiprinti kapiliarus dekoltė srityje</li>
						<li>pagerinti kraujotaką ir limfos nutekėjimą</li>
						<li>sumažinti raukšles kaklo ir dekoltė srityje</li>
					</ul>
						<h6>Ši procedūra Jums gali suteikti:</h6>
					<ul>
						
						<li> greitą atsipalaidavimą</li>
						<li>padidėjusią koncentraciją ir darbingumą</li>
						<li>pagerėjusią nuotaiką ir emocinę būklę</li>
						<li>atjaunėjusią kaklo bei dekoltė sritis</li>
						<li>pagerėjusį smegenų aprūpinimą deguonimi ir maistinėmis medžiagomis</li>
						<li>sumažėjęs druskų kaupimasis</li>
						<li>pagerėjusią miego kokybę</li>
					</ul>
					<h6>Koks bus efektas?</h6>
					<p>Po pečių juostos ir dekoltė procedūros kurso pajusite ne tik fizinį, bet ir dvasinį pagerėjimą. Suaktyvėjusi kraujotaka ir limfos sistema pagerins koncentraciją ir darbingumą, kadangi smegenys bus geriau aprūpinamos deguonimi ir maistinėmis medžiagomis. Bei galėsite džiaugtis atjaunėjusia dekoltė bei kaklo sritimi.
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
			<b-col align-self="center">
			<b-img src="../assets/nugaros_guasha.jpg" fluid alt="Fluid image" />
		</b-col>
	<b-col cols="12" md="8" class="border-left border-primary text-md-left pt-2 border-bottom" >
			<h3>Nugaros Gua sha</h3>
			<div><p class="text-justify clearfix">„Nugaros Gua sha“ masažas veikia visą organizmą, normalizuoja vidaus organų tarpusavio veiklą, sustiprina apytakos ir šalinimo procesus. Šis masažas užima svarbią vietą sveiko gyvenimo būdo ir susirgimų profilaktikos sistemoje. Puikiai tinka atletams kadangi raumenys po šio masažo yra geriau aprūpinami deguonimi ir maistinėmis medžiagomis.</p>
				<b-collapse id=collapse4 class="mt-2" >
        <section class="text-justify">
					<h6>Ši procedūra skirta:</h6>
					<ul>
						<li>organizmo subalansavimui</li>
						<li>pašalinti skausmą ir sustingimą pečių ir kaklo raumenyne</li>
						<li>pagerinti miego kokyb</li>
						<li>normalizuoti riebalų išsiskyrimą ir tonizuoti</li>
						<li>sumažinti arba pašalinti skausmą širdies plote</li>
						<li>pašalinti nuovargį ir silpnumą</li>
						<li>pagerinti kraujotaką audiniuose</li>
						<li>profilaktikai nuo tokių susirgimų kaip: bronchitas, astma ir dusulys</li>
						<li>pašalinti pasikartojančius galvos skausmus</li>
						<li>atkurti odos rūgščių ir šarmo pusiausvyrą</li>
					</ul>
					<h6>Ši procedūra Jums gali suteikti:</h6>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<h6>Koks bus efektas?</h6>
					<p>„Nugaros Gua sha“ yra skirta kompleksiniam organizmo valymui, toksinų šalinimui ir kraujotakos sistemos stimuliavimui. Todėl atlikus „Nugaros Gua sha“ masažų kursą pasijausite energingas, žvalus ir darbingas. Atsikratysite streso, įtampos ir pagerės miego kokybė.
					</p>
        </section>
      </b-collapse>
				 <div class="text-right mb-2">
					 <b-btn v-b-toggle.collapse4  class=" mt-1 mr-1" variant="outline-primary">Daugiau</b-btn>
					 <b-btn  class=" mt-1" variant="outline-primary" :to="{ name: 'kontaktai' }">Susisiekite</b-btn> </div>
			
			</div> 
		
		</b-col>
	</b-row >
</b-container>
</div>
</template>

<script>
	export default {
		metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Kūno procedūros',
      // all titles will be injected into this template
      titleTemplate: '%s | MJ Sveikata ir Grožis'
    }
	}
</script>
<style scoped>
ul {
	list-style-type: disc;
	list-style-position: inside;
}
#masazai {

  margin-top: 40px;
}
#topjumbotron { 
	background-image: url(..\assets\topjumbotron2.jpg);
	background-size: cover;
}
.topparagraph {position: relative;
z-index: 2;
 }
 @media (max-width: 767px){
/* .topparagraph::before {
  content: "";
  background-color: rgb(207, 235, 243);
	opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;

} */
#topjumbotron {background-size: 300%;}

  }
</style>

