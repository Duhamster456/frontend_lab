import axios from 'axios';

async function query(url){
	try {
		const response = await axios.get(url);
		for (const key in response.headers) {
  			console.log(`${key}: ${response.headers[key]}`);
		}
	} catch (error) {
		console.error(error);
	}
}

await query('https://vk.com')

console.log('------------------------------------------------')

await query('https://json.geoiplookup.io/')