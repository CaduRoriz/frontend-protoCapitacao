import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <div className={styles.homeWrapper}>
      

      <div className={styles.text}>
        <h2>O que é o Proto-Capitação?</h2>

        <p>
        O Proto-Capitação é um protótipo de um produto que tem objetivo de auxiliar a captação de novos clientes para
        empreendedores de atacado. Esse protótipo executa a atividade de filtragem de lojas por seu ramo e sua região, retornando informações 
        de contato e de endereço para que o atacadista possa se comunicar diretamente com possíveis novos clientes. 
        Para o desenvolvimento desse produto foi escolhido o ramo de lojas de materiais de construção e o Distrito Federal como localidade. 
        Suponhemos que você (sim, você mesmo meu caro visitante do Proto-Capitação) seja um novo fabricante de parafusos do Distrito Federal e deseja 
        começar sua clientela, você pode optar por meios ortodoxos e ir fisicamente de loja em loja oferecendo o seu produto, ou utilizar do Proto-Capitação 
        e fazer uma consulta e verificar o seu interesse, economizando tempo e dinheiro. 

        </p>

        <h2>Como foi desenvolvido?</h2>

        <p>
        Para o desenvolvimento deste produto houve a necessidade de alimentação de dados a partir da base da dados da receita federal, e a filtragem dos mesmos por área de atuação e região, 
       a criação de um banco de dados com esses dados já filtrados, a constrção de uma api que retornasse esses dados a partir de dois filtros, CNAE(ramo específico) e a cidade, 
       e a construção do frontend onde houve o consumo da api principal além do consumo de api da VIACEP e da Google Maps (eventuais mapas que não renderizarem uma localização condizente é por endereço incompleto oriundo da base de dados).
       
        </p>

        <h2>Como usar?</h2>
        <p> Vá em "BUSCAR" e faça a sua consulta, para uma consulta mais especializada visualzie lista de CNAEs através do botão de informação e faça sua escolha, decida a cidade que você deseja buscar as lojas, e por fim defina o limite de lojas a serem retornadas pela API, com limite máximo de 20 lojas por busca.
</p>

      </div>
     
      
        
    
    
    
       
       
      
      
  
    </div>
  )
}

export default Home
