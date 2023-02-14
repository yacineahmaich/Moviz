import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/UI/Container";
import Header from "./components/UI/Header";
import SideNav from "./components/UI/SideNav";
import Footer from "./components/UI/Footer";
import { Home, Popular, Upcoming, Movie, TopWatched } from "./pages";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <SideNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/topwatched" element={<TopWatched />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
