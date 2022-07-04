import { Plus, ArrowLeft } from "phosphor-react";

interface DataTask {
    id: number;
    image: string;
    status: string;
    name: string;
}

const data = [
    {
        id: 1212,
        image: "./src/images/img-card-exemple.png",
        status: "pedding",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "progress",
        name: "Montar estrutura da colu...",
    },
    {
        id: 1234,
        image: "./src/images/img-card-exemple.png",
        status: "done",
        name: "Montar estrutura da colu...",
    },
];

const number = 1;

export function Home() {
    return (
        <div className="w-full min-h-screen bg-blue-50 flex flex-row">
            {/* 
            
                Menu lateral 

            */}

            <header className="w-24 min-h-screen flex flex-col items-center justify-center  bg-yellow-800  ">
                <img
                    src="./src/images/up-logo.png"
                    alt="Logo Bickup"
                    className="w-16 fixed  top-[1.28rem] left-[1rem]"
                />
                <div className="w-[3.62rem] h-[3.62rem] bg-white rounded-2xl flex  items-center justify-center fixed top-[50vh] hover:opacity-90 cursor-pointer transition">
                    <Plus color="#ffb715" size={20} weight="bold" />
                </div>
            </header>

            {/* 
            
                Conteúdo principal

            */}

            <main className="w-full h-full flex py-32 px-20 flex-wrap justify-center">
                {/* btn return */}
                <div className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition">
                    <ArrowLeft size={20} color="#ffffff" weight="bold" />
                </div>










                {data.map((task: DataTask) => {
                    return (
                        <article
                            key={task.id}
                            className="h-[15.56rem] w-[20.06rem] mr-5 mb-10 bg-white border border-blue-100 rounded-lg overflow-hidden flex flex-col hover:border-yellow-800 hover:border-2 hover:opacity-90  transition"
                        >
                            <img
                                src={task.image}
                                alt=""
                                className="h-[15.56rem] w-full"
                            />
                            <div className="py-4 px-4 flex flex-col">
                                <a
                                    href=""
                                    className={`w-16 h-4 rounded-md ${
                                        task.status === "pedding"
                                            ? "bg-red-500"
                                            : task.status === "progress"
                                            ? "bg-yellow-500"
                                            : "bg-green-700"
                                    }`} //verifica o status retorna a cor correta para o component
                                ></a>
                                <div className=" flex items-center justify-between pt-2">
                                    <h2 className="text-base font-bold text-blue-800 block">
                                        {task.name}
                                    </h2>
                                    <div className=" flex items-center justify-between gap-4">
                                        <img
                                            src="./src/images/icons/pencil.svg"
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
                        </article>
                    );
                })}
                



            </main>
        </div>
    );
}
