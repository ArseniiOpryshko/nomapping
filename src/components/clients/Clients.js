import styles from "./Clients.module.css"
import Marquee from "react-fast-marquee";

const images1 = [
    '1cbitrix.png',
    'Amway.png',
    'bmw-logo.png',
    'ford.png',
    'Bonaqua.png',
    'gazprom.png',
    'IDCEE.png',
    'lexus.png',
    'loreal.png',
    'multiplex.png',
];
const images2 = [
    'Oberig.png',
    'Pepsi.png',
    'Roshen.png',
    'Sassofono.png',
    'shneider.png',
    'siemens.png',
    'Splat.png',
    'syngenta.png',
    'turbo.png',
    'КВЗ.png',
];
export default function Clients(){
    return <section className={styles.clients}>
        <img className={styles.light} alt="light" src="lights/logosLight.png"/>

        <div className={styles.container}>
            <div className={styles.logosslideToRight}>
                {images1.map((image, index) => (
                    <div className={styles.blockimg} >
                        <img className={styles.img} key={index} src={`clients/${image}`} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <div className={styles.logosslideToRight}>
                {images1.map((image, index) => (
                    <div className={styles.blockimg} >
                        <img className={styles.img} key={index} src={`clients/${image}`} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.logosslideToLeft}>
                {images2.map((image, index) => (
                    <div className={styles.blockimg} >
                        <img className={styles.img} key={index} src={`clients/${image}`} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <div className={styles.logosslideToLeft}>
                {images2.map((image, index) => (
                    <div className={styles.blockimg} >
                        <img className={styles.img} key={index} src={`clients/${image}`} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    </section>
}