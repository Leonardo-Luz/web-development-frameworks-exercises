import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h2>Ooppsss</h2>
            <h3>Não faço a menor ideia do que você está procurando ...</h3>
            <h3>Revise o que você digitou e tente novamente.</h3>
            <h3><Link href='/noticias'>Ou clique aqui para voltar para a página de notícias.</Link> </h3>
        </div>
    )
}