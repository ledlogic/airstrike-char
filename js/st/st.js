/* st.js */

/* 
example:
http://localhost:8080/as/?language=german&gender=male&role=pilot
*/

var st = {
	language: "ukrainian",
	gender: null,
	role: null,

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
		
		var role = url.param('role');
		if (role) {
			st.role = role;
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
