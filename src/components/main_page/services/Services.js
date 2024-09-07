import Image from "next/image"
import styles from "./Services.module.css"
import Link from "next/link"


export default function Services({trans}){
    return <section className={styles.services_section} id="services">
        <Image width={676} height={780} className={styles.light1} alt="light1" src="/lights/service1.png"/>
        <Image width={952} height={1346} className={styles.light2} alt="light2" src="/lights/service2.png"/>

        <h4 className={styles.title}>{trans('headerService')}</h4>
        <div className={styles.column}>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>{trans('service1')}</h3>
                    <Image width={200} height={180} src="/services/mapping.png" alt="mapping"/>
                </div>
                <div className={styles.info}>
                    <p>{trans('serviceInfo1')}</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>{trans('service2')}</h3>
                    <Image width={190} height={180} src="/services/anim.png" alt="animation"/>
                </div>
                <div className={styles.info}>
                    <p>{trans('serviceInfo2')}</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>{trans('service3')}</h3>
                    <Image width={200} height={180} src="/services/motion.png" alt="design"/>
                </div>
                <div className={styles.info}>
                    <p>{trans('serviceInfo3')}</p>
                </div>
            </div>
            <div className={styles.service}>
                <div className={styles.preview}>
                    <h3>{trans('service4')}</h3>
                    <Image width={200} height={180} src="/services/setup.png" alt="setup"/>
                </div>
                <div className={styles.info}>
                    <p>{trans('serviceInfo4')}</p>
                </div>
            </div>
            <Link className={styles.bttn} href="/nomapping.pdf">
                {trans('serviceBttn')}
            </Link>
        </div>
    </section>
}