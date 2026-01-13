import { Menubar } from "primereact/menubar";

const nav = () => {
  const items = [
    {
      label: "linkedin",
      icon: "pi pi-linkedin",
      command: () => {
        window.open("https://www.linkedin.com/in/guysalmon/", "_blank");
      },
    },
    {
      label: "cv",
      icon: "pi pi-file",
      url: "../assets/Sharon_Drury_2025_cv_blank.pdf",
      // command:()=>{ window.open("Sharon_Drury_2025_cv_blank.pdf", "_blank"); }
      // command: () => {
      //   window.location.hash = {cvPdf};
      // },
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
    ></img>
  );

  return (
    <>
      <div className="nav-wrapper">
        <div>
          <Menubar model={items} start={start} className="nav-contents" />
        </div>
      </div>
    </>
  );
};

export default nav;
