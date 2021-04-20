import './App.scss';
import photo1 from './media/photo1.png';
import photo2 from './media/photo2.png';
import photo3 from './media/photo3.png';
import photo4 from './media/photo4.png';
import photo5 from './media/photo5.png';
import photo6 from './media/photo6.png';

function App() {
  return (
    <div className="App">
        <header className="header">
            <div className="header-container container">
                <div className="logo-wrapper">
                    <h3 className="logo">The creative crew</h3>
                </div>
                <div className="info">
                    <h2 className="title">WHO WE ARE</h2>
                    <p className="description">
                        We are a team of creatively diverse. driven. innovative individuals working in various locations from the world. 
                    </p>
                </div>
            </div>
        </header>
        <div className="gallery-component">
            <div className="gallery-container container">
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo1} alt="" className="img"/>
                    </div>
                    <span className="name">Bill Mahoney</span>
                    <span className="title">Product Owner</span>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo2} alt="" className="img"/>
                    </div>
                    <span className="name">Saba Cabrera</span>
                    <span className="title">Art Director</span>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo3} alt="" className="img"/>
                    </div>
                    <span className="name">Shae Le</span>
                    <span className="title">Tech Lead</span>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo4} alt="" className="img"/>
                    </div>
                    <span className="name">Skylah Lu</span>
                    <span className="title">UX Designer</span>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo5} alt="" className="img"/>
                    </div>
                    <span className="name">Griff Richards</span>
                    <span className="title">Developer</span>
                </div>
                <div className="item">
                    <div className="img-wrapper">
                        <img src={photo6} alt="" className="img"/>
                    </div>
                    <span className="name">Stan John</span>
                    <span className="title">Developer</span>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>
    </div>
  );
}

export default App;
