import React from "react"; 

function App() {
  return (
    <div className="login">
        <form action="./cadastro_concluido.html" class="formulario flex flex--coluna">
                <fieldset>
                    <legend class="formulario__legenda">Informações básicas</legend>
                    <div class="input-container">
                        <input name="nome" id="nome" class="input" type="text" placeholder="Nome" required/>
                        <label class="input-label" for="nome">Nome</label>
                    </div>
                    <div class="input-container">
                        <input name="funcao" id="funcao" class="input" type="text" placeholder="Função" required/>
                        <label class="input-label" for="funcao">Função</label>
                    </div>
                    <div class="input-container">
                        <input name="email" id="email" class="input" type="email" placeholder="Email" required/>
                        <label class="input-label" for="email">Email</label>
                    </div>
                    <div class="input-container">
                        <input name="senha" id="senha" class="input" type="text" placeholder="Senha" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?!.*[!@#$%^&*_=+-]).{6,12}$" title="A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e não pode contrer caracteres especiais como (!, @, # e etc) " required/>
                        <label class="input-label" for="senha">Senha</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="formulario__legenda">Informações pessoais</legend>
                    <div class="input-container">
                        <input name="nascimento" id="nascimento" class="input" type="date" placeholder="Data de nascimento" data-tipo="dataNascimento" required/>
                        <label class="input-label" for="nascimento">Data de nascimento</label>
                    </div>
                    <div class="input-container">
                        <img src="https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103596_960_720.png" width={40} alt="" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="formulario__legenda">Endereço</legend>
                    <div class="input-container">
                        <input name="cep" id="cep" class="input" type="text" placeholder="CEP"/>
                        <label class="input-label" for="cep">CEP</label>
                    </div>
                    <div class="input-container">
                        <input name="logradouro" id="logradouro" class="input" type="text" placeholder="Logradouro"/>
                        <label class="input-label" for="logradouro">Logradouro</label>
                    </div>
                    <div class="input-container">
                        <input name="cidade" id="cidade" class="input" type="text" placeholder="Cidade"/>
                        <label class="input-label" for="cidade">Cidade</label>
                    </div>
                    <div class="input-container">
                        <input name="estado" id="estado" class="input" type="text" placeholder="Estado"/>
                        <label class="input-label" for="estado">Estado</label>
                    </div>
                </fieldset>
                <button class="botao">Cadastrar</button>
            </form>
    </div>
  );
}

export default App;
