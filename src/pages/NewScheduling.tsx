import { Plus, ArrowLeft, House } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import LogoUp from "../images/logo-up.svg";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Form } from "@unform/web";
import { ImageInput, Input, TextArea } from "../components/Inputs";
import { createScheduling } from "../api/repository";

export default function NewSheduling() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const navigate = useNavigate();
  let flag = false;

  const handlePreviewImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files);
    const selectedImagePreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagePreview);
  };

  async function handleSubmit(form: any) {
    flag = true;
    const data = {
      slug: "",
      status: "pendding",
      title: form.title,
      description: form.description,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    if (form.image) {
      formData.append("image", form.image, form.image.name);
    }

    await createScheduling(formData);
    navigate("/home");
  }

  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-row">
      <nav className="w-24 min-h-screen flex flex-col items-center justify-center bg-yellow-800 fixed top-0 left-0 ">
        <img
          src={LogoUp}
          alt="Logo Bickup"
          className="w-16 fixed  top-[1.28rem] left-[1rem]"
        />
        <Link to="/home">
          <button className="w-[3.62rem] h-[3.62rem] bg-white rounded-2xl flex  items-center justify-center hover:scale-110 cursor-pointer transition">
            <House size={32} color="#FFB715" weight="light" />
          </button>
        </Link>
      </nav>

      <main className="w-full h-full flex p-20 ml-24 flex-wrap justify-center">
        {/* btn return */}
        <Link to="/home">
          <div className="w-[3rem] h-[3rem] bg-yellow-800 rounded-2xl fixed right-7 top-6 flex  items-center justify-center hover:opacity-80 cursor-pointer transition">
            <ArrowLeft size={20} color="#ffffff" weight="bold" />
          </div>
        </Link>

        <div className="w-[48rem] p-20 bg-white border border-blue-100 rounded-lg flex flex-col items-start justify-start">
          <Form
            onSubmit={handleSubmit}
            className="w-[100%] flex flex-col items-start justify-start gap-8"
          >
            <div className="w-full">
              <h1 className="text-2xl font-bold text-blue-800">
                Novo Agendamento
              </h1>

              <div className="mt-6 mb-7 w-[100%] border-b-2 border-blue-100 "></div>
            </div>

            <div className="w-full">
              <label className="text-lg font-medium text-blue-500">
                T??tulo
              </label>

              <Input
                type="text"
                name="title"
                className="w-[100%] border py-5 px-4 text-base font-normal text-blue-500  border-blue-100 rounded bg-blue-50"
              />
            </div>
            <div className="w-full">
              <div className="flex align-baseline gap-2">
                <label className=" text-lg font-medium text-blue-500">
                  Descri????o{"  "}
                  <span className="font-light text-sm">
                    (M??ximo de 300 catacteres)
                  </span>
                </label>
              </div>

              <TextArea
                name="description"
                type="text"
                wrap="hard"
                autoComplete="on"
                maxLength={300}
                className="resize-none w-[100%] h-[10rem] border py-5 px-4 text-base font-normal text-blue-500 border-blue-100 rounded bg-blue-50 flex-wrap"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="image"
                className="text-lg font-medium text-blue-500"
              >
                Fotos
              </label>

              <label
                htmlFor="image"
                className={classNames(
                  "w-24 h-24 rounded-3xl bg-blue-50 flex items-center justify-center hover:cursor-pointer overflow-hidden",
                  {
                    "border border-dashed border-yellow-800": !previewImages[0],
                  }
                )}
              >
                {previewImages[0] && (
                  <img
                    src={previewImages[0]}
                    alt="Imagem Selecionada"
                    className="w-full h-full"
                  />
                )}

                <Plus color="#ffb715" size={20} weight="bold" />
              </label>

              <ImageInput
                type="file"
                id="image"
                name="image"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handlePreviewImage}
              />
            </div>

            <button
              type="submit"
              disabled={flag}
              className="w-[100%] h-16 bg-yellow-800 rounded-lg flex items-center justify-center text-base font-bold text-white  hover:opacity-80 hover:cursor-pointer disabled:opacity-80 transition-opacity"
            >
              Salvar
            </button>
          </Form>
        </div>
      </main>
    </div>
  );
}
