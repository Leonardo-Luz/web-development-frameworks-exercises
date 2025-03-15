import { Noticia } from "@/types";
import Image from "next/image";
import Link from "next/link";

type cardNoticiaProps = {
	noticia: Noticia
}

const CardNoticia = ({ noticia }: cardNoticiaProps) => {
	return (
		<Link href={`/noticias/${noticia._id}`}>
			<div className="cardNoticia">
				<Image
					src={`/${noticia.imagem}`}
					alt={noticia.titulo}
					width={100}
					height={100}
				/>
				<p className="tituloNoticia">{noticia.titulo}</p>
				<p className="tituloDescricao">{`${noticia.descricao.substring(0, 200)}...`}</p>
			</div>
		</Link>
	)
}

export default CardNoticia;
