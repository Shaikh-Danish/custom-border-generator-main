let resultBox = document.querySelector(".border-result");
let colorCode;
let allInputs = document.querySelectorAll("#border-clr, #fill-clr, #stroke, #dash-arr, #select-box, #offset, #radius, #width, #height");
let copyBtn = document.querySelector(".copy-btn");
let copyBox = document.querySelector("#copy-code");

let borderStyle = {
				bgColor: "ffffff",
				borderColor: "000000",
				borderWidth: "4",
				array: "6, 14",
				linecap: "square",
				offset: "0",
				radius: "0",
}

function styleOne() {
				borderStyle.bgColor = "#ffffff";
				borderStyle.borderColor = "000000";
				borderStyle.borderWidth = "4";
				borderStyle.array = "6, 14";
				borderStyle.linecap = "square";
				borderStyle.offset = "0";
				borderStyle.radius = "0";
				changeImage(borderStyle);
				changeInput(borderStyle);
}

function styleTwo() {
				borderStyle.bgColor = "#ffffff";
				borderStyle.borderColor = "ec3463";
				borderStyle.borderWidth = "7";
				borderStyle.array = "50%, 13%";
				borderStyle.linecap = "butt";
				borderStyle.offset = "86";
				borderStyle.radius = "100";
				changeImage(borderStyle);
				changeInput(borderStyle);
}

function styleThree() {
	borderStyle.bgColor = "#ffffff";
	borderStyle.borderColor = "000000";
	borderStyle.borderWidth = "4";
	borderStyle.array = "2, 8";
	borderStyle.linecap = "butt";
	borderStyle.offset = "0";
	borderStyle.radius = "0";
	changeImage(borderStyle);
	changeInput(borderStyle);
				
}

function styleFour() {
	borderStyle.bgColor = "#ffffff";
	borderStyle.borderColor = "000000";
	borderStyle.borderWidth = "10";
	borderStyle.array = "15, 15, 1";
	borderStyle.linecap = "square";
	borderStyle.offset = "0";
	borderStyle.radius = "0";
	changeImage(borderStyle);
	changeInput(borderStyle);
}

function styleFive() {
	borderStyle.bgColor = "#add9e6";
	borderStyle.borderColor = "000000";
	borderStyle.borderWidth = "25";
	borderStyle.array = "2, 6";
	borderStyle.linecap = "butt";
	borderStyle.offset = "28";
	borderStyle.radius = "0"
	changeImage(borderStyle);
	changeInput(borderStyle);
}

allInputs.forEach(element => {
	element.addEventListener("input", () => { 
		if (element.id == "border-clr") {
			colorCode = element.value.substr(1, element.value.length);
			borderStyle.borderColor = `${colorCode}`;
		}
		else if (element.id == "fill-clr") {
			borderStyle.bgColor = `${element.value}`;
		}
		else if (element.id == "stroke") {
			borderStyle.borderWidth = `${element.value}`;
		}
		else if (element.id == "dash-arr") {
			borderStyle.array = `${element.value}`;
		}
		else if (element.id == "select-box") {
			borderStyle.linecap = `${element.value}`;
		}
		else if (element.id == "radius") {
			borderStyle.radius = `${element.value}`;
		}
		else if (element.id == "offset") {
			borderStyle.offset = `${element.value}`;
		}
		else if (element.id == "width") {
			resultBox.style.width = `${element.value}px`;
		}
		else if (element.id == "height") {
			resultBox.style.height = `${element.value}px`;
		}

		changeImage(borderStyle);
	});
});

function changeImage(value) {
				
	image = `data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${value.radius}' ry='${value.radius}' stroke='%23${value.borderColor}' stroke-width='${value.borderWidth}' stroke-dasharray='${value.array}' stroke-dashoffset='${value.offset}' stroke-linecap='${value.linecap}'/%3e%3c/svg%3e`;			
	
	resultBox.style.backgroundImage = `url("${image}")`;
	resultBox.style.borderRadius = `${value.radius}px`;
	resultBox.style.backgroundColor = `${value.bgColor}`;
	
	let strokeLabel = document.querySelector(".stroke").innerText = `Stroke width: ${value.borderWidth}`;
	let radiusLabel = document.querySelector(".radius").innerText = `Border radius: ${value.radius}`;
	let offsetLabel = document.querySelector(".dash-offset").innerText = `Dash offset: ${value.offset}`;
	
	copyBox.innerText = image;
	if (value.radius > 0) {
					copyBox.innerText = `backgroung-image: url("${image}");\u000A border-radius: ${value.radius}px`;
	}
}

function changeInput(value) {
	let bgColor = document.getElementById("fill-clr").value = `${value.bgColor}`;
	let strokeColor = document.getElementById("border-clr").value = `#${value.borderColor}`;
	let strokeWidth = document.getElementById("stroke").value = value.borderWidth;
	let dashArray = document.getElementById("dash-arr").vakue = value.array;
	let strokeOffset = document.getElementById("offset").value = value.offset;
	let borderRadius = document.getElementById("radius").value = value.radius; 
	let linecap = document.getElementById("select-box").value = value.linecap;
}

function copyCode() {
	copyBox.select()
	document.execCommand("copy");
	copyBtn.classList.add("btn");
	copyBtn.innerText = "Copied";
	setTimeout(() => {
					copyBtn.classList.remove("btn");
					copyBtn.innerText = "Copy";
	}, 3000);
}
