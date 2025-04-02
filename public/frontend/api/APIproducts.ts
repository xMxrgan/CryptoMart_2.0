import { API_KEY } from "./.env";
const url = "https://api.themoviedb.org/3/search/movie";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

export async function fetchMovies(movie: string) {
    try {
        const response = await fetch(`${url}/movie/${movie}`, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
