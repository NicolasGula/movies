import "./movieCatalog.scss";
import { Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

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
  const {
    movie: { id, title, poster_path },
  } = props;

  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[<Button icon={<EyeOutlined />} key="eye" />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
};
