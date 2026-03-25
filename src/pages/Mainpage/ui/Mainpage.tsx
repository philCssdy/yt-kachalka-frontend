import { CardBlock } from "../../../widgets/CardBlock";
import { SearchInput } from "../../../widgets/SearchInput";
import styles from "./Mainpage.module.scss";

export const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div>
        <h1>Скачать видео онлайн с Youtube</h1>
      </div>
      <SearchInput />
      <div>
        <CardBlock>
          <p>
            Скачать видео с Ютуб с помощью сервиса yt-kachalka бесплатно без
            регистрации и СМС, продолжение читать в источнике...
          </p>
        </CardBlock>
      </div>
      <div>
        <CardBlock>
          <p> 123</p>
        </CardBlock>
      </div>
    </div>
  );
};
