/* st.js */

var st = {
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	init: function() {
		st.math.init();
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
