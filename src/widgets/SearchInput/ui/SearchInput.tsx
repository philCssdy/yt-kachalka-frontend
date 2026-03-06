import { useState } from "react";
import styles from "./Searchinput.module.scss";

const TEST_URL = "  ";

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
    <div>
      <div className={styles.searchInput}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Вставить ссылку"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button className={styles.submitbutton} type="submit">
            Скачать
          </button>
        </form>
      </div>
    </div>
  );
};
