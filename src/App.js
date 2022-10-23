import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

//pages
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovie from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>Header....</Header>

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewMovie />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
