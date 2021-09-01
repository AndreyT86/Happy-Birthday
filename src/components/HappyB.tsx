import React, { FC, useState } from "react";
import { postCards } from "../helpers/moc";

interface HappyBProps {
  setShowModal: (b: boolean) => void;
}

const HappyB: FC<HappyBProps> = ({ setShowModal }) => {
  const [congratulation, setCongratulation] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [finishStatus, setFinishStatus] = useState<boolean>(false);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (congratulation.length < 375) {
      setFinishStatus(true);
    }
  };

  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-50 inset-0 flex items-center justify-center">
      <div className="bg-white px-6 py-3 shadow-md rounded-md h-4/5 w-3/4 ">
        {!finishStatus ? (
          <>
            <div className="w-full   flex justify-between items-center">
              <span className="text-xl font-bold">
                Поздравить с Днем рождения{" "}
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="text-4xl font-light"
              >
                ×
              </button>
            </div>
            <div className="mt-8">
              <label className="text-xs text-gray-400">Кого</label>
              <div> Белова Александра Александровна </div>
            </div>
            <div className="mt-6">
              <label className="text-xs text-gray-400">Выберите открытку</label>
              <div className="flex w-full justify-items-stretch max-w-full gap-8 ">
                {postCards.map((img, i) => (
                  <div
                    onClick={() => setSelectedCard(i)}
                    className="flex-shrink relative "
                  >
                    <img className="w-full rounded-sm " src={img.url}></img>
                    {selectedCard === i && (
                      <div className="absolute inset-0 border-2 bg-black bg-opacity-25  border-blue-500 flex justify-center items-center">
                        {" "}
                        <span className="text-3xl text-white">✓</span>{" "}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full mb-1  flex justify-between items-center">
                <label className="text-xs text-gray-400">
                  Напишите пожелание
                </label>
                <span className="text-xs text-gray-400">
                  {congratulation.length}/375
                </span>
              </div>
              <textarea
                className="border-gray-200 h-24 text-xs resize-none w-full border p-1  rounded-md"
                placeholder="Введите текст поздравления"
                value={congratulation}
                onChange={(e) => setCongratulation(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={clickHandler}
              className="mt-8 hover:opacity-75 px-6 py-2 text-xs text-white rounded-sm bg-gradient-to-r from-blue-700 to-blue-900 "
            >
              Далее
            </button>
          </>
        ) : (
          <>
            {" "}
            <div className="flex flex-col h-full justify-center items-center">
              <span>Ваша картинка отправлена!!!</span>
              <button
                onClick={() => setShowModal(false)}
                className="mt-8 hover:opacity-75 px-6 py-2 text-xs text-white rounded-sm bg-gradient-to-r from-blue-700 to-blue-900"
              >
                Закрыть
              </button>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HappyB;
