//case1: given index espresso machine not working--try to find another working espresso machine to start(use easy case index = index+1 )
//case2:subsequent group machine not working-- Array.includes() working machine only
//case3: out of order stations -- check if next stations is in original subsequent group
//case4:everything works fine -- check shortest distance from current station to subsequent station and get the station/machine id
//return result  like =[0,4,7,12,16] or error

//check distance
// d=math.square((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) +(z2-z1)*(z2-z1))
//or d=math.distance([x1, y1, z1], [x2, y2, z2])

//remove () from string
// x = x.replace(/[{()}]/g, '');

const bloom = (index) => {
	const INPUT = `(1,-5,7,0);(1,-3,12,4);(1,0,8,2);(1,4,4,10)
    (1,-9,2,3);(1,-4,0,0);(1,-1,1,2)
    (1,-3,-5,5);(1,-1,-3,7);(1,4,-4,12);(1,8,-2,4);(1,10,-1, 3)
    (1,-6,-7,2);(1,-1,-8,1);(1,3,-12,5);(1,9,-8,7)
    (0,-5,-15,1);(1,-6,-16,8);(1,4,-15,1);(1,5,-17,2);(1,6,-15,9);(1,8,-15,7)`;
	//separate each stations
	let cafe = INPUT.split("\n    ");
	console.log("cafe: ", cafe);

	//separate each station/machine
	let newCafe = [];
	let arrCheckLength = [];
	for (let i of cafe) {
		let stations = i.split(";");
		let arr = [];
		for (let station of stations) {
			arr.push(
				station
					.replace(/[{()}]/g, "") //remove ()
					.split(",")
					.map((num) => +num) //str to num
			);
		}

		console.log("arr: ", arr);
		// console.log("trimmedStations: ", trimmedStations);
		newCafe.push(arr);
		arrCheckLength = [...arrCheckLength, ...stations];
	}
	//case1: given index espresso machine not working
	if (newCafe[0][index][0][1] == 0) {
		//do something
		if (newCafe[0][index + 1] && newCafe[0][index + 1][0][1] !== 0) {
			return bloom(index + 1);
		}
	}
	console.log("newCafe: ", newCafe);
	console.log("arrCheckLength: ", arrCheckLength);
	let result = [index];
	for (let i in newCafe) {
		let shortest = 0;

		console.log("newCafe[0][index][0]  : ", newCafe[0][index][0]);
		//case2: machine not working
		if (newCafe[i + 1]) {
			for (let j in newCafe[i + 1]) {
				console.log("newCafe[i + 1][j][0] : ", newCafe[i + 1][j][0]);
				if (newCafe[i + 1][j][0] === 1) {
					math.distance([x1, y1, z1], [x2, y2, z2]);
					let d = math.distance(
						coordinateStation(newCafe[i][index]), //FIXME: need to change this one
						coordinateStation(newCafe[i + 1][j])
					);
					if (shortest > d) {
						shortest = d;
					}
				}
				result.push(arrCheckLength.indexOf(newCafe[i + 1][j]));
			}
		}
		return result;
	}
	//case3:out of order stations
};

console.log(bloom(0));
//helper function for check distance
const coordinateStation = (station) => {
	if (station[0] === 1) {
		return station.shift();
	}
};
