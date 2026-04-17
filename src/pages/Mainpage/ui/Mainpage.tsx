import { DropDownList } from "../../../widgets/DropDownList";
import { SearchInput } from "../../../widgets/SearchInput";

export const Mainpage = () => {
  return (
    <div>
      <div className="flex justify-center px-4 mt-10">
        <SearchInput className="w-full max-w-4xl" />
        <DropDownList />
      </div>
      <div className="container flex mx-auto pt-18 pb-36 gap-x-8 ">
        <h1 className="text-5xl font-black tracking-tight">
          Скачайте видео с&nbsp;
          <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
            YouTube&nbsp;
          </span>
          в пару кликов!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Мы сделали это максимально просто! Вставьте ссылку на ролик - и через
          мгновение скачайте его в нужном формате и качестве. Хотите посмотреть
          офлайн, сохранить для монтажа или просто сохранить на память? Наш
          сервис справится с задачей за пару секунд. Никаких сложных настроек —
          всё работает «из коробки»!
        </p>
      </div>
    </div>
  );
};
