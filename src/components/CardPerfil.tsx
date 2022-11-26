import { StyledCardPerfil } from "./StyledCardPerfil"


type CardPerfilProps = {
    nome: {
        login?: string
        avatar_url?: string
        name?: string
        html_url?: string
    },
}
export function CardPerfil({nome}: CardPerfilProps) {
   
    
    return (
        <StyledCardPerfil>
            <img src={nome.avatar_url} />
            <div className='info'>
                <h2>{nome.name}</h2>
                <a href={nome.html_url}>Ver Perfil GitHub
              
                </a>
            </div>
        </StyledCardPerfil>
        )
}