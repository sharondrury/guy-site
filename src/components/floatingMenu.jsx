import { contactIcons } from "./data";

const floatingMenu = () => {
  return (
    <div className="floating-container">
      <div className="floating-logo-container-content">
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
  );
};

export default floatingMenu;
