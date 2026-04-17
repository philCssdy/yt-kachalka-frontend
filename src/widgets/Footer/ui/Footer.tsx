import { Logo } from "../../Logo";

export const Footer = () => {
  return (
    <footer className="pt-10 pb-8 bg-indigo-600">
      <div className="container mx-auto">
        <div className="max-w-80">
          <Logo className="text-white" />
          <span className="text-2xl font-black text-white">yt-kachalka </span>
        </div>
        <p className="mt-4 text-indigo-200">
          Скачайте видео с YouTube в пару кликов!
        </p>
      </div>
    </footer>
  );
};
