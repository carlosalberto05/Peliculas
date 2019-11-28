const URL_PATH = 'https://api.themoviedb.org';
const API_KEY = '128402215172fea4f96566ae019f6b5d';

// https://api.themoviedb.org/3/movie/now_playing?api_key=128402215172fea4f96566ae019f6b5d&language=es-ES&page=1

//Evento
document.addEventListener('DOMContentLoaded', async () => {
	renderNewsMovies();
});

//Método que nos devolverá todas las peliculas
const getNewsMovies = () => {
	const url = ` ${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

	//Petición fetch
	return fetch(url)
		.then(response => response.json())
		.then(result => result.results)
		.catch(error => console.log(error));
};

const renderNewsMovies = async () => {
	const newMovies = await getNewsMovies();

	console.log(newMovies);
};
