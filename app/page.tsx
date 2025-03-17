import ArtText from "@/components/ArtText";
import Cade from "@/components/Cade";
import OnlineGallery from "@/components/OnlineGallery";

const page = () => {
  return (
    <>
      {/* Online Gallery Section */}
      <div className="mb-[30px]">
        <OnlineGallery />
      </div>

      {/* Header Section */}
      <h1 className="text-6xl pl-[100px] mb-[30px]">
        FEATURED ONLINE EXHIBITS
      </h1>

      {/* Cade Section */}
      <div className="mb-[30px]">
        <Cade />
      </div>

      <div className="mb-[30px]">
        <ArtText />
      </div>
    </>
  );
};

export default page;
