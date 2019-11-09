const movieResourceLinkRegex = /^https?:\/\/content\.viaplay\.se\/\w*-se\/film\/([\w-]+)/;

const getMovieSlugFromLink = (movieResourceLink) => {
  const result = movieResourceLinkRegex.exec(movieResourceLink);
  return result && result[1];
};

export default getMovieSlugFromLink;
