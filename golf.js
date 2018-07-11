let players = [{name:"Gordon", par:89, course:"ParkCity"},
{name:"London", par:82, course:"ParkCity"},
{name:"Hordon", par:99, course:"ParkCity"},
{name:"Corban", par:109, course:"ParkCity"}];
//console.log(players);                                                                                                                         
let sortGolfers = function(data, callback) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].course.toLowerCase() === "ParkCity"){
			if (typeof callback === "function") {
				callback(data[i]);
			}
		}
	}
}

sortGolfers(players, function(obj) {
	console.log(players);
	if (obj.par > 90){
		console.log(obj.name + "bad golfer.");
	}
});

let courseTotal = function(){
	let total = 0, count = 0;

	sortGolfers(players, function(obj){
		total = total + obj.par;
		count++;
	});
	console.log("Total par: " + total + " - Number of players: " + count);
};

courseTotal();