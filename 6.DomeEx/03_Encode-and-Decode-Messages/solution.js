function solve() {
	let allBtns = Array.from(document.getElementsByTagName("button"));
	let allTextAreas = Array.from(document.getElementsByTagName("textarea"));

	let encodeBtn = allBtns[0];
	let decodeBtn = allBtns[1];

	let textToEndode = allTextAreas[0];
	let decodedText = allTextAreas[1];

	encodeBtn.addEventListener("click", encode);
	decodeBtn.addEventListener("click", decode);

	function encode(){
		let textAsCharArr = textToEndode.value.split('');
		let encodeMsg ="";

		textAsCharArr.forEach(char => {
			let ascCode= Number(char.charCodeAt(0));
			ascCode +=1;
			let decodeChar = String.fromCharCode(ascCode);

			encodeMsg += decodeChar;
		});

		textToEndode.value = "";
		decodedText.value = encodeMsg;
	};

	function decode() {
		let decodetextAzArr = decodedText.value.split("");
		let decodeMsg = "";

		decodetextAzArr.forEach(char => {
			let ascCode = Number(char.charCodeAt(0));
			ascCode -=1;

			let decodeChar = String.fromCharCode(ascCode);
			decodeMsg += decodeChar;
		});

		decodedText.value = "";
		textToEndode.value = decodeMsg;

	};
}