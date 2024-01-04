import Tortee from "./TORTEE.jpg"
import weather from "./WEATHER.jpg"
import Poke from "./Poke.jpg"
import { DiGithubBadge } from "react-icons/di";
import { RiPresentationLine } from "react-icons/ri";
import { TbBrandVercel } from "react-icons/tb";


export const ProjectList = [
    {
    name: "Project Tortee",
    image: Tortee,
    desc:  (
        <>
          • Project Tortee is a testament to the transformative power of technology, where I played a pivotal role in its development.<br /><br />
          • Employing a sophisticated tech stack encompassing JavaScript, CSS, Next.js, Vercel, Git, and a SQL database, the app embodies a harmonious blend of functionality and aesthetics.
          <br /><br />
          • Leveraging my expertise, I implemented CRUD features on a robust API, ensuring seamless communication and interaction between mentors and mentees.
          <br /><br /> •The application not only boasts an elegant design but also incorporates my proficiency in data management, API integration, and version control through Git.
          <br /><br />
          • Additionally, my skills in optimizing performance and ensuring scalability have contributed to an app that provides a user-friendly and responsive experience.
          <br /><br /> • From creating personalized dashboards to implementing real-time notifications, every feature has been meticulously developed to enrich the mentorship journey. With this app, I have not only showcased my technical prowess but have also actively contributed to building a platform that transcends traditional mentorship boundaries, fostering a dynamic space for growth, collaboration, and mutual empowerment.
        </>
    
      ),
    link: <a href="https://github.com/SchoolOfCode/Team-expedition"><DiGithubBadge /></a>,
    demo: <a href="https://github.com/SchoolOfCode/Team-expedition"><RiPresentationLine /> </a>,
    deployed: <a href="https://github.com/SchoolOfCode/Team-expedition"><TbBrandVercel /> </a>,
},{
    name: "Project Pokémon Battle",
    image: Poke,
}
 ,{ name: "Project Under The Weather",
image: weather, }]