st.render = {
	init: function() {
	},
	render: function() {
		st.log("rendering char");

		var r = st.render;
		r.renderReset();
		r.renderOverview();
		//r.renderCharacteristics();	

		$(".st-page").removeClass("st-initial-state");
		$("h1,.st-nav").hide();
	},
	renderReset: function() {
		st.character.$pageft.html("");
	},
	renderOverview: function() {
		st.log("rendering overview");

		var spec = st.character.spec;

		// page
		var $overview = $("<div class=\"st-overview\"></div>");
		
		var $img1 = $("<div class=\"st-bevel-tl\"></div>");
		$overview.append($img1);
		
		// name
		var givenname = st.character.spec.attributes["givenname"];
		var surname = st.character.spec.attributes["surname"];
		
		var h = givenname + " " + surname;
		$elm = $("<span class=\"st-overview-name\">" + h + "</span>");
		$overview.append($elm);
		
		// gender
		$elm = ", ";
		$overview.append($elm);

		var gender = st.character.spec.attributes["gender"];
		var h = gender;
		$elm = $("<span class=\"st-overview-age\">Gender: " + h + "</span>");
		$overview.append($elm);
		
		// age
		$elm = ", ";
		$overview.append($elm);

		var age = st.character.spec.attributes["age"];
		var h = age;
		$elm = $("<span class=\"st-overview-age\">Age: " + h + "y</span>");
		$overview.append($elm);

		st.character.$pageft.append($overview);
	}
};