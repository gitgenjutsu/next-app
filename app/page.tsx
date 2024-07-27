import Navbar from "./components/Navbar";
// import Image from "next/image";
// import "../public/anime_trailer_mobile.jpg";
import "./index.css";

export default function Home() {
  return (
    <div className="home-bg">
      <Navbar />
      <div className="flex w-100 h-dvh justify-center items-center flex-col pt-14 lg:px-8 hero-text">
        <h1>Frontend</h1>
        <h1 className="home-text-2">Warriors</h1>
      </div>
    </div>
  );
}
