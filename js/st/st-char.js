/* st-char.js */

/* 
 * The display models are optimized for the output display, rather than being truncated.
 * Since the order is known in the output, rendering of css is simplified.
 * In another layout, it could be adjusted to use css-specific overrides for position
 * of individual attributes.
 */
st.character = {
	spec: {},
	$pageft: null,
		
	init: function() {
		st.log("init character");
		st.character.$pageft = $(".st-page .st-page-ft");
		st.character.genAttributes();
	},
	genAttributes: function() {
		st.character.spec.attributes = {};
		_.each(st.characteristics, function(x,key) {
			var c = st.math.die(2, 6, 0);
			
			st.character.spec.attributes[key] = c;
		});
		console.log(st.character.spec.attributes);
	},
	modifier: function(c) {
		switch (true) {
			case c===0:
				return -3; 
			case c>=1 && c<=2:
				return -2; 
			case c>=3 && c<=5:
				return -1; 
			case c>=6 && c<=8:
				return 0; 
			case c>=9 && c<=11:
				return 1; 
			case c>=12 && c<=14:
				return 2; 
			case c>=15:
				return 3; 
		}
	}
};