<h1 align="center">
  nlw-node-heat
</h1>

<p align="center">
<a href="#pre-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000" />
</p>

<br>

<a id="pre-requisitos"></a>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- Git
- Node v16 ou superior
- NPM ou YARN
- Um aplicativo **OAuth Apps** ativo na sua conta do github

### Rodando o nlw-node-heat

```bash
# Clone este repositório
$ git clone https://github.com/tarcisiodelmondes/nlw-node-heat

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw-node-heat

# Instale as dependências
$ npm install


# Crie um arquivo .env.local e coloque as variáveis de ambiente igual ao .env.example

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

<a id="tecnologias"></a>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- NodeJS
- TypeORM (O Prisma não tem suporte oficial para raspberry py, então utilizei o typeORN como alternativa)
- Socket.IO


<a id="projeto"></a>

## 💻 Projeto

nlw-node-heat é um backend que foi utilizado nas aplições front-end criadas durante a NLW, para fazer authenticação e o sistema de mensagens em tempo real.

<a id="licenca"></a>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p align="center">Feito com 💙 por Tarcisio Delmondes</p>

<br/> :email: &nbsp; Entre em contato comigo: [![Linkedin Badge](https://img.shields.io/badge/-TarcísioDelmondes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tarcisio-delmondes-892567207)](https://www.linkedin.com/in/tarcisio-delmondes)

---