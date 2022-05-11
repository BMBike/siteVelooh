import styles from "../styles/Contato.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Contato() {
  const [razao, setRazao] = useState("");
  const [fantasia, setFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [estadual, setEstadual] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  {
  /*const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");*/
  }
  const [numero, setNumero] = useState("");
  const [nomeFeedback, setnomeFeedback] = useState("");
  const [emailFeedback, setemailFeedback] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cepComplete, setCepComplete] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cidade = e.target.cidade.value;
    const uf = e.target.uf.value;
    const bairro = e.target.bairro.value;
    const endereco = e.target.endereco.value;
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        razao: razao,
        fantasia: fantasia,
        cnpj: cnpj,
        estadual: estadual,
        fone: fone,
        email: email,
        cep: cep,
        cidade: cidade,
        uf: uf,
        bairro: bairro,
        endereco: endereco,
        numero: numero,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast.error("Algo deu errado!");
      console.log(error);
      return;
    }
    toast.success("Enviado, Entraremos em contato!");
    setSubmitted(true);
    console.log(razao, fantasia, cnpj);
  };

  const dispatchCep = async (e) => {
    const { value } = e.target;

    const replacedCep = value?.replace(/[^0-9]/g, "");

    if (replacedCep?.length !== 8) {
      return;
    }

    const response = await fetch(
      `https://viacep.com.br/ws/${replacedCep}/json/`
    );
    const result = await response.json();
    setCepComplete(result);
  };

  const feedback = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact2", {
      body: JSON.stringify({
        nomeFeedback: nomeFeedback,
        emailFeedback: emailFeedback,
        mensagem: mensagem,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast.error("Algo deu errado!");
      console.log(error);
      return;
    }
    toast.success("Enviado!");
    setSubmitted2(true);
    console.log(nomeFeedback, emailFeedback, mensagem);
  };

  return (
    <div className={styles.contato}>
      <div className={styles.formMap}>
        <div className={styles.mapDiv}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3400948361577!2d-47.03140569739221!3d-23.157784301064694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf30e55941ebb5%3A0xf628d6266164d980!2sR.%20Elizabete%20Koler%2C%20303%20-%20Portal%20de%20Santa%20Fe%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1649852864370!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
        <div className={styles.formDiv}>
          <center>
            <h2 className={styles.titleCard}>CADASTRE-SE COMO CLIENTE</h2>
          </center>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <div className={styles.labels}>
              <div className={styles.f1}>
                <label htmlFor="razao">Razão Social: </label>
                <br></br>
                <input
                  type="text"
                  onChange={(e) => setRazao(e.target.value)}
                  id="razao"
                  name="razao"
                  required
                />
                <br />

                <label htmlFor="fantasia">Nome Fantasia: </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setFantasia(e.target.value)}
                  id="fantasia"
                  name="fantasia"
                  required
                />
                <br />

                <label htmlFor="cnpj">CNPJ: </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setCnpj(e.target.value)}
                  id="cnpj"
                  name="cnpj"
                  required
                />
                <br />

                <label htmlFor="estadual">Inscrição Estadual: </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setEstadual(e.target.value)}
                  id="estadual"
                  name="estadual"
                  required
                />
                <br />

                <label htmlFor="fone">Telefone: </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setFone(e.target.value)}
                  id="fone"
                  name="fone"
                  required
                />
                <br />

                <label htmlFor="email">E-mail: </label>
                <br />
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  required
                />
                <br />
              </div>
              <div className={styles.f2}>
                <label htmlFor="cep">CEP: </label>
                <br />
                <input
                  onBlur={dispatchCep}
                  type="text"
                  onChange={(e) => setCep(e.target.value)}
                  id="cep"
                  name="cep"
                  required
                />
                <br />
                <label htmlFor="cidade">Cidade: </label> <br />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={cepComplete.localidade}
                  required
                />
                <br />
                <label htmlFor="uf">Estado: </label> <br />
                <input
                  type="text"
                  value={cepComplete.uf}
                  id="uf"
                  name="uf"
                  required
                />
                <br />
                <label htmlFor="bairro">Bairro: </label>
                <br />
                <input
                  type="text"
                  id="bairro"
                  value={cepComplete.bairro}
                  name="bairro"
                  required
                />
                <br />
                <label htmlFor="endereco">Endereço: </label>
                <br />
                <input
                  type="text"
                  value={cepComplete.logradouro}
                  id="endereco"
                  name="endereco"
                  required
                />
                <br />
                <label htmlFor="numero">Número: </label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setNumero(e.target.value)}
                  id="numero"
                  name="numero"
                  required
                />
                <br />
              </div>
            </div>
            <input className={styles.send} type="submit" />
          </form>
        </div>
      </div>

      <div className={styles.feedbackDiv}>
        <div className={styles.feedbackText}>
          <h2>
            FEEDB<span style={{ color: "#0081ac" }}>AC</span>K
          </h2>
        </div>
        <div className={styles.formDivFeedback}>
          <form onSubmit={feedback}>
            <label htmlFor="nomeFeedback">Nome: </label>

            <input
              type="text"
              onChange={(e) => setnomeFeedback(e.target.value)}
              id="nomeFeedback"
              name="nomeFeedback"
              required
            />

            <label htmlFor="emailFeedback">E-mail: </label>

            <input
              type="email"
              onChange={(e) => setemailFeedback(e.target.value)}
              id="emailFeedback"
              name="emailFeedback"
              required
            />

            <label htmlFor="mensagem">Mensagem: </label>

            <input
              type="text"
              className={styles.mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              id="mensagem"
              name="mensagem"
              required
            />
            <center>
              <input className={styles.send2} type="submit" />
            </center>
          </form>
        </div>
      </div>

      <div className={styles.endereco}>
        <h1>Entre em contato</h1>
        <p>Rua Elizabeth Koller, 303, Portal Santa Fé, Itupeva-SP</p>
        <p>atendimento@bmbike.com.br</p>
        <p>Tel:(11) 3456-7890</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
