import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { URL_API, API_KEY } from "../..//utils/constants";
import Loading from "../../components/Loading/Loading";

import "./movie.scss";

const Movie = () => {
  const { id } = useParams();
  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${API_KEY}&language=es-ES`
  );

  if (movieInfo.loading || !movieInfo.result) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo.result} />;
};

export default Movie;

const RenderMovie = (props) => {
  const {
    movieInfo: { title },
  } = props;

  return (
    <div>
      <h1>Esta es la pelicula {title}</h1>
    </div>
  );
};
