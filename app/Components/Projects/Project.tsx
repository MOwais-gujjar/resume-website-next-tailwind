import lendingImage from "../../assets/Projects/lending-page.jpg";
import interiorImage from "../../assets/Projects/interior-design.jpg";
import constructImage from "../../assets/Projects/construct.jpg";
import hotelImage from "../../assets/Projects/hotel.jpg";
import metaverseImage from "../../assets/Projects/metaverse.jpg";
import vrImage from "../../assets/Projects/vr.jpg";
import ProjectItems from "./projectItems";
const Project = () => {
  return (
    <>
      <div className=" mt-10 h-screen">
        <div className=" ml-10">
          <h1>Projects</h1>
          <h2 className="text-sm font-medium tracking-widest text-black/60 ml-7">
            What I have Built{" "}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 mx-20">
          <ProjectItems
            title="Home Design"
            backgroundImage={lendingImage}
            imageURL="/"
          />
          <ProjectItems
            title="Construct"
            backgroundImage={constructImage}
            imageURL="/"
          />
          <ProjectItems
            title="Hotel & Resort"
            backgroundImage={hotelImage}
            imageURL="/"
          />
          <ProjectItems
            title="Interior Design"
            backgroundImage={interiorImage}
            imageURL="/"
          />
          <ProjectItems
            title="Virtual Reality"
            backgroundImage={vrImage}
            imageURL="/"
          />
          <ProjectItems
            title="Metaverse Web"
            backgroundImage={metaverseImage}
            imageURL="/"
          />
          {/* 2 */}
        </div>
      </div>
    </>
  );
};

export default Project;
