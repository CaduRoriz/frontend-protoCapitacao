import api from "./api";

type getCompaniesProps = {
  cnae: string;
  bairro: string;
  limite: string;
};

export default async function getCompanies({
  cnae,
  bairro,
  limite,
}: getCompaniesProps) {
  return api
    .get(`/company/?cnae=${cnae}&bairro=${bairro}&limite=${limite}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}
