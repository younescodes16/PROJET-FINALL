import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import misson from "../../photo/misson.webp";
import histoire from "../../photo/histoire.webp";
import './About.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-header" data-aos="fade-down">
        <h1>À propos de nous</h1>
        <p>Bienvenue sur AG STOR, votre source numéro un pour tout ce qui concerne la mode, l'électronique et plus encore. Nous nous engageons à vous offrir le meilleur de nos produits, en mettant l'accent sur la qualité, le service client et l'unicité.</p>
      </div>
      
      <div className="about-us-section" data-aos="fade-right">
        <div className="about-us-image">
          <img src={histoire} alt="Our Story" />
        </div>
        <div className="about-us-content">
          <h2>Notre histoire</h2>
          <p>Fondée en 2022 par Aguibi younes, AG STOR a parcouru un long chemin depuis ses débuts dans un bureau à domicile. Lorsque [Fondateur] a débuté, sa passion pour fournir les meilleurs produits à des prix abordables l'a poussé à faire des recherches intenses et à quitter son travail quotidien, ce qui lui a donné l'impulsion nécessaire pour transformer son travail acharné et son inspiration en une boutique en ligne en plein essor. Nous servons désormais des clients partout dans le monde et sommes ravis de faire partie de l'aile originale, respectueuse de l'environnement et du commerce équitable.</p>
        </div>
      </div>

      <div className="about-us-section" data-aos="fade-left">
        <div className="about-us-content">
          <h2>Notre mission</h2>
          <p>Notre mission est simple : rendre le shopping plus agréable et accessible à tous. Nous pensons qu'acheter le produit parfait devrait être aussi amusant que de le porter. C'est pourquoi nous avons conçu notre magasin pour offrir non seulement des produits, mais aussi une expérience. Que vous magasiniez pour vous-même ou que vous recherchiez le cadeau parfait, nous avons quelque chose pour tout le monde.</p>
        </div>
        <div className="about-us-image">
          <img src={misson} alt="Our Mission" />
        </div>
      </div>

      <div className="about-us-footer" data-aos="fade-up">
        <h3>Merci!</h3>
        <p>Nous espérons que vous apprécierez nos produits autant que nous aimons vous les proposer. Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.</p>
        <p>Sincèrement, <br />AG STOR</p>
      </div>
    </div>
  );
};

export default AboutUs;
