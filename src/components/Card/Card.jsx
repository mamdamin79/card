import styles from "./card.module.scss";
import avatar from "../../assets/images/avatar.jpg";
const Card = () => {
    return (
        <div className={styles.container}>
            <header>
                    <p>level 1</p>
                    <img src={avatar} alt="" />
                    <p>550.12 points</p>
            </header>
            <div className={styles.cover}>
                <h2>Jane Doe</h2>
                <div>
                    <p>Group name</p>
                    <p>juined junuary 2019</p>
                </div>
                <div>
                    <p>position/role</p>
                    <p>city/country</p>
                </div>
                <footer>
                    <div className={styles.iconsContainer}>
                        <p>awards</p>
                        <p>&#127942;</p>
                        <p>2</p>
                    </div>
                    <div className={styles.iconsContainer}>
                        <p>matches</p>
                        <p>&#127918;</p>
                        <p>2</p>
                    </div>
                    <div className={styles.iconsContainer}>
                        <p>pals</p>
                        <p>&#128126;</p>
                        <p>2</p>
                    </div>
                    <div className={styles.iconsContainer}>
                        <p>coffee</p>
                        <p>&#9749;</p>
                        <p>2</p>
                    </div>
                </footer>
            </div>
            <div className={styles.mamad}>
                <h2>Jane Doe</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum a totam deserunt iste non dolor harum consectetur atque esse?</h5>
                <p>hover for more info!</p>
            </div>
        </div>
    );
}
 
export default Card;