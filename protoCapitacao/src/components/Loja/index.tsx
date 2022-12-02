import { useState } from 'react';
import styles from './styles.module.scss';

import getAdress, { getCoords } from '../../services/getAdress';

import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api';

import Modal from 'react-modal';
import React from 'react';


type Company = {
    cnpj?: string,
    razao_social?: string,
    nome_fantasia?: string,
    cnae_fiscal?: string,
    numero?: string,
    complemento?: string,
    bairro?: string,
    cep: string,
    sigla_uf?: string,
    ddd_telefone_1?: string,

}

type Adress= {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf:string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}


Modal.setAppElement('#__next');

export default function Loja(props: Company){
    const [edit, setEdit] = useState(false);
    const [lixo, setLixo] = useState(false);
    const [adress, setAdress] = useState<Adress>()
    //--------------------MODAL-----------------------------//

    const [modalOpen, setModalOpen] = useState(false);
    const [lat,setLat] = useState(0);
    const [long,setLong] = useState(0);

    function checkVazio(word:string){
        const res = word === ""
        return res
    }

    if(modalOpen){
        (async function () {
            const res =  await getAdress(`${props.cep}`)
            setAdress(res);
        })();
    }

    function handleOpenModal() {
        setModalOpen(true)
        getCoordsOnOpen()
        console.log(lat,long)
    }
    
    function handleCloseModal(){
        setModalOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginR: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '80%',
            width: '70%',
            backgroundColor: 'var(--gray-800)',

            
        }
    }

    
        async function getCoordsOnOpen(){
        const res = await getCoords(props.cep)
        setLat(res?.lat)
        setLong(res?.lon)
        }
    //----------------Map------------------------------------//    
   

        // const {} = useLoadScript({process.env})


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDFFBD69EbcjfrCf8PUW73wk9R7fKmDVa4"
      })

    //--------------------FIM-MODAL-----------------------------//

    function onClickIcon(icon: String){
        if(icon == "edit"){
            setEdit(true)

            setTimeout(() => {setEdit(false)}, 1000)
        }

        if(icon == "lixo"){
            setLixo(true)

            setTimeout(() => {setLixo(false)}, 1500)
        }
    }
    
    return (
        

        <div id="modals" className={styles.lojaWrapper}>
            <button className={styles.lojaContainer} onClick={handleOpenModal}>
                <h3>{props.nome_fantasia? props.nome_fantasia : props.razao_social}</h3>
            </button>
            
            <div className={styles.icons}>
                    <button onClick={() => {onClickIcon("edit")}} className={`${edit? styles.editClicked: ""}`} ><img className={styles.edit} src="edit.png"/></button>
                    <button onClick={() => {onClickIcon("lixo")}} className={`${lixo? styles.lixoClicked: ""}`} ><img className={styles.lixo} src="lixo.png"/></button>
            </div>

            <Modal 
                isOpen={modalOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                overlayClassName={styles.modalOverlay}
            >
               
               <div className={styles.modalWrapper}>
                    
                    <div className={styles.modalHeader}>
                            <h1>{props.nome_fantasia}</h1>
                            <button onClick={handleCloseModal}><img src="close.png"/></button>
                    </div>   
                    
                   <div className={styles.adressWrapper}>
                        <div className={styles.contato}>
                                
                                <div className={`${styles.razaoSocial} ${styles.labels}`}>
                                    <label> Razão Social </label>
                                    <span>{props.razao_social? props.razao_social : "Razão Social indisponível"}</span>
                                </div>

                                <div className={`${styles.cnpj} ${styles.labels}`}>
                                    <label> CNPJ</label>
                                    <span>{props.cnpj? props.cnpj : "Cnpj indisponível"}</span>
                                </div>

                                <div className={`${styles.cnae} ${styles.labels}`}>
                                    <label> CNAE  (Ramo de atividade) </label>
                                    <span>{props.cnae_fiscal? props.cnae_fiscal: "Cnae fiscal indisponível" }</span>
                                </div>

                                <div className={`${styles.telefone} ${styles.labels}`}>
                                    <label> Telefone </label>
                                    <span>{props.ddd_telefone_1? props.ddd_telefone_1: "Telefone indisponível" }</span>
                                </div>

                            </div>

                            <h2>Endereço</h2>     
                        
                            <div className={styles.locale}>
                            
                                <div className={styles.adress}>
                                    <div className={`${styles.cep} ${styles.labelsAdress}`}> 
                                        <label> CEP </label>
                                        <span>{props.cep}</span>
                                    </div>
                                    
                                    <div className={`${styles.logradouro} ${styles.labelsAdress}`}> 
                                        <label>Logradouro </label>
                                        <span>{checkVazio(`${adress?.logradouro}`)? "indisponível" : adress?.logradouro}</span>
                                    </div>

                                    <div className={`${styles.bairro} ${styles.labelsAdress}`}> 
                                        <label>Bairro </label>
                                        <span>{checkVazio(`${adress?.bairro}`)? "indisponível" : adress?.bairro}</span>
                                    </div>

                                    <div className={`${styles.numero} ${styles.labelsAdress}`}> 
                                        <label>Número</label>
                                        <span>{props.numero? props.numero : "indisponível"}</span>
                                    </div>

                                    <div className={`${styles.complemento} ${styles.labelsAdress}`}> 
                                        <label>Complemento</label>
                                        <span>{checkVazio(`${adress?.complemento}`)? "indisponível" : adress?.bairro}</span>
                                    </div>
                                    
                                </div>
                            

                                <div className={styles.map}>          
                                               
                                                {isLoaded? (
                                                    <GoogleMap
                                                    mapContainerStyle={{width:'100%', height:'100%'}}
                                                    center={{
                                                        lat: lat,
                                                        lng: long
                                                    }}
                                                    zoom={15}
                                                >
                                                    <Marker position={{
                                                        lat: lat,
                                                        lng: long
                                                    }}/>
                                                </GoogleMap>
                                                ) : (
                                                    <></>
                                                ) }
                        
                                </div>

                            </div>
                        </div> 
                        

               </div>
               
                
                
            </Modal>

        </div>
    )
}
