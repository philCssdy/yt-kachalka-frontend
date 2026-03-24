import { useState } from "react";
import styles from "./CopyButton.module.scss";

export const CopyButton = () => {
    const [link, setLink] = useState("");

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();

            if (text.startsWith("http://") || text.startsWith("https://")) {
                setLink(text);
            } else {
                alert("В буфере не ссылка");
            }
        } catch (err) {
            console.error("Ошибка чтения буфера:", err);
        }
    };

    return (
        <div className={styles.copybutton}>
            <button onClick={handlePaste}>Вставить ссылку</button>
            {link && (
                <p className={styles.link}>
                    {link}
                </p>
            )}
        </div>
    );
};

