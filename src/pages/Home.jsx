import Name from '../components/Name';
import Bio from '../components/Bio';
import CursorZs from "../components/CursorZs";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <CursorZs />

      {/* full screen 2 cols */}
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        
        {/* left col 2 rows */}
        <div className="grid grid-rows-2 pl-20">
            
          {/* top row */}
          <div className="flex items-center justify-end pt-30">
            <Name
              className="
                text-white 
                text-[clamp(2rem,8vw,6rem)] 
                font-bold 
                leading-none
              "
            />
          </div>

          {/* bottom row */}
          <div className="flex items-start justify-end pt-10 pl-30">
            <Bio
              className="
                text-white/90 
                text-base md:text-md lg:text-lg 
                leading-relaxed
                max-w-prose
              "
            />
          </div>
        </div>

        {/* right col */}
        <div className="flex items-center justify-center pt-20">
          <img src="chey-w.png" alt="Chey" className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Home;
