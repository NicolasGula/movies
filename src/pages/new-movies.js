import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";

import Footer from "../components/Footer/index";
import Loading from "../components/Loading/index";
import MovieCatalog from "../components/MovieCatalog/MovieCatalog";
import Pagination from "../components/Pagination/Pagination";

const NewMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos Lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Col span="24">
          <Row>
            <MovieCatalog movie={movieList} />
          </Row>
          <Pagination
            currentPage={movieList.page}
            totalItems={movieList.total_results}
            onChangePage={onChangePage}
          />
          {/* <Row>
          </Row> */}
        </Col>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
