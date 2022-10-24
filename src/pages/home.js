import { URL_API, API_KEY } from "../utils/constants";
import useFetch from "../hooks/useFetch";
import { Row, Col } from "antd";

import MovieList from "../components/MovieList/MovieList";
import SliderMovies from "../components/SliderMovies";

const Home = () => {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>....</Col>
      </Row>
    </>
  );
};

export default Home;
