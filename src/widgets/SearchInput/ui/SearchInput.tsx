import { useState } from "react";
import styles from "./Searchinput.module.scss";

const TEST_URL = "http://localhost:3000/api/download";

export const SearchInput = () => {
    const [url, setUrl] = useState("");

    async function sendUrlToBack(url:string) {
        if(!url.trim()) {
            alert("Введите ссылку")
            return
        }
        const res = await fetch(TEST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url})
        })
        if(!res.ok) {
            throw new Error("Server Error")
        }
      
        return res.json()
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const data = await sendUrlToBack(url);
            console.log(data)
        }
    
        catch (err) {
            console.log(err)
        }    
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
