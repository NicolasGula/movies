import { URL_API, API_KEY } from "../utils/constants";

import useFetch from "../hooks/useFetch";

import SliderMovies from "../components/SliderMovies";

const Home = () => {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
    </>
  );
};

export default Home;
