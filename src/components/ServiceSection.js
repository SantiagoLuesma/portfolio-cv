import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subheading="Que puedo hacer por ti" heading="Servicios" />

        <div className="services__allItems">
          <ServiceSectionItem
            icon={<MdDesktopMac />}
            title="Diseño web"
            desc="I do ui/ux design for the website that helps website to get a unique look"
          />
          <ServiceSectionItem
            icon={<MdCode />}
            title="Desarrollo web"
            desc="I do ui/ux design for the website that helps website to get a unique look"
          />
          <ServiceSectionItem
            icon={<MdPhonelinkSetup />}
            title="Desarrollo de apps"
            desc="I do ui/ux design for the website that helps website to get a unique look"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
