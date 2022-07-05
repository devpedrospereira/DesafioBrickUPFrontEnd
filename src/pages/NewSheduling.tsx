import { Plus, ArrowLeft, House } from "phosphor-react";
import { ChangeEvent, useState } from "react";

interface DataTask {
    id: number;
    image: string;
    status: string;
    name: string;
}

export function NewSheduling() {
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const handlePreviewImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedImagePreview = selectedImages.map((image) => {
            return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagePreview);
    };

    return (
        <div className="w-full min-h-screen bg-blue-50 flex flex-row">
            <header className="w-24 h-[41rem] flex flex-col items-center justify-center  bg-yellow-800  fixed ">
                <img
                    src="./src/images/logoBrickUp.svg"
                    alt="Logo Bickup"
                    className="w-16 fixed  top-[1.28rem] left-[1rem]"
                />
                <div className="w-[3.62rem] h-[3.62rem] bg-white rounded-full flex  items-center justify-center fixed top-[(50vh)_-_25%] hover:scale-110 cursor-pointer transition ">
                    <House size={32} color="#FFB715" weight="light" />
                </div>
            </header>

            <main className="w-full h-full flex pt-[4.62rem] px-20 flex-wrap justify-center">
                {/* btn return */}
                <div className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition">
                    <ArrowLeft size={20} color="#ffffff" weight="bold" />
                </div>

                <div className="w-[44.25rem] h-[43.5rem] px-20 py-10 bg-white border border-blue-100 rounded-lg flex flex-col items-start justify-start">
                    <form className="w-[100%] flex flex-col items-start justify-start">
                        <h1 className="text-2xl font-bold text-blue-800">
                            Novo Agendamento
                        </h1>

                        <div className="mt-6 mb-7 w-[100%] border-b-2 border-blue-100 "></div>

                        <label className="text-lg font-medium text-blue-500">
                            Título
                        </label>

                        <input
                            type="textarea"
                            name="GetName"
                            className="w-[100%] mt-2 mb-7 border py-5 px-4 text-base font-normal text-blue-500  border-blue-100 rounded bg-blue-50"
                        />

                        <label className=" text-lg font-medium text-blue-500">
                            Descrição{" "}
                            <span className="font-light text-sm">
                                (Máximo de 300 catacteres)
                            </span>
                        </label>

                        <textarea
                            name="GetDescription"
                            wrap="hard"
                            autoComplete="on"
                            maxLength={300}
                            className="resize-none w-[100%] mt-2 mb-7 border py-5 px-4 text-base font-normal text-blue-500  border-blue-100 rounded bg-blue-50 flex-wrap"
                        />

                        <label
                            htmlFor="GetImage"
                            className="text-lg font-medium text-blue-500"
                        >
                            Fotos
                        </label>

                        <label
                            htmlFor="GetImage"
                            className={`w-24 h-24 mt-2 mb-3 rounded-3xl  ${
                                previewImages[0]
                                    ? ""
                                    : "border border-dashed border-yellow-800"
                            }  bg-blue-50 flex items-center justify-center hover:cursor-pointer overflow-hidden`}
                        >
                            {previewImages[0] ? (
                                <img
                                    src={previewImages[0]}
                                    alt="Imagem Selecionada"
                                    className="w-full h-full"
                                />
                            ) : (
                                ""
                            )}

                            <Plus color="#ffb715" size={20} weight="bold" />
                        </label>

                        <input
                            type="file"
                            multiple
                            id="GetImage"
                            name="GetImage"
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={handlePreviewImage}
                        ></input>

                        <button className="w-[100%] h-16 bg-yellow-800 rounded-lg mt-12 flex items-center justify-center text-base font-bold text-white hover:opacity-80 hover:cursor-pointer transition-opacity">
                            Salvar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
