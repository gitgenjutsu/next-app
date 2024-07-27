import Navbar from "../components/Navbar";
import Image from "next/image";
import "../index.css";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-about flex justify-center items-center">
      <Navbar />
      <div className="flex lg:justify-between items-center xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse xl:w-3/4 lg:w-3/4 lg:gap-5 w-full bg-white p-3 lg:px-3 about-text mt-10">
        <div className="text-box text-black w-full">
          <h3>About me</h3>
          <p>
            Hello! I'm Mohd Wasim, a passionate and dedicated Software Engineer
            specializing in frontend development. With years of professional
            experience, I have honed my skills in JavaScript and its relevant
            frameworks, particularly in the React-Redux ecosystem. Currently, I
            am working at Panorama Software Solutions, where I am involved in
            developing innovative solutions for the pharmaceuticals industry.
          </p>
          <p>
            Apart from my professional work, I have a deep love for anime,
            especially the Akatsuki group from Naruto. I enjoy infusing my
            passion for anime into my projects, making them not only functional
            but also uniquely expressive.
          </p>
          <p>モハド・ワシム・暁</p>
          <div className="bg-blue-700 rounded-md p-3 text-white max-w-fit">
            <Link href={'https://www.linkedin.com/in/wasim-mohd/'} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Link>
          </div>
        </div>
        <div className="image md:w-full lg:w-auto">
          <Image
            src={"/images/shao-sisters-scene.webp"}
            width={450}
            height={400}
            alt="NF"
          />
        </div>
      </div>
    </div>
  );
}
