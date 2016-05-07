import React from 'react';
import { Link } from 'param-store';

const Info = ({}) => (
      <div className="body-color">
        <div className="container">
          <nav className="nav-padding">
            <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="index.html" className="nav-text" params={{ path: 'index' }}> {i18n('Back')}
            </Link>
          </nav>
          <section className="details-section">
            <p className="service-paragraph">
              {i18n('Ronald McDonald Care Mobile')}
              <span className="bold-text">
                {i18n('FREE')}
              </span>
              {i18n('capabilities and pediatric primary care services provided will vary by each community’s needs and may include')}
            </p>
            <ul>
              <li>
                {i18n('Immunizations')}
              </li>
              <li>
                {i18n('Well-child visits')}
              </li>
              <li>
                {i18n('Ill or urgent care visits')}
              </li>
              <li>
                {i18n('Body Mass Index calculations and nutrition counseling')}
              </li>
              <li>
                {i18n('Developmental screenings')}
              </li>
              <li>
                {i18n('Vision and hearing screening')}
              </li>
              <li>
                {i18n('Free medicine for uninsured children through on-site TCH pharmacy')}
              </li>
              <li>
                {i18n('School physicals – general and sports related')}
              </li>
              <li>
                {i18n('Blood collection and point of care testing')}
              </li>
              <li>
                {i18n('Childhood health education and injury prevention education')}
              </li>
              <li>
                {i18n('Specialty care referrals including mental health and social service referrals')}
              </li>
            </ul>
          </section>
        </div>
      </div>
);
export default Info;
