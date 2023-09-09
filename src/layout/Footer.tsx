import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Clothing store</strong> by{" "}
          <a href="https://github.com/HassenH1/">Hassen Hassen</a>. The source
          code is in <a href="https://github.com/HassenH1/">github</a>.
          Copyright ©{new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
