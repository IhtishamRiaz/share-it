import axios from "axios";
import { type EmailProps } from "./types";

const sendEmail = async (data: EmailProps) => {
   axios.post("/api/send", data);
};

export default sendEmail;
