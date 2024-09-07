import Image from "next/image";
import styles from "./Clients.module.css"

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
    return <section className={styles.clients} id="clients">
        <Image className={styles.light} alt="light" src="/lights/logosLight.png" width={733} height={602}/>

        <div className={styles.container}>
            <div className={styles.logosslideToRight}>
                {images1.map((image, index) => (
                    <div className={styles.blockimg} >
                        <Image className={styles.img} width={200} height={80} key={index} src={`/clients/${image}`} alt={`Image1`} />
                    </div>
                ))}
            </div>
            <div className={styles.logosslideToRight}>
                {images1.map((image, index) => (
                    <div className={styles.blockimg} >
                        <Image className={styles.img} width={200} height={80} key={index} src={`/clients/${image}`} alt={`Image2`} />
                    </div>
                ))}
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.logosslideToLeft}>
                {images2.map((image, index) => (
                    <div className={styles.blockimg} >
                        <Image className={styles.img} width={200} height={80} key={index} src={`/clients/${image}`} alt={`Image3`} />
                    </div>
                ))}
            </div>
            <div className={styles.logosslideToLeft}>
                {images2.map((image, index) => (
                    <div className={styles.blockimg} >
                        <Image className={styles.img} width={200} height={80} key={index} src={`/clients/${image}`} alt={`Image4`} />
                    </div>
                ))}
            </div>
        </div>
    </section>
}