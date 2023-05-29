import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/Error"));
const Service = lazy(() => import("./pages/Service"));
const Contact = lazy(() => import("./pages/Contact"));
import Loading from "./pages/Loading";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="service"
          element={
            <Suspense fallback={<Loading />}>
              <Service />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        index
        element={
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
