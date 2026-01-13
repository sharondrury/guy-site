import { contactIcons } from "./data";

const floatingMenu = () => {
  return (
    <div className="floating-container">
      <div className="floating-logo-container-content">
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
  );
};

export default floatingMenu;
