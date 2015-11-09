function formValidation()
{
    var fnavn = document.forms["shirtform"]["fornavn"].value;
    var enavn = document.forms["shirtform"]["etternavn"].value;	
	var mail = document.forms["shirtform"]["mail"].value;
	var telefon = document.forms["shirtform"]["telefon"].value;
	var adresse = document.forms["shirtform"]["adresse"].value;
	var tshirt = document.forms["shirtform"]["t-shirt1"].value;
    if(fnavn.length === 0) {
        alert("Vennligst skriv inn fornavnet ditt");
        return false;
    }
	else if (enavn.length === 0) {
		alert("Vennligst skriv inn etternavnet ditt");
		return false;
	}
	else if (mail.length === 0) {
		alert("Vennligst skriv inn en mail");
		return false;
	}
	else if(telefon.length === 0) {
		alert("Du har ikke skrevet inn et gyldig telefonnummer");
		return false;
	}
	else if(adresse.length === 0) {
		alert("Skriv inn en adresse");
		return false; 
	}
	else if(tshirt.length === 0) {
		alert("Du må skrive inn ID-koden til din T-skjorte")
		return false
	}
	else {
		return true;
	}
	

}
