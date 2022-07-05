import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";

export function PageConstruction() {
    return (
        <div className="min-w-screen min-h-screen bg-yellow-800 flex flex-col items-center justify-center">
            <img
                src="./src/images/logoMain.svg"
                alt="Logo Bickup"
                className="animate-bounce"
            />

            <h1 className="text-3xl mt-20 text-white font-bold">
                Pagina em Construção{" "}
            </h1>

            <Link to="/">
                <div className="w-[5rem] h-[5rem] mt-10 bg-white rounded-2xl flex items-center justify-center hover:opacity-80 cursor-pointer transition">
                    <ArrowLeft size={30} color="#FFB715" weight="bold" />
                </div>
            </Link>
        </div>
    );
}
