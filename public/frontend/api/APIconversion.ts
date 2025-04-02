import { API_KEY_Coin } from "./";
const url = ""; // URL dal loro sito non trovato

export async function fetchCoin() {
    try {
        const response = await fetch();
    } catch (error) {
        console.error(error);
    }
}

/*
let response = null;
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(
            "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
            {
                headers: {
                    "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
                },
            },
        );
    } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
    }
    if (response) {
        // success
        const json = response.data;
        console.log(json);
        resolve(json);
    }
});
*/
