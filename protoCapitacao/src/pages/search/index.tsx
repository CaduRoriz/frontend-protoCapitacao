import type { NextPage } from 'next'
import styles from  './styles.module.scss';
import React,{ useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Company {
    nome_fantasia: string,
    blabla: string
}

const Search: NextPage = () => {

  //----------------------------------//

  type Form = {
    cnae: string,
    bairro: string,
    limite: string
  }

  const schema = yup.object({
    cnae: yup.string().required("A seleção do ramo da loja é obrigatória!"), //fazer tratamento de dados 
    bairro: yup.string().required("A seleção da cidade é obrigatória!"),
    limite: yup.number().required("A seleção do limite de lojas a serem resgatas é obrigatória!")
  });

  const {register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data:Form) => {
    console.log(data)
  }

  return (
   <div className={styles.searchWrapper}>
      <div className={styles.searchForm}>
            <h2>Fazer busca</h2>
            <div className={styles.bodyForm}>
            
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.fields}>
                    <label>Cnae</label>
                    <select id="cnae" {...register("cnae")}>
                        <option value="">Selecione</option>
                        <option value="4744001">Primeiro</option>
                        <option value="0">Teste</option>   
                    </select>
                    <span>{errors.cnae?.message}</span>
                </div>

                <div className={styles.fields}>
                    <label>Bairro</label>
                    <select id="bairro" {...register("bairro")}>
                        <option value="">Selecione</option>
                        <option value="Gama">Gama</option>
                        <option value="0">Teste</option>   
                    </select>
                    <span>{errors.bairro?.message}</span>
                </div>

                <div className={styles.fields}>
                    <label>Limite de busca</label>
                    <input type="text" id="limite"  {...register("limite")} />
                    <span>{errors.limite?.message}</span>
                </div>

                <div className={styles.btnSend}>
                    <button type="submit">Buscar</button>
                </div>
              </form>

            </div>
      </div>
    
   </div>
  )
}

export default Search


// const [companies, setCompanies] = useState<Company[]>([])

// React.useEffect(() => {
//   (async function(){
//     const updatedCompanies = await getCompanies(4744001, 'Gama', 5)
//     setCompanies(updatedCompanies)
//   })()
// }, [])