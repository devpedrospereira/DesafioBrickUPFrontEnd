import { Plus, ArrowLeft } from "phosphor-react";

interface DataTask {
    id: number;
    image: string;
    status: string;
    name: string;
}

export function Auth() {
    return (
        <div className="w-screen min-h-screen flex flex-row">
            <div className="flex-1 min-h-screen flex px-9 gap-8  flex-col items-center justify-center bg-yellow-800 gap-8 ">
                <img src="./src/images/logoMain.svg" alt="Logo Bickup" />
                <h1 className="text-xl font-bold text-white">Schedules</h1>
            </div>
            <main className="w-[30rem] px-9 min-h-screen flex flex-col items-center justify-center bg-blue-50 ">
                <form className="w-[100%] flex flex-col items-start justify-start">
                    <h1 className="text-4xl font-bold text-blue-800">
                        Fazer Login
                    </h1>

                    <label className=" mt-10 text-lg font-medium text-blue-500">
                        E-mail
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="user@email.com"
                        className="w-[100%] mt-2 border py-5 px-4 text-base font-normal text-blue-500  border-blue-100 rounded bg-white rounded-lg"
                    />

                    <label className=" mt-6 text-lg font-medium text-blue-500">
                        Senha
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="*****************"
                        className="w-[100%] mt-2 mb-7 border py-5 px-4 text-lg font-normal text-blue-500  border-blue-100 rounded bg-white rounded-lg"
                    />

                    <a href="" className="text-lg font-medium text-blue-500 hover:text-blue-800 transition-colors">Esqueci minha senha</a>

                    <button type="submit" className="w-[100%] mt-7 h-16 flex items-center justify-center bg-red-700 rounded-lg  text-lg font-medium text-white hover:opacity-90 transition">
                        Entrar
                    </button>
                </form>
            </main>
        </div>
    );
}
