import { useState } from "react";
import styles from "./searchinput.module.scss";

const TEST_URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export const SearchInput = () => {
  const [url, setUrl] = useState("");

  async function searchUrl(url: string): Promise<any> {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("По данной ссылке невозможно найти видео");
      }

      const data = await res.json();

      console.log(data);

      return data;
    } catch (err) {
      console.log("Error:", err);
      throw err;
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await searchUrl(url);
  };

  return (
    <div className={styles.searchInput}>
      <label>Введите Url</label>
      <form onSubmit={handleSubmit}>
        <input value={url} onChange={(e) => setUrl(e.target.value)}></input>
        <button type="submit">Скачать</button>
      </form>
    </div>
  );
};
