import Typewriter from "typewriter-effect";
import imgShopping from "../assets/imgs/shopping.png";

const TitleTypeWriter = () => {
  return (
    <section className="row align-items-center">
      <div className="col-12 col-md-7">
        <h1 className="display-5 titulo">
          Bienvenido a mi{" "}
          <span style={{ color: "#ff9c08" }}> Tienda online</span> 🛍️
        </h1>
      <a>
        //

      </a>
        <h3 className="text-center">
          <Typewriter
            options={{
              strings: ["✋hi Jeronimo Parra", "Full Stack Developer 🔥"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50, // Velocidad de eliminación
              delay: 75, // Velocidad de escritura
            }}
          />
        </h3>
      </div>
      <div className="col-12 col-md-5 text-center">
        <img
          style={{ padding: "40px",width: "350px", maxWidth: "80%" }}
          src={imgShopping}
          alt="Ecommerce"
          className="img-fluid text-center px-3"
        />
      </div>
    </section>
  );
};

export default TitleTypeWriter;
