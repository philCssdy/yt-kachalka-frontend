import { useState } from "react";
import styles from "./CopyButton.module.scss";

export const CopyButton = () => {
    const [link, setLink] = useState("");

    const HandlePaste = async () => {
        const text = await navigator.clipboard.readText();

        if (text.startsWith("http://") || text.startsWith("https://")) {
            setLink(text);
        }
    };

    return (
        <div className={styles.copybutton}>
            <button onClick={HandlePaste}></button>
        </div>
    );
};
