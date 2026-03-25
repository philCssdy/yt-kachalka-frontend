import styles from "./CardBlock.module.scss";

interface CardBlockProps {
  children: React.ReactNode;
}

const CardBlock = ({ children }: CardBlockProps) => {
  return <div className={styles.cardblock}>{children}</div>;
};

export default CardBlock;
