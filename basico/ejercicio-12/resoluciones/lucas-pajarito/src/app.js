import { fetchMovie, fetchRating } from "./services/movies.service.js";

async function main() {
  const titleArg = process.argv.length > 2 ? process.argv[2] : "El Exorcista";

  try {
    const movie = await fetchMovie(titleArg);
    const ratingInfo = await fetchRating(movie.id);

    console.log("Pelicula de terror consultada:");
    console.table({ ...movie, rating: ratingInfo.rating });
  } catch (error) {
    console.error(`Error al buscar pelicula: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
