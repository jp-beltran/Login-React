import './style.css';

export function Login(){
  return(
    <main>
        <form action="">
            <h1>Login</h1>
            <input type="text" placeholder='Usuário' />
            <input type="text" placeholder='Senha' />

            <button>Enviar</button>
        </form>
    </main>
  )
}