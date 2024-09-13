import HeaderNav from "../headerNav";
import Uploader from "../uploader/Uploader";
import "./home.css"

export default function Home() {
  return (
    <div className="home" >
      <HeaderNav />
      <Uploader />
    </div>
  );
}
