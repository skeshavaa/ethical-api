import landingPageHero from "../assets/landing-page-hero.png";
import '../styles/Home.css'

function Home() {
  return (
    <div className="flex flex-wrap justify-evenly pt-10 items-center lg:overflow-y-hidden">
      <div
        className="hero flex flex-col lg:pt-36 md:pt-5"
        style={{ height: "50vh" }}
      >
        <h1 className="title">The Ethical API</h1>
        <h3 className="title2">
          Control who has your data and when they can use it
        </h3>
      </div>
      <img
        src={landingPageHero}
        alt="landing page hero"
        className="rounded-sm"
      />
      <div className="page-divider" />
    </div>
  );
}

export default Home;
