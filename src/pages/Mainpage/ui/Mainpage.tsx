import { SearchInput } from "../../../widgets/SearchInput";
import { CarBlock } from "../../../widgets/TextBlock";
import styles from "./Mainpage.module.scss";

export const Mainpage = () => {
    return (
        <div className={styles.mainpage}>
            <div>
                <h1>Скачать видео онлайн с Youtube</h1>
            </div>
            <SearchInput />
            <div>
                <CarBlock>
                    <p>
                        Скачать видео с Ютуб с помощью сервиса yt-kachalka бесплатно без
                        регистрации и СМС, продолжение читать в источнике...
                    </p>
                </CarBlock>
            </div>
            <div>
                <CarBlock>
                    <p> 123</p>
                </CarBlock>
            </div>
        </div>
    );
};
