import React from "react";
import styles from "./ClipBoardButton.module.scss";

interface ClipBoardButtonProps {
  onPaste: (text: string) => void;
}

export const ClipBoardButton: React.FC<ClipBoardButtonProps> = ({
  onPaste,
}) => {
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      onPaste(clipboardText);
    } catch {
      alert("Не удалось получить текст из буфера обмена");
    }
  };

  return (
    <div className={styles.clipboardbutton}>
      <button type="button" onClick={handlePaste} title="Вставить из буфера">
        *svg*
      </button>
    </div>
  );
};
