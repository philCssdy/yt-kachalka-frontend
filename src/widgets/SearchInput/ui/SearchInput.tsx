import { useState } from "react";

const TEST_URL = "";

type SearchInputProps = {
  className?: string;
};

export const SearchInput = ({ className }: SearchInputProps) => {
  const [url, setUrl] = useState("");

  async function sendUrlToBack(url: string) {
    if (!url.trim()) {
      alert("Введите ссылку");
      return;
    }
    const res = await fetch(TEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    if (!res.ok) {
      throw new Error("Server Error");
    }

    return res.json();
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const data = await sendUrlToBack(url);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`w-full mt-8 ${className || ""}`}>
      <form onSubmit={handleSubmit} className="flex w-full gap-x-3">
        <input
          className="flex-1 px-6 py-3 border rounded-lg"
          placeholder="Вставить ссылку"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="px-8 py-3 text-lg font-semibold bg-indigo-600 rounded-lg text-indigo-50 hover:bg-indigo-700"
          type="submit"
        >
          Скачать
        </button>
      </form>
    </div>
  );
};
