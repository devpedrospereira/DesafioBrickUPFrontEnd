import classNames from "classnames";

import { Link } from "react-router-dom";

interface ISchedulingsData {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: "progress" | "pendding" | "done";
  imageSrc: string;
}

export default function SchedulingsCards(props: ISchedulingsData) {
  const { id, title, description, slug, status, imageSrc } = props;
  return (
    <Link to={`/scheduling/${id}`}>
      <div
       
        className="group h-[15.56rem] w-[20.06rem] mr-5 mb-10 bg-white border-2 border-blue-100 rounded-lg overflow-hidden flex flex-col hover:border-yellow-800 hover:opacity-90  transition"
        //   onClick={handleClick}
      >
        <img
          src={`http://localhost:3333/schedulings/image/${id}`}
          alt=""
          className="h-[75%] w-full overflow-hidden"
        />

        <div className="py-4 px-4 flex flex-col">
          <div
            className={classNames("w-16 h-4 rounded-md", {
              "bg-red-500": status === "pendding",
              "bg-yellow-500": status === "progress",
              "bg-green-700": status === "done",
            })}
          />

          <div className=" flex items-center justify-between pt-2">
            <p className="text-base text-blue-800 block">{title}</p>

            <div className=" flex items-center justify-between gap-4">
              <img
                src={"./src/images/icons/pencil.svg"}

                alt="Editar tarefa"
                className="w-[1.25rem] h-[1.25rem] hover:opacity-70 cursor-pointer transition"
              />
              <img
                src="./src/images/icons/trash.svg"
                alt="Excluir tarefa"
                className="w-[1.25rem] h-[1.25rem] hover:opacity-70 cursor-pointer transition"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
