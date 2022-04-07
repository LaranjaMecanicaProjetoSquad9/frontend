import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return (
            <div className="login">
        <form action="" class="form">

        <fieldset class="fildset__principal">

            <div class="titulo">
                <h2 class="login__titulo">Olá Sangue Laranja, tudo bem? 👋</h2>
                <span class="login__mensagem">🍊 Vamos decolar com a mentoria laranja!</span>
            </div>
            
            <label for="email">Seu email:</label>         
            <input type="email" name="email" id="email" class="login__email" placeholder="exemplo@email.com" required/>
            
            <label for="senha">Sua senha:</label>
            <input type="password" id="senha" class="input_senha" placeholder="Digite sua senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?!.*[!@#$%^&*_=+-]).{6,12}$" title="A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e não pode contrer caracteres especiais como (!, @, # e etc) " required/>

            <input type="checkbox" class="custom__checkbox" name="checkbox"/>
            <label for="checkbox">Manter conectado</label>
            <a href="#">Esqueci minha senha</a>       
            
            <button id="enviar" class="entrar">
                Entrar
            </button>
        </fieldset>


        </form>
    </div>
        );
    }
}
 
export default Login;