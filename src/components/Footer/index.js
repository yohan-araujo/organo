import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/img/fb.png" alt="Foto do Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/img/tw.png" alt="Foto do Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/img/ig.png" alt="Foto do Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/img/logo.png" alt="Foto do Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Footer;
