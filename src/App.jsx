import { useState } from "react";
import Introduction from "./Pages/Introduction";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
// import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("introPage");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "introPage" && <Introduction onPageChange={handlePageChange} />}
      {currentPage === "aboutPage" && <About onPageChange={handlePageChange} />}
      {/* {currentPage === "skillsPage" && <Skills />} */}
      {currentPage === "projectsPage" && <Projects onPageChange={handlePageChange} />}
      {currentPage === "contactPage" && <Contact onPageChange={handlePageChange} />}
    </>
  );
}

export default App;
