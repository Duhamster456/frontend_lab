const addrCount = 5;
const countryCodes = ['RU', 'BY', 'AF', 'CN', 'VE', 'IR'];
const output = document.getElementById("output");

let addrArr = [];
let goodFlag = true;

for(let i = 0; i < addrCount; i++){
    addrArr[i] = prompt("Введите IP-адрес:", "8.8.8.8");
}

async function checkCountries() {
    for(let i = 0; i < addrCount; i++){
		let result = await fetch(`https://json.geoiplookup.io/${addrArr[i]}`);
		let data = await result.json();
		
		if (countryCodes.includes(data["country_code"])){
			output.textContent = "Our services are not available in your country";
			goodFlag = false;
			break;
		}
    }
    
    if(goodFlag){
        output.textContent = "Welcome to our website";
    }
}

checkCountries();