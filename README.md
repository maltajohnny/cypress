Sejam Bem vindos ao Motrix Job Interview Project 
==================
<p align="center">
| <img src="https://i.ibb.co/mBypYjr/motrix-logo.png" alt=""  width="400" height="90" /> |
</p>

O que será necessário ter:



* Editor de Código fonte  - Utilizado | [Visual Studio Code][0]
* Node | [Nodejs][1]
* Git  | [Git][2]  




A seguir, teremos informações importantes como:
```
- Realizar clone do Projeto
- Abri-lo em seu vscode
- Instalar todas as dependências necessárias
- Rodar os testes (Chrome & CLI)

```



Clonando o projeto
==================

Em seu computador, defina o melhor local onde deseja salvar este projeto (Ex: pasta "Documentos"). Siga os passos abaixo para realizar o clone do projeto em seu computador:

Utilizando Windows
==================

1. Abra o Command-Dos:
```
CTR + R > digite cmd e aperte ENTER
```
2. Com o DOS aberto, navegue até o diretório desejado (Ex: Docuementos):
```
cd Documentos
```
3. Clone o projeto:
```
 git clone https://github.com/djonymalta/motrix.git
```

Utilizando Mac
==================
1. Abra o terminal:
```
CMD + barra de espaço (spacebar)
```
2. Com o terminal aberto, navegue até o diretório desejado (Ex: Docuements):
```
cd Documents/
```
3. Clone o projeto:
```
 git clone https://github.com/djonymalta/motrix.git
```
Abrindo o projeto em seu Vscode
==================

Com o Visual Studio code aberto em seu computador, navegue para abrir o projeto seguindo exemplo abaixo:

* Clique no link para visualizar o exemplo [Visual Studio Code][4]

Em seguida, abra o terminal e digite:
```
npm install
```
* Clique para visualizar o exemplo [Install][5]


Para rodar os seus testes no Chrome, você utilizará o seguinte comando a baixo:
```
npx cypress open
```
Para rodar em modo CLI, você utilizará o seguinte comando abaixo:
```
npm run cy:run
```
<p><br></br></p>


<h2>Escrita de cenários com Gherkin</h2>

```
Funcionalidade: Adicionar produto ao carrinho
Como usuário, gostaria de poder acessar a Home Page e adicionar 
Um produto ao carrinho com a finalidade de realizar uma compra

Contexto:
Dado que estou na Home Page

```
```
@positivo
Cenário: Compra com sucesso
E seleciono um produto de minha escolha
E atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então este produto deve ser adicionado ao carrinho com sucesso!
```

```
@positivo
Cenário: Validar valores ao final da compra
E seleciono um produto de minha escolha
E atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então o valor do produto exibido deve ser o mesmo ai finalizar a compra.
```

```
@negativo
Cenário: Adicionar um produto ao carrinho sem passar todas as informações
E seleciono um produto de minha escolha
Mas não atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então deve retornar um “alert“ informando que estes campos são obrigatórios
```
```
@negativo
Cenário: Validar as informações do produto na Home Page
E escolho um produto ao qual desejo realizar validações
Mas não esteja possível visualizar todas as informações deste produto na tela como: Foto, titulo, tamanho, cor, botão “Add to cart”... 
Então este produto não deve ser possível adicionar ao carrinho.
```

Pipeline 
==================
<p align="center">
 <img src="https://i.ibb.co/b7CMW7S/Captura-de-Tela-2023-04-20-a-s-18-48-55.png" alt=""  width="1280" height="720" /> 
</p>

```
```
[0]: https://code.visualstudio.com/download
[1]: https://nodejs.org/en/download
[2]: https://git-scm.com/downloads
[4]: https://ibb.co/YBfNGmg
[5]: https://ibb.co/7QVLRp2
