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
                  <a
                    href={item.link}
                    target="_blank"
                    key={index}
                    aria-label={item.alt}
                  >
                    <IconComponent
                      key={index}
                      className="contact-icon"
                      color="#df732b"
                      size={32}
                    />
                  </a>
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
