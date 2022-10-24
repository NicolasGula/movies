import "./movieCatalog.scss";
import { Col, Card, Icon } from "antd";
import { Link } from "react-router-dom";

const MovieCatalog = (props) => {
  const {
    movie: { results },
  } = props;

  return results.map((movie) => (
    <Col key={movie.id} xs={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
};

export default MovieCatalog;

const MovieCard = (props) => {
  const { movie } = props;
  console.log(movie);
  return "moviecard...";
};
