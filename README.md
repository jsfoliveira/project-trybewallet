# 	:woman_technologist: Project Trybewallet

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo  do curso de desenvolvimento web da Trybe. <br>
Neste projeto pude desenvolver uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

*Adicionar, remover e editar um gasto;<br>
*Visualizar uma tabelas com seus gastos;<br>
*Visualizar o total de gastos convertidos para uma moeda de escolha;<br>

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Esse projeto foi desenvolvido no bloco de front-end e foi possível realizar as operações básicas de criação e manipulação de um estado de redux.
Criei store, reducers, actions e dispatchers no Redux.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-trybewallet', isso por conta da exigência do curso.
### Instalação
Precisa utilizar o comando $npm install, a fim de instalar as dependências do projeto.
Para visualizar o projeto, basta usar o comando $npm start.
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.
## Documentação da API de Cotações de Moedas

A página _web_ irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, usei  o seguinte _endpoint_:

- <https://economia.awesomeapi.com.br/json/all>

O retorno desse endpoint será algo no formato:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1-Crie uma página inicial de login com os seguintes campos e características

- A rota para esta página deve ser ‘/’.

- Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

- Crie um botão com o texto ‘Entrar’.

- Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

  - O email está no formato válido, como 'alguem@alguem.com'.

  - A senha possui 6 ou mais caracteres.

- Salve o email no estado da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.

- A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

  **O que será verificado:**

- A rota para esta página deve ser "/"
- Crie um local para que o usuário insira seu email e senha
- Crie um botão com o texto "Entrar"
- Realize as seguintes verificações nos campos de email, senha e botão:
- Se é um e-mail no formato válido;
- Se a senha tem 6 ou mais caracteres;
- Desabilitar o botão `Entrar` caso e-mail e/ou senha estiverem no formato inválido
- Habilitar o botão `Entrar` caso e-mail e senha sejam válidos
- Salve o email no estado da aplicação, com a chave email, assim que o usuário logar
- A rota deve ser mudada para "/carteira" após o clique no botão

#### :footprints:Requisito 2. Crie uma página para sua carteira com as seguintes características

- A rota para esta página deve ser `/carteira`

- O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`

  **O que será verificado:**

- A rota para esta página deve ser "/carteira"
- O componente deve se chamar Wallet e estar localizado na pasta "src/pages"

#### :footprints:Requisito 3. Crie um header para a página de carteira contendo as seguintes características

- Um elemento que exiba o email da pessoa usuária que fez login.

  - Adicione o atributo `data-testid="email-field"`.

  ```
  Dica: você deve pegar o email do estado global da aplicação (no Redux)
  ```

- Um elemento com a despesa total gerada pela lista de gastos.

  - Adicione o atributo `data-testid="total-field"`.

  - Inicialmente esse elemento deve exibir o valor `0`

- Um elemento que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.

  - Adicione o atributo `data-testid="header-currency-field"`.

**O que será verificado:**

- Um elemento que exiba o email do usuário que fez login.
- Crie um elemento com a despesa total gerada pela lista de gastos.
- Crie um elemento que mostre que qual câmbio está sendo utilizado, que será neste caso "BRL"

### Formulário de adição de Despesa

#### :footprints:Requisito 4. Implemente a lógica para armazenar no estado global as siglas das moedas que vêm da API

  * Os valores da chave `currencies` no estado global devem ser puxados através de uma requisição à API, que deve ser feita ao entrar na página `/carteira`, sendo representado pela sigla de cada moeda, exemplo: 'USD', 'CAD', 'EUR'...

    * O endpoint utilizado deve ser: https://economia.awesomeapi.com.br/json/all

    * Remova das informações trazidas pela API a opção 'USDT' (Moeda Tether).

    * A chave `currencies` do estado global deve ser um array.

**O que será verificado:**

  - O valor da chave `currencies` no estado global é um array que possui as siglas das moedas que vieram da API

#### :footprints:Requisito 5. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:

![image](addItem.gif)

- Um campo para adicionar valor da despesa.

  - Adicione o atributo `data-testid="value-input"`.

- Um campo para adicionar a descrição da despesa.

  - Adicione o atributo `data-testid="description-input"`.
    
- Um campo para selecionar em qual moeda será registrada a despesa.

  - O campo deve ter a label `Moeda`.

  - As options devem ser preenchidas pelo valor da chave `currencies` do estado global, implementada no requisito anterior.

  - O campo deve ser um `<select>`.

- Um campo para adicionar qual método de pagamento será utilizado.

  - Adicione o atributo `data-testid="method-input"`.

  - Este campo deve ser um `<select>`. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

- Um campo para selecionar uma categoria (tag) para a despesa.

  - Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

  - O campo deve ser um `<select>`.

**O que será verificado:**

  - Um campo para adicionar o valor da despesa
  - Um campo para adicionar a descrição da despesa
  - Um campo para selecionar em qual moeda será registrada a despesa
  - Um campo para selecionar qual método de pagamento será utilizado
  - Um campo para selecionar uma categoria (tag) para a despesa

#### :footprints:Requisito 6. Salve todas as informações do formulário no estado global

  * Crie um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.

  - Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:

  - Os valores dos campos devem ser salvos no estado da aplicação, na chave **_expenses_**, dentro de um array contendo todos gastos que serão adicionados:

    - O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.

    - Você deverá salvar a cotação do câmbio feita no momento da adição para ter esse dado quando for efetuar uma edição do gasto. Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

    ```
    Atenção nesse ponto: você deverá fazer uma requisição para API e buscar a cotação no momento que o botão de `Adicionar despesa` for apertado. Para isso você deve utilizar um thunk
    ```

  - Após adicionar a despesa, atualize a soma total das despesas (utilize a chave `ask` para realizar essa soma). Essa informação deve ficar no header dentro do elemento com `data-testid="total-field"`

  - Após adicionar a despesa, limpe o valor do campo `valor da despesa`

    As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:

    ```
    expenses: [{
      "id": 0,
      "value": "3",
      "description": "Hot Dog",
      "currency": "USD",
      "method": "Dinheiro",
      "tag": "Alimentação",
      "exchangeRates": {
        "USD": {
          "code": "USD",
          "name": "Dólar Comercial",
          "ask": "5.6208",
          ...
        },
        "CAD": {
          "code": "CAD",
          "name": "Dólar Canadense",
          "ask": "4.2313",
          ...
        },
        "EUR": {
          "code": "EUR",
          "name": "Euro",
          "ask": "6.6112",
          ...
        },
        "GBP": {
          "code": "GBP",
          "name": "Libra Esterlina",
          "ask": "7.2498",
          ...
        },
        "ARS": {
          "code": "ARS",
          "name": "Peso Argentino",
          "ask": "0.0729",
          ...
        },
        "BTC": {
          "code": "BTC",
          "name": "Bitcoin",
          "ask": "60299",
          ...
        },
        "LTC": {
          "code": "LTC",
          "name": "Litecoin",
          "ask": "261.69",
          ...
        },
        "JPY": {
          "code": "JPY",
          "name": "Iene Japonês",
          "ask": "0.05301",
          ...
        },
        "CHF": {
          "code": "CHF",
          "name": "Franco Suíço",
          "ask": "6.1297",
          ...
        },
        "AUD": {
          "code": "AUD",
          "name": "Dólar Australiano",
          "ask": "4.0124",
          ...
        },
        "CNY": {
          "code": "CNY",
          "name": "Yuan Chinês",
          "ask": "0.8278",
          ...
        },
        "ILS": {
          "code": "ILS",
          "name": "Novo Shekel Israelense",
          "ask": "1.6514",
          ...
        },
        "ETH": {
          "code": "ETH",
          "name": "Ethereum",
          "ask": "5184",
          ...
        },
        "XRP": {
          "code": "XRP",
          "name": "Ripple",
          "ask": "1.4",
          ...
        }
      }
    }]
    ```

**O que será verificado:**

  - Um botão com o texto "Adicionar despesa" que salva as informações da despesa no estado global e atualiza a soma de despesas no header

### Tabela de Gastos

#### :footprints:Requisito 7. Desenvolva uma tabela com os gastos contendo as seguintes características:

**O que será verificado:**

- A tabela deve possuir um cabeçalho com os campos `Descrição`, `Tag`, `Método de pagamento`, `Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` e `Editar/Excluir`.

#### :footprints:Requisito 8. Implemente a lógica para que a tabela seja alimentada pelo estado da aplicação

- A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave **_expenses_** que vem do reducer `wallet`.

  - O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente

  - Por padrão, o elemento que exibe a 'Moeda de conversão' deverá ser sempre 'Real'.

  - Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

  - Utilize sempre o formato `0.00` (número - ponto - duas casas decimais)

  **O que será verificado:**

  - A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.

#### :footprints:Requisito 9. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

![image](deleteBtn.gif)

- O botão deve ser o último item da linha da tabela e deve possuir `data-testid="delete-btn"`.

- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global e o header.

**O que será verificado:**

- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`
- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global
- Ao clicar no botão para remover uma despesa, o valor correspondente deve ser subtraído e a despesa total deve ser atualizada no header

#### 10. Crie um botão para editar uma despesa da tabela contendo as seguintes características:

![image](editBtn.gif)

- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"`

- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.

  - O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Você pode reaproveitá-lo.

  - O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"

  - Após a edição da despesa, a ordem das despesas na tabela precisa ser mantida.

  - Obs: para esse requisito, não é necessário popular os inputs com os valores prévios da despesa. A imagem do gif é apenas uma sugestão. 

    **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.

**O que será verificado:**

- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="edit-btn"
- Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global

---
