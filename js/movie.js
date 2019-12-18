const URL_PATH = 'https://api.themoviedb.org';
const API_KEY = '128402215172fea4f96566ae019f6b5d';
let MOVIE_ID = '';

document.addEventListener('DOMContentLoaded', () => {
	MOVIE_ID = getUrlVars().id;
});

const getUrlVars = () => {
	let vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
		m,
		key,
		value
	) {
		vars[key] = value;
	});
	console.log(vars);
};
