import { Link } from 'react-router-dom';
import InfoSection from '../Components/InfoSection';

function Home() {

  return (
    <>
      <main>
        <h1>B2T Converter</h1>
        <p>This app converts between binary, decimal, hexadecimal and text.</p>
        <Link to="/Convert" className="btn">Get Started</Link>
      </main>
      <InfoSection />
    </>
  );
}

export default Home;