const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a2449d3e5f7ba295d37c5758bcc743a8",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
