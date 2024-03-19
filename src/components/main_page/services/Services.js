import Image from "next/image"
import styles from "./Services.module.css"


export default function Services(){
    return <section className={styles.services_section} id="services">
        <Image width={676} height={780} className={styles.light1} alt="light1" src="/lights/service1.png"/>
        <Image width={952} height={1346} className={styles.light2} alt="light2" src="/lights/service2.png"/>


        <h4 className={styles.title}>SERVICES</h4>
        <div className={styles.column}>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>3D-mapping</h3>
                    <Image width={200} height={180} src="/services/mapping.png" alt="mapping"/>
                </div>
                <div className={styles.info}>
                    <p>It is a bright light show projecting at the facade of the building. 3D mapping allows creating optical illusion, to give depth to various subjects, to transform a shape of the building and to create realistic images and gorgeous visual images for the brightest events.</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>VR-animation</h3>
                    <Image width={190} height={180} src="/services/anim.png" alt="animation"/>
                </div>
                <div className={styles.info}>
                    <p>Video-animation, created for watching in VR headset. It allows to show any idea, concept or space that did not existed before. It gives a great immersion, that hepls to generate WOW-effect and grow sales.</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>Motion design</h3>
                    <Image width={200} height={180} src="/services/motion.png" alt="design"/>
                </div>
                <div className={styles.info}>
                    <p>Motion design helps to tell your story in a best way, supporting it with high quality audio accompaniment and bright special effects. Advertisement, presentation videos, graphic images will keep your product unique, inspirational and attractive.</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>Interactive setup</h3>
                    <Image width={200} height={180} src="/services/setup.png" alt="setup"/>
                </div>
                <div className={styles.info}>
                    <p>Cutting-edge multimedia space, that immerse people into a new reality with a unique atmosphere, where people can interact with characters and even create their ones. Interactive installations are used in design of exhibition space, conferences, concert halls and shows.</p>
                </div>
            </div>
            <a className={styles.bttn} href="#">
                ALL SERVICES
            </a>
        </div>
    </section>
}