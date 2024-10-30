import "../components/Home.css"

const Home = () => {
  return (
    <div  className="home">
      <div className="home__nome-dev animate__animated animate__bounceInLeft"><span>Carlos Humberto</span></div>
      
      <div className="home__cat-dev animate__animated animate__bounceInRight">
        <span>Desenvolvedor</span>
        <span> Front-End</span>
      </div>
      
      <div className="home__tech-dev animate__animated animate__bounceInLeft"> <span>HTML | CSS | Javascript | Java | Python | Angular | React | Fastapi</span></div>
    </div>
  )
}

export default Home