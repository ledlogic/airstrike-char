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
		
		st.character.spec.attributes = {};
		st.character.spec.characteristics = {};

		st.character.genCharacteristics();
		st.character.getGender();
		st.character.genAttributes();
		st.character.genRole();
		st.character.genSkills();
		st.character.genTrait();
		st.character.genAppearance();
	},
	genCharacteristics: function() {
		_.each(st.characteristics, function(x, key) {
			var c = st.math.die(2, 6, 0);
			st.character.spec.characteristics[key] = c;
		});
	},
	getGender: function() {
		var gender = st.gender;
		if (!gender) {
			gender = st.genders[st.math.dieArray(st.genders)];
		}
		st.character.spec.attributes["gender"] = gender;
	},
	genAttributes: function() {
		var gender = st.gender;
		var sel = (gender == "nonbinary" ? st.gender[Math.round(Math.random())] : gender);
		var givennamelist = st.names[sel].list;
		var givenname = givennamelist[st.math.dieArray(givennamelist)].name + "";
		
		var regex = /(.*)\s\((.*)\)/;
		var groups = givenname.match(regex);
		if (groups && groups.length) {
			var ukname = groups[1];
			var engname = groups[2];
			var bracketregex = /.*(\s\[.*\]).*/;
			var groups2 = engname.match(bracketregex);
			if (groups2 && groups2.length) {
				engname = engname.replace(groups2[1], "");
			}
			givenname = engname;
			if (ukname) {
				givenname += " (" + ukname + ")";
			}
		}
		st.character.spec.attributes["givenname"] = givenname;

		var surname = st.names.surnames.list[st.math.dieArray(st.names.surnames.list)].surname + "";
		st.character.spec.attributes["surname"] = surname;
		
		var callsign = st.callsigns.list[st.math.dieArray(st.callsigns.list)].callsign + "";
		st.character.spec.attributes["callsign"] = callsign;

		var age = st.math.die(1, 6, 17);
		st.character.spec.attributes["age"] = age;

		st.character.spec.attributes["rank"] = 1;
		console.log(st.character.spec.attributes);
	},
	genRole: function() {
		var roles = _.keys(st.roles);
		var role = roles[st.math.dieArray(roles)];
		st.character.spec.attributes["role"] = role;

		console.log(st.character.spec.attributes);
	},
	genSkills: function() {
		var role = st.character.spec.attributes["role"];

		// role skill
		var skills = {};
		var roleSkill = st.roles[role].skills.role;
		skills[roleSkill] = 1;
		
		// base skills
		st.log("base skills");
		_.each(st.skills.base, function(element, skill) {
			skills[skill] = element;			
		});
		
		// sort skills
		skills = st.skills.sortSkills(skills);
		st.log("skills[" + _.mapToString(skills) + "]");
		
		// specialist skills
		st.log("specialist skills");
		for (var i=0;i<2;i++) {
			st.log("i[" + i + "]");
			var secondary = st.roles[role].skills.secondary;
			var skill = secondary[st.math.dieArray(secondary)];
			var typeofskill = typeof skills[skill] == "undefined";
			st.log("skill[" + skill + "]");
			st.log("typeofskill[" + typeofskill + "]");
			if (typeofskill
				|| skills[skill] < 1) {
				skills[skill] = 1;
			} else {
				i--;
			}
		}
		
		// sort skills
		skills = st.skills.sortSkills(skills);
		st.log("skills[" + _.mapToString(skills) + "]");
		
		// extra skills
		st.log("extra skills");
		for (var i=0;i<2;i++) {
			st.log("i[" + i + "]");
			var secondary = st.roles[role].skills.secondary;
			var skill = secondary[st.math.dieArray(secondary)];
			var typeofskill = typeof skills[skill] == "undefined";
			st.log("skill[" + skill + "]");
			st.log("typeofskill[" + typeofskill + "]");
			if (typeofskill) {
				skills[skill] = 0;
			} else {
				i--;
			}
			st.log("i2[" + i + "]");
		}
		
		// sort skills
		skills = st.skills.sortSkills(skills);
		st.log("skills[" + _.mapToString(skills) + "]");
			
		st.character.spec.skills = skills;
		console.log(st.character.skills);
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
	},
	genTrait: function() {
		var c = st.math.die(2, 6, 0);
		var traits = st.traits;
		var trait = traits[c];
		st.character.spec.trait = trait;
	},
	genAppearance: function() {
		var c = st.math.die(2, 6, 0);
		var appearances = st.appearances;
		var appearance = appearances[c];
		st.character.spec.appearance = appearance;
	}
};