import { Menubar } from "primereact/menubar";

function Nav() {
    const items = [
      {
        label: "linkedin",
        icon: "pi pi-linkedin",
      },
      {
        label: "cv",
        icon: "pi pi-file",
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
          <Menubar
            model={items}
            start={start}
            className="nav-contents"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
