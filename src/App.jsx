import "animate.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import vetmenthomme from "./photo/vetmenthomme.jpg";
import bijeux from "./photo/bijeux.jpg";
import electrinique from "./photo/electronique.jpg";
import vetmentfamme from "./photo/vetmentfamme.jpg";
const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="animate__animated animate__fadeInDown">
          Welcome To AG Shopping!
        </h1>
        
      </header>

      <section className="content">
        <div className="content-text">
          <p>
            Découvrez notre vaste sélection de produits triés sur le volet pour
            répondre à tous vos besoins. Que vous soyez à la recherche de
            vêtements tendance, de bijoux élégants ou d'électronique de pointe,
            nous avons ce qu'il vous faut. Explorez nos catégories variées,
            chacune soigneusement organisée pour faciliter votre shopping :
          </p>
        </div>
        <div className="category-home">
          <div className="category-home1">
            <div>
              <h1>Vêtements pour hommes </h1>
              <p>
                Trouvez les dernières tendances en mode masculine, des sacs à
                dos pratiques aux vestes en coton stylées. Notre collection
                inclut des articles de qualité pour toutes les occasions, qu'il
                s'agisse de sorties décontractées ou d'activités en plein air.
              </p>
              <img className="image-home" src={vetmenthomme} />
            </div>
            <div>
              <h1>Vêtements pour famme</h1>
              <p>
                Découvrez les dernières tendances en mode féminine avec notre
                sélection raffinée de vêtements pour femmes. Des robes élégantes
                aux vestes stylées , en passant par des pantalons et jupes
                polyvalents, notre collection offre des pièces de qualité pour
                toutes les occasions.
              </p>
              <img className="image-home" src={vetmentfamme} />
            </div>
          </div>
          <div className="category-home1">
            <div>
              <h1>Bijoux</h1>
              <p>
                Égayez votre look avec nos bijoux raffinés. Découvrez des pièces
                élégantes allant des bracelets en or aux bagues en argent,
                parfaites pour ajouter une touche de sophistication à votre
                tenue ou pour offrir en cadeau.
              </p>
              <img className="image-home" src={bijeux} />
            </div>
            <div>
              <h1>Électronique</h1>
              <p>
                Améliorez votre équipement avec notre sélection d'électronique
                de haute performance. Nous proposons des disques durs externes,
                des SSD, et des moniteurs, conçus pour offrir rapidité et
                fiabilité, que ce soit pour le travail ou le divertissement.
              </p>
              <img className="image-home" src={electrinique} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
