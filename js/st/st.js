/* st.js */

var st = {
	language: "ukrainian",
	gender: null,

	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	init: function() {
		st.math.init();

		var url = $.url();
		var language = url.param('language');
		if (language) {
			st.language = language;
		}
		
		var gender = url.param('gender');
		if (gender) {
			st.gender = gender;
		}

		st.names.init();
	},
	
	init2: function() {
		st.callsigns.init();
	},
	init3: function() {
		st.character.init();
		st.render.init();
		st.render.render();
	}
};

$(document).ready(st.init);
