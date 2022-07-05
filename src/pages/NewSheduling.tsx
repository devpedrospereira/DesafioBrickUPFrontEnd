import { Plus, ArrowLeft } from "phosphor-react";

interface DataTask {
    id: number;
    image: string;
    status: string;
    name: string;
}

export function NewSheduling() {
    return (
        <div className="w-full min-h-screen bg-blue-50 flex flex-row">
            {/* 
            
                Menu lateral 

            */}

            <header className="w-24 min-h-screen flex flex-col items-center justify-center  bg-yellow-800  ">
                <img
                    src="./src/images/logoBrickUp.svg"
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

            <main className="w-full h-full flex pt-[4.62rem] px-20 flex-wrap justify-center">
                {/* btn return */}
                <div className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition">
                    <ArrowLeft size={20} color="#ffffff" weight="bold" />
                </div>

                
                <div className="w-[44.25rem] h-[43.5rem] px-20 py-10 bg-white border border-blue-100 rounded-lg flex flex-col items-start justify-start">

                    <form className="flex flex-col items-start justify-start">
                        <h1 className="text-2xl font-bold text-blue-800">Novo Agendamento</h1>
                        <div className="pt-6 pb-7 w-[35.25rem] max-h-[10px] bg-blue-100">a</div>
                        <label>Title</label>
                        <input type="textarea" name="GetName" />
                        <label>Descrição</label>
                        <input type="textarea" name="GetDescription" />
                        <label>Fotos</label>
                        <input type="file" name="GetImage"/>
                        <button>Salvar </button>
                    </form>
                        
                </div>
        
                
            </main>
        </div>
    );
}
