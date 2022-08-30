function doIt() {
	var num = document.getElementById("num").value;
	if (num.length != 5) {
		alert("Number must have 5 digits");
		return;
	}

	var sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}

	var result = document.getElementById("result");
	result.style.width = sum + "px";
	result.style.height = sum + "px";
	result.style.borderRadius = sum / 5 + "px";

	var element = document.getElementById("grid");
	while (element.firstChild) {
		grid.removeChild(grid.firstChild);
	}
	var row = Math.sqrt(sum);
	for (let i = 0; i < sum; i++) {
		var tag = document.createElement("div");
		tag.classList.add("child");
		tag.style.width = sum * 1.3 + "px";
		tag.style.height = sum * 1.3 + "px";
		// tag.style.flex = Math.floor(100 / row) + "%";
		element.appendChild(tag);
	}
}

function fun() {
	let result = document.getElementById("result");
	let w = result.style.width;
	let h = result.style.height;
	let b = result.style.borderRadius;
	alert("Width: " + w + "\nHeight: " + h + "\nBorder Radius: " + b);
}
