import {gravaNoticia} from '@/lib/noticiasDB'
import FormEditarNoticia from '@/components/formeditarnoticia'

export default function NoticiasNew(){
    return(
        <FormEditarNoticia titulo={''} descricao={''} operacaoNoticia={gravaNoticia} editar={false} />
    )
}