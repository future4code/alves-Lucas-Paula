import { useState } from 'react'

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.

  const [trocaTela, setTrocaTela] = useState(false)
  const [telaCurtida, setTelaCurtida] = useState(true)
  const [valorComent, setValorComent] = useState('')
  const [listaComent, setListaComent] = useState([])
  const [curtida, setCurtida] = useState(0)

  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if (telaCurtida) {
      setCurtida(curtida + 1)
      setTelaCurtida(false)
    } else {
      setCurtida(curtida - 1)
      setTelaCurtida(true)
    }
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    if (trocaTela) {
      setTrocaTela(false)
    } else {
      setTrocaTela(true)
    }

  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    setValorComent(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    const novaLista = [...listaComent, valorComent]
    setListaComent(novaLista)
    setValorComent('')
    setTrocaTela(false)
  };

  /* Passo6 */
  const caixaDeComentario = trocaTela ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={valorComent}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={enviarComentario}>Enviar</button>
    </>
  ) : (
    // Passo8
    <>
      {listaComent.map((comentario, index) => {
        return (
          <div key={index}>
            <p>{comentario}</p>
          </div>
        )
      })}
    </>
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Foto Usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {curtida}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {telaCurtida ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {listaComent.length}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {trocaTela ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;