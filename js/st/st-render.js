/* st-render.js */

st.render = {
	init: function() {
	},
	render: function() {
		st.log("rendering char");

		var r = st.render;
		r.renderReset();
		r.renderOverview();
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

		$elm = $("<span class=\"st-overview-callsign\"><b>\"" + callsign + "\" </b></span>");
		$overview.append($elm);

		var givenname = st.character.spec.attributes["givenname"];
		var surname = st.character.spec.attributes["surname"];
		var h = givenname + " " + surname;

		$elm = $("<span class=\"st-overview-name\"><b>" + h + "</b></span>" + "<br/>");
		$overview.append($elm);

		// role
		var role = st.character.spec.attributes["role"];
		var h = _.capitalize2(role);
		$elm = $("<span class=\"st-overview-role\">Role-" + h + "</span>" + "<br/>");
		$overview.append($elm);
		
		// gender
		var gender = st.character.spec.attributes["gender"];
		var h = _.capitalize2(gender);
		$elm = $("<span class=\"st-overview-gender\">Gender-" + h + "</span>" + "<br/>");
		$overview.append($elm);
		
		// age
		var age = st.character.spec.attributes["age"];
		var h = age;
		$elm = $("<span class=\"st-overview-age\">Age-" + h + "</span>" + "<br/><br/>");
		$overview.append($elm);
		
		// characteristics
		var characteristics = st.characteristics;
		var specCharacteristics = st.character.spec.characteristics;
		var keys = _.keys(characteristics);
		var ch = [];
		var len = keys.length;
		_.each(keys, function(key) {
			ch.push(_.keyToLabel(characteristics[key].name) + " (" + _.keyToLabel(key) + ")" + "-" + specCharacteristics[key]);
		});
		
		var h = ch.join("<br/>");
		$elm = $("<span class=\"st-overview-role\"><b>Characteristics:</b><br/>" + h + "</span>" + "<br/><br/>");
		$overview.append($elm);
		
		// skills
		var skills = st.character.spec.skills;
		var keys = _.sortBy(_.keys(skills));
		var skh = [];
		var len = keys.length;
		_.each(keys, function(key) {
			skh.push(_.keyToLabel(key) + "-" + skills[key]);
		});

		var h = skh.join("<br/>");
		$elm = $("<span class=\"st-overview-role\"><b>Skills (" + len + "):</b><br/>" + h + "</span>" + "<br/><br/>");
		$overview.append($elm);

		st.character.$pageft.append($overview);
		
		// notes
		var $notes = $("<div class=\"st-notes\"></div>");
		st.character.$pageft.append($notes);
		
		// reset
		var $reset = $("<div class=\"st-reset\"></div>");
		st.character.$pageft.append($reset);
	}
};