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

                
                <div>
                    
                </div>
        
                
            </main>
        </div>
    );
}
