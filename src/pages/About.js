import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hola, yo soy <span>Santiago Luesma</span>
            </p>
            <h2 className="about__heading">Desarrollador de frontend</h2>
            <div className="about__info">
              <PText>
                Me llamo Santiago Luesma, tengo 27 años y soy de Córdoba,
                Argentina. Sinceramente, en este momento, me considero un
                Trainee Developer que está listo para comenzar a trabajar en
                este mundo de la programación.
                <br />
                <br />
                Actualmente trabajo de manera freelance haciendo sitios web con
                la tecnología de WordPress y estudio programación,
                principalmente orientado al frontend pero con la idea de luego
                al dominar éstas tecnologías comenzar con backend y convertirme
                en Full Stack Developer.
                <br />
                <br />
                Me considero una persona inteligente, emprendedora, autodidacta
                y que le encanta ayudar a los demás.
              </PText>
            </div>
            <Button btnText="Descargar CV" btnLink="#" />
          </div>
          <div className="right">
            <img
              src="https://picsum.photos/id/4/566/769?grayscale"
              alt="Santiago Luesma"
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Conocimientos</h1>
            <AboutInfoItem
              title="Tecnologías"
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem
              title="Herramientas"
              items={['GIT', 'Git Hub', 'Figma']}
            />
            <AboutInfoItem title="Metodologías" items={['Scrum', 'BEM']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiencia</h1>
            <AboutInfoItem
              title="Freelance"
              items={['Sitios web con WordPress']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Estudios</h1>
            <AboutInfoItem
              title="ITSC"
              items={['Desarrollo de Software (Terciario)']}
            />
            <AboutInfoItem title="Platzi" items={['JavaScript']} />
            <AboutInfoItem title="Platzi" items={['Frontend con React']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
