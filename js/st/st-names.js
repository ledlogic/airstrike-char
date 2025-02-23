/* st-names.js */

st.names = {
	ready: false,
	init: function() {
		st.log("st.names.init");
		st.names.female.request();
		st.names.male.request();
		st.names.surnames.request();
	},
	checkReady: function() {
		st.names.ready = st.names.female.ready && st.names.male.ready && st.names.surnames.ready;
		if (st.names.ready) {
			st.init2();
		}
	},
	female: {
		list: [],
		ready: false,
		request: function() {
			var language = st.language;
			
			st.log("st.names.female.request");
			var csv = "data/st-names-female-" + language + ".csv";
			st.log("loading data from csv[" + csv + "]");
			
			Papa.parse(csv, {
				delimiter: ",",
				download: true,
				header: true,
				complete: function(d) {
					st.names.female.response(d);
				},
				encoding: "UTF-8"
			});
		},
		response: function(d, n) {
			st.log("st.names.female.response");
			var data = d.data;
			var list = st.names.female.list;
			for (var i=0; i<data.length; i++) {
				var datum = data[i];
				list[list.length++] = datum;
			}	
			st.log(["st.names.female.list", list]);
			st.names.female.ready = true;
			st.names.checkReady();
		}
	},
	male: {
		list: [],
		ready: false,
		request: function() {
			var language = st.language;

			st.log("st.names.male.request");
			var csv = "data/st-names-male-" + language + ".csv";
			st.log("loading data from csv[" + csv + "]");
			
			Papa.parse(csv, {
				delimiter: ",",
				download: true,
				header: true,
				complete: function(d) {
					st.names.male.response(d);
				},
				encoding: "UTF-8"
			});
		},
		response: function(d, n) {
			st.log("st.names.male.response");
			var data = d.data;
			var list = st.names.male.list;
			for (var i=0; i<data.length; i++) {
				var datum = data[i];
				list[list.length++] = datum;
			}	
			st.log(["st.names.male.list", list]);
			st.names.male.ready = true;
			st.names.checkReady();
		}
	},
	surnames: {
		list: [],
		ready: false,
		request: function() {
			var language = st.language;

			st.log("st.names.surnames.request");
			var csv = "data/st-names-surnames-" + language + ".csv";
			st.log("loading data from csv[" + csv + "]");
			
			Papa.parse(csv, {
				delimiter: ",",
				download: true,
				header: true,
				complete: function(d) {
					st.names.surnames.response(d);
				},
				encoding: "UTF-8"
			});
		},
		response: function(d, n) {
			st.log("st.names.surnames.response");
			var data = d.data;
			var list = st.names.surnames.list;
			for (var i=0; i<data.length; i++) {
				var datum = data[i];
				list[list.length++] = datum;
			}	
			st.log(["st.names.surnames.list", list]);
			st.names.surnames.ready = true;
			st.names.checkReady();
		}
	}
};