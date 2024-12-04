import Content from "../content/content";
import HeaderNav from "../headerNav";
import "./home.css"

export default function Home() {
  return (
    <div className="home" >
      <HeaderNav />
      <Content />
    </div>
  );
}
