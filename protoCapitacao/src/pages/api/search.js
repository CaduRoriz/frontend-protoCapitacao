import React, { useState, useEffect } from "react";

export default function getCompanies(cnae, bairro, limite) {
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(
    `http://localhost:3003/company/?cnae=${cnae}&bairro=${bairro}&limite=${limite}`,
    options
  )
    .then((data) => {
      console.log(data.json());
    })
    .catch((error) => console.log(error));
}
