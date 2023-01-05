import "./App.css";
import Cards from "./Components/Cards";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">🎥 List Of Top 3 Netflix Series 🎥 </h1>

      {Sdata.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
            sname={val.sname}
          />
        );
      })}
    </>
  );
}

export default App;
