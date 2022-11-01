import type { NextPage } from "next";
import styles from "./styles.module.scss";
import React, { useState } from "react";

import getCompanies from "../api/search";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Contact: NextPage = () => {
  getCompanies("4744001", "Gama", "5");

  return <h1>Contact me now</h1>;
};

export default Contact;
