/* st-skills.js */

st.skills = {
	"base": {
		"melee-combat": 0,
		"rifle": 0,
		"wheeled-vehicle": 0
	},
	sortSkills: function(skills) {
		var ret = {};
		var keys = _.sortBy(_.keys(skills));
		_.each(keys, function(key) {
			ret[key] = skills[key];
		});
		return ret;
	}
};