/* eslint-disable no-unused-vars */
import Card from './components/index.jsx'
import imgPerfil from './assets/perfil.png'
import styles from './components/styles.module.css'
import "./components/LinkButton/styles.module.css"


export default function App() {
  return (
    <>
      <div>
        <Card className={styles.imgPerfil}
          imgPerfil={imgPerfil}
          altImg="img-perfil"
          name="Bruno Luiz"
          bio="Full-stack javascript developer"
          phone="+55(34) 9 9238-0648"
          email="bruno10luiz@gmail.com"
          githubUrl="https://github.com/Bruno10luiz"
          linkedinUrl="https://www.linkedin.com/in/bruno-luiz-camargo-512a47275/" />
      </div>
    </>

  )
}
