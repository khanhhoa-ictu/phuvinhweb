
import About from "@/components/homepage/About";
import Introduce from "@/components/homepage/Introduce";
export default function Home() {
  return (
    <div className="flex-1 h-full relative z-10">
     <Introduce/>
     <About/>
    </div>
  );
}
