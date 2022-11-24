
export async function getPerfil(nome: string) {
    try {
        //fazendo as requisições
        let res = await fetch(`https://api.github.com/users/` + nome)
        let data = await res.json()
        //retorna dados da api
        return data;
    } catch (error) {
        //retornando null caso endereço não entrado
        return null;
    }


}

