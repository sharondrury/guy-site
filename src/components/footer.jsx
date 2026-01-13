import { contactIcons } from "./data";

const footer = () => {
  return (
    <>
      <section>
        <div className="footer-container">
          <div className="footer-content">
            <div>
              <p>
                <strong>Copyright © Sharon Drury development</strong>
              </p>
            </div>
            <div className="logo-container">
              {contactIcons.map((item, index) => {
                const IconComponent = item.icon; 
                return (
                  <IconComponent
                    key={index}
                    className="contact-icon"
                    color="#df732b"
                    size={32}
                    aria-label={item.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default footer;
