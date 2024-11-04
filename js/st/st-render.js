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
	},
	renderReset: function() {
		st.character.$pageft.html("");
	},
	renderOverview: function() {
		st.log("rendering overview");

		var spec = st.character.spec;

		// page
		var $overview = $("<div class=\"st-overview\"></div>");
		
		// name
		var callsign = st.character.spec.attributes["callsign"];

		$elm = $("<span class=\"st-overview-callsign\">\"" + callsign + "\" </span>");
		$overview.append($elm);

		var givenname = st.character.spec.attributes["givenname"];
		var surname = st.character.spec.attributes["surname"];
		var h = givenname + " " + surname;

		$elm = $("<span class=\"st-overview-name\">" + h + "</span>");
		$overview.append($elm);
		
		// gender
		$elm = ", ";
		$overview.append($elm);
		var gender = st.character.spec.attributes["gender"];
		var h = _.capitalize2(gender);
		$elm = $("<span class=\"st-overview-gender\">Gender-" + h + "</span>");
		$overview.append($elm);
		
		// age
		$elm = ", ";
		$overview.append($elm);
		var age = st.character.spec.attributes["age"];
		var h = age;
		$elm = $("<span class=\"st-overview-age\">Age-" + h + "</span>");
		$overview.append($elm);
		$elm = $("<br/>");
		$overview.append($elm);

		// role
		var role = st.character.spec.attributes["role"];
		var h = _.capitalize2(role);
		$elm = $("<span class=\"st-overview-role\">Role: " + h + "</span>");
		$overview.append($elm);
		$elm = $("<br/>");
		$overview.append($elm);
		
		// skills
		var skills = st.character.spec.skills;
		var keys = _.sortBy(_.keys(skills));
		var skh = [];
		_.each(keys, function(key) {
			skh.push(_.keyToLabel(key) + "-" + skills[key]);
		});

		var h = skh.join(", ");
		$elm = $("<span class=\"st-overview-role\">Skills: " + h + "</span>");
		$overview.append($elm);

		st.character.$pageft.append($overview);
	}
};