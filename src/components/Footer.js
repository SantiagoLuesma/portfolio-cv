import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        .div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Santiago Luesma</h1>
          <PText>
            Desarrollador y diseñador web freelance de Córdoba, Argentina.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Links importantes"
            links={[
              {
                title: 'Inicio',
                path: '/',
                type: 'Link',
              },
              {
                title: 'Sobre mí',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Proyectos',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contacto',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contacto"
            links={[
              {
                title: '+5493516757784',
                path: 'tel:+5493516757784',
              },
              {
                title: 'seluesma@gmail.com',
                path: 'mailto:seluesma@gmail.com',
              },
              {
                title: 'Córdoba, Argentina',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Links sociales"
            links={[
              {
                title: 'Facebook',
                path: 'https://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'https://instagram.com/santiagoluesma',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/luesmadev',
              },
              {
                title: 'Git Hub',
                path: 'https://github.com/santiagoluesma',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>&copy; 2021 - Santiago Luesma | Desarrollador web</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
