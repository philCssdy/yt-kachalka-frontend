import { useState } from "react";
import styles from "./Searchinput.module.scss";
import { CardBlock } from "../../CardBlock";
import { ClipBoardButton } from "../../ClipBoardButton";

const TEST_URL = "";

export const SearchInput = () => {
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
    <div>
      <CardBlock>
        <div className={styles.searchBoxInput}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <div className={styles.searchInput}>
                <input
                  placeholder="Вставить ссылку"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <ClipBoardButton onPaste={(text: string) => setUrl(text)} />
              </div>
            </div>
            <button className={styles.submitButton} type="submit">
              Скачать
            </button>
          </form>
        </div>
      </CardBlock>
    </div>
  );
};
