import { Plus, ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import SchedulingsCards from "../components/SchedulingCard";
import LogoUp from "../images/logo-up.svg";
import { Link } from "react-router-dom";

function NoData() {
  return (
    <div className="flex items-center flex-col justify-center w-[18rem] gap-8">
      <img
        src="./src/images/logo-full-grey.svg"
        alt="Logo BrickUp"
        className="w-[100%]"
      />
      <span className="text 3xl font-bold text-blue-500">
        Não há agendamentos
      </span>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/schedulings").then((res) => setData(res.data));
  }, []);

  return (
    <div className="w-screen h-screen min-h-screen bg-blue-50 flex flex-row">
      <nav className="w-24 min-h-screen flex flex-col items-center justify-center bg-yellow-800 fixed top-0 left-0 ">
        <img
          src={LogoUp}
          alt="Logo Bickup"
          className="w-16 fixed  top-[1.28rem] left-[1rem]"
        />
        <Link to="/newscheduling">
          <button
            type="button"
            className="w-[3.62rem] h-[3.62rem] bg-white rounded-2xl flex  items-center justify-center hover:scale-110 cursor-pointer transition"
          >
            <Plus color="#ffb715" size={20} weight="bold" />
          </button>
        </Link>
      </nav>

      <main className="w-full h-full flex ml-24 py-32 px-20 flex-wrap justify-center">
        {data.length === 0
          ? NoData()
          : data.map((props) => SchedulingsCards(props))}
      </main>

      <button className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition">
        <ArrowLeft size={20} color="#ffffff" weight="bold" />
      </button>
    </div>
  );
}
