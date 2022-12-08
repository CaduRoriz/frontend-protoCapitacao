import type { NextPage } from "next";
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Modal from "react-modal";

import getCompanies from "../../services/getCompanies";
import Loja from "../../components/Loja";

type Company = {
  cnpj?: string;
  razao_social?: string;
  nome_fantasia: string;
  cnae_fiscal?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep: string;
  sigla_uf?: string;
  ddd_telefone_1?: string;
};

type Form = {
  cnae: string;
  bairro: string;
  limite: string;
};

const Search: NextPage = () => {
  const [lojas, setLojas] = useState<Company[]>([]);

  const bairros = [
    "Gama",
    "Nucleo Bandeirante",
    "Planaltina",
    "Ceilandia",
    "Recanto Das Emas",
    "Sobradinho",
    "Taguatinga",
    "Samambaia",
    "Brasilia",
    "Guara",
  ];

  const cnaes = [
    {
      number: "4744001",
      description: "Comércio varejista de ferragens e ferramentas",
    },
    {
      number: "4741500",
      description: "Comércio varejista de tintas e materiais para pintura",
    },
    {
      number: "4744099",
      description: "Comércio varejista de materiais de construção em geral",
    },
    {
      number: "4743100",
      description: "Comércio varejista de vidros",
    },
    {
      number: "4744002",
      description: "Comércio varejista de madeira e artefatos",
    },
    {
      number: "4744005",
      description:
        "Comércio varejista de materiais de construção não especificados anteriormente",
    },
    {
      number: "4744006",
      description: "Comércio varejista de pedras para revestimento",
    },

    {
      number: "4744004",
      description:
        "Comércio varejista de cal, areia, pedra britada, tijolos e telhas",
    },
    {
      number: "4744003",
      description:
        "Comércio varejista de cal, areia, pedra britada, tijolos e telhas",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginR: "-50%",
      transform: "translate(-50%, -50%)",
      height: "50%",
      width: "40%",
      backgroundColor: "var(--gray-800)",
    },
  };

  //----------------------------------//
  // useEffect(() => {
  //   (async function () {
  //     const res = await getCompanies({
  //       cnae: "4744001",
  //       bairro: "Gama",
  //       limite: "5",
  //     });

  //     res.map((obj: Company) => console.log(obj.nome_fantasia));
  //   })();
  // }, []); //esse segundo parametro eu passo parametros que quando forem alterados dispara o primeiro parametro(a funcao) novamente

  const schema = yup.object({
    cnae: yup.string().required("Cnae é obrigatório"), //fazer tratamento de dados
    bairro: yup.string().required("Bairro é obrigatório"),
    limite: yup.string().required("Limite é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Form) => {
    (async function () {
      const res = await getCompanies({
        cnae: `${data.cnae}`,
        bairro: `${data.bairro}`,
        limite: `${data.limite}`,
      });

      setLojas(res);
    })();
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchForm}>
        <h2>Realizar Busca</h2>

        <form className={styles.bodyForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fields}>
            <label className={`${styles.label} ${styles.labelCnae}`}>
              Cnae{" "}
              <button onClick={handleOpenModal}>
                <img className={styles.info} src="info.png" />
              </button>
            </label>
            <select
              className={styles.selectForm}
              id="cnae"
              {...register("cnae")}
            >
              <option value="">Selecione</option>
              <>
                {cnaes.map((element, i) => {
                  return (
                    <option key={i} value={`${element.number}`}>{`${i + 1} - ${
                      element.number
                    }`}</option>
                  );
                })}
              </>
            </select>
            <span className={styles.spanErro}>{errors.cnae?.message}</span>
          </div>

          <div className={styles.fields}>
            <label className={styles.label}>Cidade</label>
            <select
              className={styles.selectForm}
              id="bairro"
              {...register("bairro")}
            >
              <option value="">Selecione</option>
              <>
                {bairros.map((element, i) => {
                  return (
                    <option key={i} value={`${element}`}>{`${element}`}</option>
                  );
                })}
              </>
            </select>
            <span className={styles.spanErro}>{errors.bairro?.message}</span>
          </div>

          <div className={`${styles.fields} ${styles.inputLimite}`}>
            <label className={`${styles.label} ${styles.labelMax}`}>
              Limite de lojas (máx:20)
            </label>
            <input
              className={`${styles.inputForm} `}
              type="number"
              max="20"
              min="1"
              id="limite"
              {...register("limite")}
            />
            <span className={`${styles.spanErro}`} id="erroInput">
              {errors.limite?.message}
            </span>
          </div>

          <div className={`${styles.btnSend}`}>
            <button type="submit">Buscar</button>
          </div>
        </form>

        <div className={styles.lojas}>
          {lojas ? (
            <>
              {lojas.map((loja, i) => {
                return <Loja key={i} {...loja} />;
              })}
            </>
          ) : (
            <h1>Nenhuma loja encontrada com esses parametros</h1>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.modalWrapper}>
          <div className={styles.modalHeader}>
            <h2>Lista de Cnaes</h2>
            <button onClick={handleCloseModal}>
              <img src="close.png" />
            </button>
          </div>

          <div className={styles.listaWrapper}>
            {cnaes.map((element, i) => {
              return (
                <div key={i} className={styles.listaItem}>
                  <h3>{i + 1}</h3>
                  <h3>{element.number}</h3>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
