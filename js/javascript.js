$( document ).ready(function() {

	var keyword= "Lyon";

    var url = "//api.waqi.info/feed/" + keyword + "/?token=" + aqicnToken;

    $.getJSON(url,function(result){

		if (!result || (result.status!=="ok")) {
			// "Sorry, something wrong happend: "

			return
		}

		if (result.data.length===0) {
			//"Sorry, there is no result for your query!"
			return
		}

        var texte = "";

        try {
            texte += result.data.city.name + " :<br/>";
            texte += "   AQI : " + result.data.aqi + "<br/>";
            texte += "   no2 : " + result.data.iaqi.no2.v + "<br/>";
            //texte += "   h : " + result.data.iaqi.h.v + "<br/>";
            //texte += "   p : " + result.data.iaqi.p.v + "<br/>";
            texte += "   pm10 : " + result.data.iaqi.pm10.v + "<br/>";
            texte += "   t : " + result.data.iaqi.t.v + "<br/>";
            texte += "   wg : " + result.data.iaqi.wg.v + "<br/>";
        } catch{ }


		texte += "<br/>";
        $("#aqi").html(texte);

	});

});
