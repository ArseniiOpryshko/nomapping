'use client'

import TextAnimation2 from "@/configs/text_animation2";
import styles from "./Contacts.module.css"
import { motion, useInView } from 'framer-motion'
import { useRef } from "react"
import Image from "next/image";

export default function Contacts({trans}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    
    return <section className={styles.contacts_section}>
        <Image width={1230} height={778} className={styles.light1} alt="light_contacts1" src="/lights/contactlight1.png"/>
        <Image width={1419} height={1807} className={styles.light2} alt="light_contacts2" src="/lights/contactlight2.png"/>

        <div className={styles.information} ref={ref}>
            <h3>
                <TextAnimation2 isInView={isInView} text={trans[0]}/>
            </h3>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h5 className={styles.column_header}>{trans[1]}</h5>
                    <p className={styles.data}>tony@nomapping.com</p>
                </div>
                <div className={styles.column}>
                    <h5 className={styles.column_header}>{trans[2]}</h5>
                    <p className={styles.data}>{trans[3]}</p>
                </div>
                <div className={styles.column}>
                    <h5 className={styles.column_header}>{trans[4]}</h5>
                    <p className={styles.data}>office@nomapping.com</p>
                </div>
            </div>
            <div className={styles.social_medias}>
                <h4 className={styles.column_header}>{trans[5]}</h4>
                <div className={styles.social_flex} id="contacts">
                    <a className={styles.link} target="_blank" href="https://www.linkedin.com/company/nomapping/about/">
                        <Image width={43} height={30} src="/socials/linked.png" alt="soc_media6"/>
                    </a>
                    <a className={styles.link} href="https://www.facebook.com/NoMapping" target="_blank">
                        <Image width={30} height={30} src="/socials/facebook.png" alt="soc_media1"/>
                    </a>
                    <a className={styles.link} href="https://vimeo.com/nomapping" target="_blank">
                        <Image width={30} height={30} src="/socials/vimeo.png" alt="soc_media2"/>
                    </a>
                    <a className={styles.link} href="https://www.instagram.com/nomapping" target="_blank">
                        <Image width={30} height={30} src="/socials/instagram.png" alt="soc_media3"/>
                    </a>
                    <a className={styles.link} href="https://twitter.com/NoMapping" target="_blank">
                        <Image width={30} height={30} src="/socials/X_icon.png" alt="soc_media4"/>
                    </a>
                    <a className={styles.link} target="_blank" href="https://www.youtube.com/c/Nomapping">
                        <Image width={43} height={30} src="/socials/youtube.png" alt="soc_media5"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
}