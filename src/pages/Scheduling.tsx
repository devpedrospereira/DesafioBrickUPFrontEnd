import classNames from "classnames";
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useParams } from "react-router-dom";
import deleteIcon from "../images/icons/trash.svg";
import editIcon from "../images/icons/pencil.svg";
import { useNavigate, Link } from "react-router-dom";
import { deleteScheduling } from "../api/repository";
import { ArrowLeft, House, Plus } from "phosphor-react";
import LogoUp from "../images/logo-up.svg";

interface ISchedulingsData {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: "progress" | "pedding" | "done";
  imageSrc: string;
}

export default function Scheduling() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<ISchedulingsData | undefined>(undefined);

  useEffect(() => {
    api.get(`/schedulings/${id}`).then((res: any) => setData(res.data));
  }, []);

  if (!data) {
    return <></>;
  }

  // const handleEdit = async () => {
  //   api.put(`/schedulings/${id}`).then((res: any) => setData(res.data));
  // }
  const handleDelete = async () => {
    await deleteScheduling(id!);
    navigate("../home", { replace: true });
  };

  return (
    <div className="w-screen min-h-screen bg-blue-50 flex flex-row">
      <nav className="w-24 min-h-screen flex flex-col items-center justify-center bg-yellow-800 fixed top-0 left-0 ">
        <img
          src={LogoUp}
          alt="Logo Bickup"
          className="w-16 fixed  top-[1.28rem] left-[1rem]"
        />
        <Link to="/home">
          <button
            type="button"
            className="w-[3.62rem] h-[3.62rem] bg-white rounded-2xl flex  items-center justify-center hover:scale-110 cursor-pointer transition"
          >
           <House size={32} color="#FFB715" weight="light" />
          </button>
        </Link>
      </nav>

      <main className="w-full h-full flex ml-24 py-16 px-20 flex-wrap justify-center">
        <div className="flex max-w-[48rem] w-full items-center justify-center">
          <div className=" bg-white border  w-full px-16 py-16 border-blue-100 rounded-lg flex flex-col overflow-auto items-start gap-8 justify-start">
            <div className="w-full">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-blue-800">
                  {data.title}
                </h1>

                <div className="flex items-center gap-4">
                  <img
                    // onClick={handleEdit}
                    src={editIcon}
                    alt="Editar"
                    className="w-[1.25rem] h-[1.25rem] hover:opacity-70 cursor-pointer transition"
                  />
                  <img
                    onClick={handleDelete}
                    src={deleteIcon}
                    alt="Excluir"
                    className="w-[1.25rem] h-[1.25rem] hover:opacity-70 cursor-pointer transition"
                  />
                </div>
              </div>

              <div className="w-[100%] border-b-2 border-blue-100 "></div>
            </div>

            <div className="w-full flex justify-center h-[45%]">
              <img
                className="h-full"
                src={`http://localhost:3333/schedulings/image/${id}`}
                alt=""
              />
            </div>

            <div className="w-full">
              <label className="text-base font-medium text-blue-500">
                Status
              </label>
              <div
                className={classNames("w-16 h-4 rounded-md", {
                  "bg-red-500": data.status === "pedding",
                  "bg-yellow-500": data.status === "progress",
                  "bg-green-700": data.status === "done",
                })}
              />
            </div>

            <div className="w-full">
              <label className=" text-base font-medium text-blue-500">
                <label className="text-base font-medium text-blue-500">
                  Descrição
                </label>
              </label>

              <textarea
                className="resize-none h-[10rem] w-[100%] border py-5 px-4 text-base font-normal text-blue-500  border-blue-100 rounded bg-blue-50 flex-wrap"
                readOnly
                disabled={true}
                value={data.description}
              />
            </div>
          </div>
        </div>
      </main>

      <Link
        to="/home"
        className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition"
      >
        <ArrowLeft size={20} color="#ffffff" weight="bold" />
      </Link>
    </div>
  );
}
