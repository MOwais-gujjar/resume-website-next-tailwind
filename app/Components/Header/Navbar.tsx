import React from "react";

const Navbar = () => {
  const nav = [
    { name: "Home", ulLink: "/" },
    { name: "Projects", ulLink: "/" },
    { name: "Skills", ulLink: "/" },
    { name: "Certificates", ulLink: "/" },
  ];
  return (
    <>
      <header className=" py-5 ">
        <div className="flex justify-between item-center">
          {nav.map((l) => (
            <ul key={l.ulLink}>
              <li>{l.name}</li>
            </ul>
          ))}
          <div>logo</div>
          <div>
            <div>icon</div>
            <button>Resume</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
