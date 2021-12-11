import type { NextPage } from "next";
import Image from "next/image";
import Service from "../components/Service";

const Home: NextPage = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <Service
          name="Sonarr"
          description="Umsjónarviðmót sjónvarpsþátta"
          path="/sonarr"
          icon="/sonarr.svg"
        />
        <Service
          name="Radarr"
          description="Umsjónarviðmót kvikmynda"
          path="/radarr"
          icon="/radarr.svg"
        />
        <Service
          name="NZBGet"
          description="Usenet þjónn"
          path="/nzbget"
          icon="/nzbget.png"
        />
        <Service
          name="Dozzle"
          description="Stöðulýsing vefþjóns"
          path="/dozzle"
          icon="/nzbget.png"
        />
      </div>
    </div>
  );
};

export default Home;
