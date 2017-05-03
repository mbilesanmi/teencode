import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const VolunteerSection = () =>
  <section id="volunteer" className="volunteers">
    <div className="container">
      <div className="row profile">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <img src={require('../../../img/volunteer.jpeg')} className="img-thumbnail picture hidden-xs" />
          <h5 className="name">Oluwadamilola Adebayo</h5>
          <p className="title">Software developer at Andela</p>
          <p className="role">Teencode volunteer facilitator</p>
          <p className="role role-cta"><Link to="/volunteers">See more volunteers >></Link></p>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
          <div className="header">
            <h4>How is your high school preparing the next generation of Africa's tech leaders?</h4>
            <p>Teencode pairs volunteer professional developers with high schools so they teach students how to build programs that solve useful problems.</p>
          </div>
          <div className="offset-lg-6 col-lg-6 col-xs-12">
            <div className="text-sm-right text-xs-center">
              <Link to="/volunteers"><p className="action">Show me what the curriculum looks like >></p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
export default VolunteerSection;