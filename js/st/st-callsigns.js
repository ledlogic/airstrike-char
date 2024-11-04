/* st-callsigns.js */

st.callsigns = {
	ready: false,
	init: function() {
		st.log("st.callsigns.init");
		st.callsigns.request();
	},
	list: [],
	ready: false,

	checkReady: function() {
		if (st.callsigns.ready) {
			st.init3();
		}
	},
	request: function() {
		st.log("st.callsigns.response");
		var csv = "data/st-callsigns.csv";
		st.log("loading data from csv[" + csv + "]");
		
		Papa.parse(csv, {
			delimiter: ",",
			download: true,
			header: true,
			complete: function(d) {
				st.callsigns.response(d);
			},
			encoding: "UTF-8"
		});
	},
	response: function(d, n) {
		st.log("st.callsigns.response");
		var data = d.data;
		var list = st.callsigns.list;
		for (var i=0; i<data.length; i++) {
			var datum = data[i];
			list[list.length++] = datum;
		}	
		st.log(["st.callsigns.list", list]);
		st.callsigns.ready = true;
		st.callsigns.checkReady();
	}
};