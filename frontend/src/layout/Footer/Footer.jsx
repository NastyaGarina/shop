import './Footer.css';

export const Footer = () => {
  return (
    <div className="bg-light text-center text-white">
      <div className="container p-4 pb-0" style={{ marginTop: '60px' }}>
        <section className="mb-4">
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#3b5998' }}>
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#55acee' }}>
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#dd4b39' }}>
            <i className="fab fa-google" />
          </a>
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#ac2bac' }}>
            <i className="fab fa-instagram" />
          </a>
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#0082ca' }}>
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-primary m-1" style={{ backgroundColor: '#333333' }}>
            <i className="fab fa-github" />
          </a>
        </section>
      </div>
      <div className="text-center p-3 footerText">© 2022 Daniil</div>
    </div>
  );
};
