let a = [];
for(let i = 1; i < 10; i++){
	a.push(i);
}
let b = [];
for(let i = 1; i <=11; i++){
	b.push(i);
}
let c = [];
for(let i = 1; i <= 10; i++){
	c.push(i);
}
oneHundredBalls()
function oneHundredBalls(){
	let cell = document.getElementById("firstBall");
	let row = document.getElementById("row");
	let table = document.getElementById("big");
	let number = document.getElementById("number");
	let letter = document.getElementById("letter");
	a.map(function(x) {
		let newCell = cell.cloneNode(true);
		newCell.id = x;
		row.appendChild(newCell);
	})
	let idCounter = 0;
    c.map(function(x) {
		let newRow = row.cloneNode(true);
		newRow.id =x;
		table.appendChild(newRow);

		console.log(newRow.childNodes)
		console.log(Array.from(newRow.childNodes))
		let children = Array.from(newRow.childNodes)
		children.map(function (child) {
			child.id = "cell" + idCounter;
			idCounter++;
		})
	})
	a.map(function(x) {
		let newNum = cell.cloneNode(true);
		newNum.value = x;
		number.appendChild(newNum);
	})
	c.map(function(x) {
		let newDate = cell.cloneNode(true);
		newDate.value = String.fromCharCode(parseInt(x+64));
		letter.appendChild(newDate);
	})
}

function Summary(){
	let table = document.getElementById("big");
	for(let j=1;j<=11;j++){
		if(j==2){
			continue;
		}
		else{
		let summa = 0;
		for(let i=j;i<=j+96;i+=12){
			let newThing = document.getElementById("cell" + i);
			if(newThing.value != ""){
				let Val = parseInt(newThing.value);
				summa += Val;
			}
			else{
				continue;
			}
		}
		let koko = 108 + j;
		let Answer = document.getElementById("cell" + koko);
		Answer.value = summa;
    }
}
}