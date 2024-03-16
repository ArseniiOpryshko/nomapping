import styles from "./Projects.module.css"
import Project from "./project/Project"


export default function Projects(){

    const projects = [ 
        {src: "proj.png", name: "FORD’S WINTER FESTIVAL"},
        {src: "proj.png", name: "FORD’S WINTER FESTIVAL"},
        {src: "proj.png", name: "FORD’S WINTER FESTIVAL"},
        {src: "proj.png", name: "FORD’S WINTER FESTIVAL"},
    ] 

    return <section className={styles.projects_section}>
        <img className={styles.light1} alt="light_project" src="lights/projectlight.png"/>

        <h4 className={styles.title}>What have we done</h4>
        <div className={styles.pallete}>
            {projects.map((item, i) => (
                <Project key={i} project={item} index={i} />
            ))}
        </div>
        <div className={styles.btnns}>
            <a className={styles.btn} href="#">All projects</a>
            <a className={styles.btn} href="#">Order new project</a>
        </div>
    </section>
}