import styles from "./CarBlock.module.scss";

interface CardBlockProps {
  children: React.ReactNode;
}

const CarBlock = ({ children }: CardBlockProps) => {
    return <div className={styles.textblock}>{children}</div>;
};

export default CarBlock;
