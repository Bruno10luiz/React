/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import LinkButton from "./LinkButton/index.jsx"
import imgPerfil from "../assets/perfil.png"
import Title from "./Profile/Title/index"
import ProfileSection from "./Profile/ProfileSection/index"
import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.imgPerfil} src={props.imgPerfil} alt={props.name} />
            <Title>
                <span>Name: </span>
                {props.name}
                <button>Follow</button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>
                <div className={styles.links}>
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
                    <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
                </div>
            </ProfileSection>
        </div>
    )
}