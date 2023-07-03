import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
// import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll =() => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () =>(
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
    </>
  );

  return (
    <section>
      <div className="Parallax background-1" style={{transform:`translateY(-${offsetY * 0.5}px)`}}></div>
      <div className="Parallax background-2" style={{transform:`translateY(-${offsetY * 0.8}px)`}}></div>
      <div className="Parallax background-3" style={{transform:`translateY(-${offsetY * 0.4}px)`}}></div>
      <div className="Parallax_content">
        {renderContent()}
      </div>
    </section>
  );
}

export default App