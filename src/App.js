import Header from "./components/Header";
import { useSelector } from "react-redux";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import Card from "./components/Card";

const App = () => {
  const items = useSelector((state) => state.covid.items);

  return (
    <>
      <Header />
      <div className="container grid md:grid-cols-4 gap-5 mx-auto mt-16">
        <Card
          data={items.confirmed}
          title={"Infected"}
          date={items.lastUpdate}
          text={"Number of infect cases of COVID-19"}
        />
        <Card
          data={items.recovered}
          title={"Recovered"}
          date={items.lastUpdate}
          text={"Number of recoveries from COVID-19"}
        />
        <Card
          data={items.deaths}
          title={"Deaths"}
          date={items.lastUpdate}
          text={"Number of deaths caused by COVID-19"}
        />
        <Card
          data={items.active}
          title={"Active"}
          date={items.lastUpdate}
          text={"Number of active cases of COVID-19"}
        />
      </div>
      <Dropdown />
      <Chart />
    </>
  );
};

export default App;
