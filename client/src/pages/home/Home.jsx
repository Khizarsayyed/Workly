import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import CatCard from '../../components/catCard/CatCard';
import {cards, projects} from "../../data";
import FeaturedTalent from "../../components/featuredTalent/FeaturedTalent";
import PremiumSolutions from "../../components/premiumSolutions/PremiumSolutions";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <FeaturedTalent/>
      <PremiumSolutions />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
