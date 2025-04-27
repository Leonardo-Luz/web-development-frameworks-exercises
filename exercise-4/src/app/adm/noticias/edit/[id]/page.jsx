import FormEditarNoticia from "@/components/formeditarnoticia"
import { editaNoticia, getNoticia } from "@/lib/noticiasDB"
import { use } from "react"

const EditNoticia = ({ params }) => {
    const { id } = use(params)
    const noticia = use(getNoticia(id))

    return (
        <div>
            <FormEditarNoticia
                id={id}
                titulo={noticia.titulo}
                descricao={noticia.descricao}
                imagem={noticia.imagem}
                operacaoNoticia={editaNoticia}
                editar={true}
            />
        </div>
    )
}

export default EditNoticia
