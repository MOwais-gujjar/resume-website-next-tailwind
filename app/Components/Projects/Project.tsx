import airbnbImage from "../../assets/Projects/airbnb.jpg";
import youTubeImage from "../../assets/Projects/youTube.jpg";
import constructImage from "../../assets/Projects/construct.jpg";
import leetscodeImage from "../../assets/Projects/leetscode.jpg";
import ProjectItems from "./projectItems";
const Project = () => {
  return (
    <>
      <div className=" mt-20 h-screen">
        <div className=" ml-10">
          <h1>Projects</h1>
          <h2 className="text-sm font-medium tracking-widest text-black/60 ml-7">
            What I have Built{" "}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mx-4 my-4">
          <ProjectItems
            title="Airbnb Clone App"
            backgroundImage={airbnbImage}
            imageURL="/airbnb.com"
          />
          <ProjectItems
            title="Construct Web App"
            backgroundImage={constructImage}
            imageURL="/"
          />
          <ProjectItems
            title="You Tube Clone App"
            backgroundImage={youTubeImage}
            imageURL="/"
          />
          <ProjectItems
            title="LeetsCode Clone App"
            backgroundImage={leetscodeImage}
            imageURL="/"
          />
          {/* 2 */}
        </div>
      </div>
    </>
  );
};

export default Project;
