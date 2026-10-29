function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    if (!title || typeof title !== "string" || !title.trim()) {
      reject(new Error("El titulo de la pelicula es obligatorio"));
      return;
    }

    setTimeout(() => {
      resolve({ id: Math.floor(Math.random() * 900) + 100, title: title.trim() });
    }, 150);
  });
}

function fetchRating(movieId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ movieId, rating: (Math.random() * 3.5 + 6.2).toFixed(1) });
    }, 150);
  });
}

export { fetchMovie, fetchRating };
