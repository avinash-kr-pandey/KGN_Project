import React from 'react'
import FormArea from '../../contacts/form';

const Map = () => {
  return (
    <div>
      <div className="contact__form section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 lg-mb-25">
              <div className="contact__form-area">
                <h3>Get In touch</h3>
                <FormArea />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact__one-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map