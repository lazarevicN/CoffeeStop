$(document).ready(function(){
    $("#sakrijMeni").hide();
    $(".fa-bars").click(function(){
        $('#sakrijMeni').slideToggle();
    })
    $("#sakrijMeni > ul > li").click(function(){
        $("#sakrijMeni").slideUp();
    })
    $(".tekstZaKafe").hide();
    $(".urediDugmeZaKafe").click(function(){
        $(this).prev().prev().slideToggle();
    })
});
$(document).ready(function(){   slider();  });
function slider(){
    var trenutnaSlika = $("#aboutSlike .trenutnaSlika");
    var sledecaSlika = trenutnaSlika.next().length ? trenutnaSlika.next() : trenutnaSlika.parent().children(":first");
    trenutnaSlika.removeClass("trenutnaSlika");
    sledecaSlika.addClass("trenutnaSlika");
    
    setTimeout(slider, 2000);
}


window.onload = function (){
    document.getElementById("taster").addEventListener("click", proveri);
}

function proveri(){
    
    var validno = true;
    var imeVal = document.getElementById("name").value;
    var proveriIme = /^[A-Z][a-z]{2,20}$/;
    if (imeVal == ""){
        document.getElementById("greskaIme").innerHTML = "You must have a name.";
    }
    else {
        if(proveriIme.test(imeVal)){
            document.getElementById("greskaIme").innerHTML = "";
        }
        else {
            document.getElementById("greskaIme").innerHTML = "Please, write down your right name.";
            validno = false;
        }
    }

    var prezimeVal = document.getElementById("last-name").value;
    var proveriPrezime = /^[A-Z][a-z]{2,25}(\s[A-Z][a-z]{2,25})*$/
    if (prezimeVal == ""){
        document.getElementById("greskaPrezime").innerHTML = "You must have a last name.";
    }
    else {
        if(proveriPrezime.test(prezimeVal)){
            document.getElementById("greskaPrezime").innerHTML = "";
        }
        else {
            document.getElementById("greskaPrezime").innerHTML = "Please, write down your right last name.";
            validno = false;
        }
    }

    var emailVal = document.getElementById("email").value;
    var proveriEmail = /^[\w][\w\d\.\-\_]+\@[a-z]{3,10}(\.[a-z]{2,5})+$/
    if (emailVal == ""){
        document.getElementById("greskaEmail").innerHTML = "You must have an email adress.";
    }
    else {
        if(proveriEmail.test(emailVal)){
            document.getElementById("greskaEmail").innerHTML = "";
        }
        else {
            document.getElementById("greskaEmail").innerHTML = "Please, write down your right email adress.";
            validno = false;
        }
    }

    var ddlVal = document.getElementById("ddl").value;
    if (ddlVal == "0"){
        document.getElementById("greskaDDL").innerHTML = "You must choose which coffee you would like to order.";
        validno = false;
    }
    else {
            document.getElementById("greskaDDL").innerHTML = "";
    }

    var rb = document.getElementsByName("rb");
    var rbVal = "";
    for(var i = 0; i<rb.length; i++){
        if (rb[i].checked){
            rbVal = rb[i].value;
            break;
        }
    }
    if(rbVal == ""){
        document.getElementById("greskaPosiljke").innerHTML = "You must choose type of shipment.";
        validno = false;
    }
    else {
        document.getElementById("greskaPosiljke").innerHTML = "";
    }

    if(validno){
        document.getElementById("izbaciZahvalnicu").innerHTML = "Thank you for your order! You will be expecting confirmation about your order on your email adress.";

    }
    else {
        document.getElementById("izbaciZahvalnicu").innerHTML = "";
    }
}
//Dinamicko generisanje prve liste sa socijalnim mrezama
var nizAdresaZaSocijalneMreze = ["https://twitter.com/?lang=sr","https://www.instagram.com/?hl=sr","https://www.facebook.com/"];
var nizSocijalneMreze = ["fab fa-twitter", "fab fa-instagram", "fab fa-facebook-f"];
var napraviUlElementZaSocijalneMreze = document.createElement("ul");
napraviUlElementZaSocijalneMreze.classList.add("listaSocijalnihMreza")
document.getElementById("socijalneMreze").appendChild(napraviUlElementZaSocijalneMreze);
for(var i=0; i<nizAdresaZaSocijalneMreze.length; i++){
    var napraviIElementZaSocijalneMreze = document.createElement("i");
    napraviIElementZaSocijalneMreze.setAttribute("class", nizSocijalneMreze[i]);

    var napraviAElementZaSocijalneMreze = document.createElement("a");
    napraviAElementZaSocijalneMreze.setAttribute("href", nizAdresaZaSocijalneMreze[i]);
    napraviAElementZaSocijalneMreze.appendChild(napraviIElementZaSocijalneMreze)

    var napraviLiElementZaSocijalneMreze = document.createElement("li");
    napraviLiElementZaSocijalneMreze.appendChild(napraviAElementZaSocijalneMreze);

    napraviUlElementZaSocijalneMreze.appendChild(napraviLiElementZaSocijalneMreze);
}

//Dinamicko generisanje sakrivene dropdown liste
var nizZaLinkove = ["about", "gallery", "ourCoffees", "orderCoffee", "author"];
var nizListeZaMeni = ["About", "Gallery", "Our Coffees", "Order Coffee", "Author"];
var napraviUlElementZaSakriveniDropdown = document.createElement("ul");
document.getElementById("sakrijMeni").appendChild(napraviUlElementZaSakriveniDropdown);
for(var i=0; i<nizZaLinkove.length; i++){
    var napraviAElement = document.createElement("a");
    napraviAElement.setAttribute("href", "#"+nizZaLinkove[i]+"");
    napraviAElement.innerHTML = nizListeZaMeni[i];

    var napraviLiElement = document.createElement("li");
    napraviLiElement.appendChild(napraviAElement);

    napraviUlElementZaSakriveniDropdown.appendChild(napraviLiElement);
}

//Dinamicko generisanje  menija
var napraviUlElement = document.createElement("ul");
napraviUlElement.classList.add("meni")
document.getElementById("drugiDeoZaglavlja").appendChild(napraviUlElement)
for(var i=0; i<nizListeZaMeni.length; i++){
    var napraviAElement = document.createElement("a");
    napraviAElement.setAttribute("href", "#"+nizZaLinkove[i]+"");
    napraviAElement.innerHTML = nizListeZaMeni[i];

    var napraviLiElement = document.createElement("li");
    napraviLiElement.appendChild(napraviAElement);

    napraviUlElement.appendChild(napraviLiElement);
}

//Dinamicko generisanje slika za prvu sekciju BLOK GALLERY

var nizAltZaSlike = ["prvaSlikaGalerije", "drugaSlikaGalerije", "trecaSlikaGalerije", "cetvrtaSlikaGalerije"];
var nizSlikaZaGalerijuUmanjeno = ["slikaZaGaleriju1Umanjena.jpg", "slikaZaGaleriju2Umanjena.jpg", "slikaZaGaleriju3Umanjena.jpg", "slikaZaGaleriju4Umanjena.jpg" ];
var slikaZaGalerijuUmanjeno1 = document.createElement("img");
var slikaZaGalerijuUmanjeno2 = document.createElement("img");
var slikaZaGalerijuUmanjeno3 = document.createElement("img");
var slikaZaGalerijuUmanjeno4 = document.createElement("img");
var slikeZaGaleriju = [slikaZaGalerijuUmanjeno1, slikaZaGalerijuUmanjeno2, slikaZaGalerijuUmanjeno3, slikaZaGalerijuUmanjeno4];
for(var i=0; i<slikeZaGaleriju.length; i++){
    slikeZaGaleriju[i].setAttribute("src", "img/"+nizSlikaZaGalerijuUmanjeno[i]+"");
    slikeZaGaleriju[i].setAttribute("alt", nizAltZaSlike[i]);
}

var nizSlikaZaGalerijuUvelicano1 = ["slikaZaGaleriju1Uvelicano.jpg", "slikaZaGaleriju2Uvelicano.jpg", "slikaZaGaleriju3Uvelicano.jpg", "slikaZaGaleriju4Uvelicano.jpg"];
var prviAElementGalerije = document.createElement("a");
var drugiAElementGalerije = document.createElement("a");
var treciAElementGalerije = document.createElement("a");
var cetvrtiAElementGalerije = document.createElement("a");
var nizAElemenataGalerije = [prviAElementGalerije, drugiAElementGalerije, treciAElementGalerije, cetvrtiAElementGalerije];
for(var i=0; i<nizAElemenataGalerije.length; i++){
    nizAElemenataGalerije[i].setAttribute("href", "img/"+nizSlikaZaGalerijuUvelicano1[i]+"");
    nizAElemenataGalerije[i].setAttribute("data-lightbox", "galerija");
    nizAElemenataGalerije[i].appendChild(slikeZaGaleriju[i]);
}

var prviArtikalZaGaleriju = document.createElement("article");
var drugiArtikalZaGaleriju = document.createElement("article");
var treciArtikalZaGaleriju = document.createElement("article");
var cetvrtiArtikalZaGaleriju = document.createElement("article");
var nizArtikalaZaGaleriju = [prviArtikalZaGaleriju, drugiArtikalZaGaleriju, treciArtikalZaGaleriju, cetvrtiArtikalZaGaleriju];
for(var i=0; i<nizArtikalaZaGaleriju.length; i++){
    nizArtikalaZaGaleriju[i].classList.add("slike");
    nizArtikalaZaGaleriju[i].appendChild(nizAElemenataGalerije[i]);
}
var dohvatiGallery = document.getElementById("gallery");
var prvaSekcijaZaGaleriju = document.createElement("section");
var drugaSekcijaZaGaleriju = document.createElement("section");
var nizSekcijaZaGaleriju = [prvaSekcijaZaGaleriju, drugaSekcijaZaGaleriju];
for(var i=0; i<nizSekcijaZaGaleriju.length; i++){
    nizSekcijaZaGaleriju[i].classList.add("slikeZaGaleriju");
}
for(var i=0; i<nizArtikalaZaGaleriju.length; i++){
    nizSekcijaZaGaleriju[0].appendChild(nizArtikalaZaGaleriju[i]);
}
dohvatiGallery.appendChild(nizSekcijaZaGaleriju[0]);

//Dinamicko generisanje slika za drugu sekciju BLOK GALLERY

var nizSlikaZaGalerijuUmanjeno2 = ["slikaZaGaleriju5Umanjena.jpg", "slikaZaGaleriju6Umanjena.jpg", "slikaZaGaleriju7Umanjena.jpg", "slikaZaGaleriju8Umanjena.jpg" ];
var slikaZaGalerijuUmanjeno5 = document.createElement("img");
var slikaZaGalerijuUmanjeno6 = document.createElement("img");
var slikaZaGalerijuUmanjeno7 = document.createElement("img");
var slikaZaGalerijuUmanjeno8 = document.createElement("img");
var slikeZaGaleriju2 = [slikaZaGalerijuUmanjeno5, slikaZaGalerijuUmanjeno6, slikaZaGalerijuUmanjeno7, slikaZaGalerijuUmanjeno8];
for(var i=0; i<slikeZaGaleriju2.length; i++){
    slikeZaGaleriju2[i].setAttribute("src", "img/"+nizSlikaZaGalerijuUmanjeno2[i]+"");
    slikeZaGaleriju2[i].setAttribute("alt", nizAltZaSlike[i]);
}

var nizSlikaZaGalerijuUvelicano2 = ["slikaZaGaleriju5Uvelicano.jpg", "slikaZaGaleriju6Uvelicano.jpg", "slikaZaGaleriju7Uvelicano.jpg", "slikaZaGaleriju8Uvelicano.jpg"];
var petiAElementGalerije = document.createElement("a");
var sestiAElementGalerije = document.createElement("a");
var sedmiAElementGalerije = document.createElement("a");
var osmiAElementGalerije = document.createElement("a");
var nizAElemenataGalerije2 = [petiAElementGalerije, sestiAElementGalerije, sedmiAElementGalerije, osmiAElementGalerije];
for(var i=0; i<nizAElemenataGalerije2.length; i++){
    nizAElemenataGalerije2[i].setAttribute("href", "img/"+nizSlikaZaGalerijuUvelicano2[i]+"");
    nizAElemenataGalerije2[i].setAttribute("data\-lightbox", "galerija");
    nizAElemenataGalerije2[i].appendChild(slikeZaGaleriju2[i]);
}

var petiArtikalZaGaleriju = document.createElement("article");
var sestiArtikalZaGaleriju = document.createElement("article");
var sedmiArtikalZaGaleriju = document.createElement("article");
var osmiArtikalZaGaleriju = document.createElement("article");
var nizArtikalaZaGaleriju2 = [petiArtikalZaGaleriju, sestiArtikalZaGaleriju, sedmiArtikalZaGaleriju, osmiArtikalZaGaleriju];
for(var i=0; i<nizArtikalaZaGaleriju2.length; i++){
    nizArtikalaZaGaleriju2[i].classList.add("slike");
    nizArtikalaZaGaleriju2[i].appendChild(nizAElemenataGalerije2[i]);
}

for(var i=0; i<nizArtikalaZaGaleriju.length; i++){
    nizSekcijaZaGaleriju[1].appendChild(nizArtikalaZaGaleriju2[i]);
}
dohvatiGallery.appendChild(nizSekcijaZaGaleriju[1]);

//Dinamicko generisanje kafa za BLOK OUR COFFES

var nizKafaZaPrvuSekciju = ["kafa0.png", "kafa1.png", "kafa2.png", "kafa3.png"];
var nizAltZaKafuPrveSekcije = ["prvaKafa", "drugaKafa", "trecaKafa", "cetvrtaKafa"];
var nizImenaKafaZaPrvuSekciju = ["Christmas Blend", "Ethiopia", "Guatemala", "Blend"];
var nizOpisaKafaZaPrvuSekciju = ["Blend of Brazil, Colombia, Guatemala. Box has 200g.", "Containing a sour note, this coffee is characterized as soft, with a floral aroma, spicy and delicate. Box has 200g.", "Gentle, intense acidity, full body and pleasant wine notes. Box has 200g.", "Blend of India, Brazil. Good body and sweet aroma, slightly accentuated acidity. Box has 200g"];
var nizCenaKafaZaPrvuSekciju = ["Price: 4.25&euro;", "Price: 5&euro;", "Price: 5&euro;", "Price: 4&euro;"];
var dohvatiBlokOurCoffees = document.getElementById("ourCoffees");
//Pravljenje artikala za prvu sekciju
var napraviPrvuSekcijuZaKafe = document.createElement("section");
napraviPrvuSekcijuZaKafe.classList.add("prikaziPoReduFlex", "sirina");
var napraviPrviArtikalZaKafe = document.createElement("article");
napraviPrviArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviDrugiArtikalZaKafe = document.createElement("article");
napraviDrugiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviTreciArtikalZaKafe = document.createElement("article");
napraviTreciArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviCetvrtiArtikalZaKafe = document.createElement("article");
napraviCetvrtiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var nizArtikalaZaKafuPrvaSekcija = [napraviPrviArtikalZaKafe, napraviDrugiArtikalZaKafe, napraviTreciArtikalZaKafe, napraviCetvrtiArtikalZaKafe];

//Dinamicko generisanje slika za kafe prve sekcije BLOK OUR COFFES
for(var i=0; i<nizArtikalaZaKafuPrvaSekcija.length; i++){

    var napraviSliku  = document.createElement("img");
    napraviSliku.setAttribute("src", "img/"+nizKafaZaPrvuSekciju[i]+"");
    napraviSliku.setAttribute("alt", nizAltZaKafuPrveSekcije[i]);
    var napraviFigure = document.createElement("figure");
    napraviFigure.classList.add("prikaziPoKoloniFlex");
    napraviFigure.appendChild(napraviSliku);
    var napraviFigcaption = document.createElement("figcaption");
    napraviFigcaption.classList.add("prikaziPoKoloniFlex", "pomeriFigcaption", "sirina");
    var napraviH5 = document.createElement("h5");
    napraviH5.classList.add("povecajH5");
    napraviH5.innerHTML += nizImenaKafaZaPrvuSekciju[i];
    napraviFigcaption.appendChild(napraviH5);
    napraviFigure.appendChild(napraviFigcaption);
    var napraviP = document.createElement("p");
    napraviP.innerHTML += nizOpisaKafaZaPrvuSekciju[i];
    napraviP.classList.add("tekstZaKafe", "visinaPTaga");
    napraviFigcaption.appendChild(napraviP);
    var napraviDrugiP = document.createElement("p");
    napraviDrugiP.innerHTML += nizCenaKafaZaPrvuSekciju[i];
    napraviDrugiP.classList.add("cenaZaKafe");
    napraviFigcaption.appendChild(napraviDrugiP);
    var napraviDugme = document.createElement("input");
    napraviDugme.setAttribute("type", "button");
    napraviDugme.setAttribute("value", "More");
    napraviDugme.setAttribute("class", "urediDugmeZaKafe");
    napraviFigcaption.appendChild(napraviDugme);
    nizArtikalaZaKafuPrvaSekcija[i].appendChild(napraviFigure);

}
napraviPrvuSekcijuZaKafe.appendChild(napraviPrviArtikalZaKafe);
napraviPrvuSekcijuZaKafe.appendChild(napraviDrugiArtikalZaKafe);
napraviPrvuSekcijuZaKafe.appendChild(napraviTreciArtikalZaKafe);
napraviPrvuSekcijuZaKafe.appendChild(napraviCetvrtiArtikalZaKafe);
dohvatiBlokOurCoffees.appendChild(napraviPrvuSekcijuZaKafe);

//Pravljenje artikala za drugu sekciju
var nizKafaZaDruguSekciju = ["kafa4.png", "kafa5.png", "kafa6.png", "kafa7.png"];
var nizAltZaKafuDrugeSekcije = ["petaKafa", "sestaKafa", "sedmaKafa", "osmaKafa"];
var nizImenaKafaZaDruguSekciju = ["Nicaragua", "Kenya", "India", "Black Diamond"];
var nizOpisaKafaZaDruguSekciju = ["It is appreciated for its pronounced acidity, mild flavors and its sweetness. This finely balanced coffee is of exceptional quality. Box has 200g.", "Strong aroma with sharp acidity, citrusy taste of blackberry, medium body. Box has 200g.", "Full body, rich aroma and characteristic mild taste. Its acidity is rarely compared to other coffee. It is sweet, finely balanced and very complex, so it is often added as a base to other apertures. Box has 200g.", "Black diamond is a coffee that suits connoisseurs of good espresso. This type is characterized by chocolate notes, full body, sweetness and a long pleasant finish."];
var nizCenaKafaZaDruguSekciju = ["Price: 6&euro;", "Price: 6.50&euro;", "Price: 5&euro;", "Price: 6.25&euro;"];
var napraviDruguSekcijuZaKafe = document.createElement("section");
napraviDruguSekcijuZaKafe.classList.add("prikaziPoReduFlex", "sirina", "pomeriOdGornjeiDonjeIviceDruguSekcijuZaKafu");
var napraviPetiArtikalZaKafe = document.createElement("article");
napraviPetiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviSestiArtikalZaKafe = document.createElement("article");
napraviSestiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviSedmiArtikalZaKafe = document.createElement("article");
napraviSedmiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var napraviOsmiArtikalZaKafe = document.createElement("article");
napraviOsmiArtikalZaKafe.classList.add("prikaziPoKoloniFlex", "sirinaSlikaKafa", "staviBorduruNaKafu");
var nizArtikalaZaKafuDruguSekcija = [napraviPetiArtikalZaKafe, napraviSestiArtikalZaKafe, napraviSedmiArtikalZaKafe, napraviOsmiArtikalZaKafe];

//Dinamicko generisanje slika za kafe druge sekcije BLOK OUR COFFES

for(var i=0; i<nizArtikalaZaKafuDruguSekcija.length; i++){

    var napraviSliku  = document.createElement("img");
    napraviSliku.setAttribute("src", "img/"+nizKafaZaDruguSekciju[i]+"");
    napraviSliku.setAttribute("alt", nizAltZaKafuDrugeSekcije[i]);
    var napraviFigure = document.createElement("figure");
    napraviFigure.classList.add("prikaziPoKoloniFlex");
    napraviFigure.appendChild(napraviSliku);
    var napraviFigcaption = document.createElement("figcaption");
    napraviFigcaption.classList.add("prikaziPoKoloniFlex", "pomeriFigcaption", "sirina");
    var napraviH5 = document.createElement("h5");
    napraviH5.classList.add("povecajH5");
    napraviH5.innerHTML += nizImenaKafaZaDruguSekciju[i];
    napraviFigcaption.appendChild(napraviH5);
    napraviFigure.appendChild(napraviFigcaption);
    var napraviP = document.createElement("p");
    napraviP.innerHTML += nizOpisaKafaZaDruguSekciju[i];
    napraviP.classList.add("tekstZaKafe", "visinaPTaga");
    napraviFigcaption.appendChild(napraviP);
    var napraviDrugiP = document.createElement("p");
    napraviDrugiP.innerHTML += nizCenaKafaZaDruguSekciju[i];
    napraviDrugiP.classList.add("cenaZaKafe");
    napraviFigcaption.appendChild(napraviDrugiP);
    var napraviDugme = document.createElement("input");
    napraviDugme.setAttribute("type", "button");
    napraviDugme.setAttribute("value", "More");
    napraviDugme.setAttribute("class", "urediDugmeZaKafe");
    napraviFigcaption.appendChild(napraviDugme);
    nizArtikalaZaKafuDruguSekcija[i].appendChild(napraviFigure);

}

napraviDruguSekcijuZaKafe.appendChild(napraviPetiArtikalZaKafe);
napraviDruguSekcijuZaKafe.appendChild(napraviSestiArtikalZaKafe);
napraviDruguSekcijuZaKafe.appendChild(napraviSedmiArtikalZaKafe);
napraviDruguSekcijuZaKafe.appendChild(napraviOsmiArtikalZaKafe);
dohvatiBlokOurCoffees.appendChild(napraviDruguSekcijuZaKafe);


//Dinamicko generisanje optiona za dropdown listu

var DropdownLista = document.getElementById("ddl");
DropdownLista.classList.add("obojiUBelo")
var nizOpcijaKojeSeMoguIzabrati = ["Please choose coffee which you want to order...", "Christmas Blend", "Ethiopia", "Guatemala", "Blend", "Nicaragua", "Kenya", "India", "Black Diamond"];
var nizValueaZaDropownListu = ["0", "christmasBlend", "ethiopia", "guatemala", "blend", "nicaragua", "kenya", "india", "blackDiamond"];
for(var i=0; i<nizValueaZaDropownListu.length; i++){
    var napraviOption = document.createElement("option");
    napraviOption.value = nizValueaZaDropownListu[i];
    napraviOption.innerHTML += nizOpcijaKojeSeMoguIzabrati[i];
    DropdownLista.appendChild(napraviOption);
}

//Dinamicko generisanje lista u futeri
var napraviUlElementZaSocijalneMrezeUFuteru = document.createElement("ul");
document.getElementById("socMrezeFutera").appendChild(napraviUlElementZaSocijalneMrezeUFuteru);
for(var i=0; i<nizAdresaZaSocijalneMreze.length; i++){
    var napraviIElementZaSocijalneMreze = document.createElement("i");
    napraviIElementZaSocijalneMreze.setAttribute("class", nizSocijalneMreze[i]);

    var napraviAElementZaSocijalneMreze = document.createElement("a");
    napraviAElementZaSocijalneMreze.setAttribute("href", nizAdresaZaSocijalneMreze[i]);
    napraviAElementZaSocijalneMreze.appendChild(napraviIElementZaSocijalneMreze)

    var napraviLiElementZaSocijalneMreze = document.createElement("li");
    napraviLiElementZaSocijalneMreze.appendChild(napraviAElementZaSocijalneMreze);

    napraviUlElementZaSocijalneMrezeUFuteru.appendChild(napraviLiElementZaSocijalneMreze);
}

var napraviUlElementZaLokacije = document.createElement("ul");
document.getElementById("lokacija").appendChild(napraviUlElementZaLokacije);
var nizLokacija = ["Koce Kapetana 32, Vracar, Belgrade", "Makenzijeva 81, Cubura, Belgrade", "Vaci St, Budapest, Hungary"];
for(var i=0; i<nizLokacija.length; i++){

    var napraviLiElementZaLokacije = document.createElement("li");
    napraviLiElementZaLokacije.innerHTML += nizLokacija[i];

    napraviUlElementZaLokacije.appendChild(napraviLiElementZaLokacije);
}

var napraviUlElementZaDokumentaciju = document.createElement("ul");
document.getElementById("dokumentacija").appendChild(napraviUlElementZaDokumentaciju);
var nizDokumentacije = ["CSS", "Responsive", "Sitemap", "JS", "About site" ]
var nizDokumentacijeLinkovi = ["css/style.css", "css/queris.css", "sitemap.xml", "js/main.js", "dokumentacija.docx"];
for(var i=0; i<nizDokumentacije.length; i++){

    var napraviAElementZaDokumentaciju = document.createElement("a");
    napraviAElementZaDokumentaciju.setAttribute("href",  nizDokumentacijeLinkovi[i]);
    napraviAElementZaDokumentaciju.setAttribute("target",  "_blank");
    napraviAElementZaDokumentaciju.innerHTML += nizDokumentacije[i];

    var napraviLiElementZaDokumentaciju = document.createElement("li");
    napraviLiElementZaDokumentaciju.appendChild(napraviAElementZaDokumentaciju);


    napraviUlElementZaDokumentaciju.appendChild(napraviLiElementZaDokumentaciju);
}

var napraviUlElementZaKontakte = document.createElement("ul");
document.getElementById("kontakt").appendChild(napraviUlElementZaKontakte);
var nizIkonicaZaKontakte = ["fas fa-phone", "fas fa-inbox"];
var nizKontakta = [" &nbsp;+381 11/705-700", "&nbsp;coffeestop@gmail.com"];
for(var i=0; i<nizIkonicaZaKontakte.length; i++){

    var napraviIElementZaKontakte = document.createElement("i");
    napraviIElementZaKontakte.setAttribute("class", nizIkonicaZaKontakte[i]);
    napraviIElementZaKontakte.innerHTML += nizKontakta[i];

    var napraviLiElementZaKontakte = document.createElement("li");
    napraviLiElementZaKontakte.appendChild(napraviIElementZaKontakte);


    napraviUlElementZaKontakte.appendChild(napraviLiElementZaKontakte);
}

//Dodavanje klasa divovima
document.getElementById("zaglavlje").classList.add("sirina");
document.getElementById("prvaPozadinskaSlika").classList.add("sirina");
document.getElementById("blokUKomeJeForma").classList.add("sirina");
document.getElementById("prviDeoZaglavlja").classList.add("centriraj");
document.getElementById("drugiDeoZaglavlja").classList.add("centriraj");
document.getElementById("about").classList.add("centriraj2");

var headeriH2 = document.getElementsByTagName("h2");
for(var i=0; i<headeriH2.length; i++){
    headeriH2[i].classList.add("pomeriOdGornjeiDonjeIvice");
}
for(var i=1; i<headeriH2.length; i+=2){
    headeriH2[i].classList.add("obojiUBelo");
}
var headeriH3 = document.getElementsByTagName("h3");
for(var i=0; i<headeriH3.length; i++){
    headeriH3[i].classList.add("pomeriOdGornjeiDonjeIvice");
}
var headeriH4 = document.getElementsByTagName("h4");
for(var i = 0; i<headeriH4.length; i++){
    headeriH4[i].classList.add("povecajH4Font");
    headeriH4[i].classList.add("obojiUBelo");
}

document.getElementById("prviDeoZaglavlja").classList.add("prikaziPoReduFlexBetween");
document.getElementById("prviTekst").classList.add("tekst");
document.getElementById("drugiTekst").classList.add("tekst");
document.getElementById("treciTekst").classList.add("tekst");
document.getElementById("cetvrtiTekst").classList.add("tekst");
document.getElementById("tekstOAutoru").classList.add("tekst");
document.getElementById("about").classList.add("prikaziPoKoloniFlex");
document.getElementById("gallery").classList.add("centriraj", "prikaziPoKoloniFlex");
document.getElementById("ourCoffees").classList.add("centriraj", "prikaziPoKoloniFlex");
document.getElementById("orderCoffee").classList.add("centriraj", "prikaziPoKoloniFlex");
document.getElementById("author").classList.add("centriraj", "prikaziPoKoloniFlex");
document.getElementById("izbaciZahvalnicu").classList.add("pomeriOdGornjeiDonjeIvice");
var dohvatiPrviDivKojiBojisUCrno = document.getElementById("about").nextElementSibling;
dohvatiPrviDivKojiBojisUCrno.classList.add("crno");
var dohvatiDrugiDivKojiBojisUCrno = document.getElementById("ourCoffees").nextElementSibling;
dohvatiDrugiDivKojiBojisUCrno.classList.add("crno")
var dohvatiFormu = document.getElementById("forma")
var dohvatiPrvoDeteUFormi = dohvatiFormu.firstChild;
var dohvatiPrviDivUFormi = dohvatiPrvoDeteUFormi.nextElementSibling;
dohvatiPrviDivUFormi.classList.add("prikaziPoReduFlex");
var dohvatiPrvoDeteUBlokuUKomSuInputi = dohvatiPrviDivUFormi.firstChild;
var dohvatiPrviBlokUKomSuInputi = dohvatiPrvoDeteUBlokuUKomSuInputi.nextElementSibling;
dohvatiPrviBlokUKomSuInputi.classList.add("sirinaDivovaZaInpute");
var dohvatiDrugiBlokUkomSuInputi = dohvatiPrviBlokUKomSuInputi.nextElementSibling.classList.add("sirinaDivovaZaInpute");
document.getElementById("ddlIRadioButtoni").classList.add("prikaziPoReduFlex");
document.getElementById("RadioButtoni").classList.add("prikaziPoKoloniFlex");
document.getElementById("RasporediRadioButtone").classList.add("prikaziPoKoloniFlex");
var spanTagovi = document.getElementsByTagName("span");
for(var i = 0; i<spanTagovi.length; i++){
    spanTagovi[i].classList.add("obojiUBelo");
}
var labelTag = document.getElementById("labelRBa").classList.add("obojiUBelo")
var taster = document.getElementById("taster").classList.add("pomeriOdGornjeiDonjeIvice");
document.getElementById("futer").classList.add("crno");
document.getElementById("aboutSlike").classList.add("prikaziPoKoloniFlex");