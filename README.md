# 🎨 Refund Front-end: Interface Inteligente para Gestão de Reembolsos

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" style="margin: 5px;">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" style="margin: 5px;">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind Badge" style="margin: 5px;">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" style="margin: 5px;">
</div>

## ✨ Sobre o Projeto: Experiência do Usuário e Fluidez

O **Refund Front-end** é a interface moderna e responsiva que permite aos utilizadores interagir com o sistema de reembolsos de forma intuitiva. Desenvolvido com **React 19** e **Vite**, o projeto foca-se em oferecer uma jornada fluida, desde o envio de comprovativos até à gestão estratégica de solicitações por parte dos gestores.

### 🎯 Funcionalidades e Interfaces

A aplicação adapta-se dinamicamente ao nível de acesso do utilizador autenticado (Colaborador ou Gestor) através de um sistema de rotas protegidas.

| Funcionalidade | O que oferece na UI | Detalhes de Implementação |
| :--- | :--- | :--- |
| **Fluxo de Autenticação** | Ecrãs otimizados para entrada e criação de contas com validação em tempo real. | Utiliza o hook `useActionState` e **Zod** para garantir dados íntegros antes do envio à API. |
| **Painel de Solicitação** | Formulário para o Colaborador enviar despesas, categorias e anexos. | Inclui um componente de **Upload** personalizado para gestão de ficheiros e comprovativos. |
| **Dashboard do Gestor** | Visualização centralizada das solicitações com paginação e pesquisa por nome. | Implementa **filtros dinâmicos** e formatação de moeda local (BRL) para análise financeira. |
| **Navegação Inteligente** | Layouts partilhados e redirecionamento baseado no cargo do utilizador. | Estruturado com `AppLayout` e `AuthLayout` para manter a consistência visual. |

-----

## 🛠️ O Arsenal de Tecnologia: Ecossistema React

A arquitetura foi construída utilizando as melhores práticas de desenvolvimento front-end, focando-se em componentes reutilizáveis e código tipado.

### ⚛️ Core Frontend Stack

| Tecnologia | Função no Projeto | Diferencial Técnico |
| :--- | :--- | :--- |
| **React 19** | Biblioteca principal de UI. | Explora as funcionalidades mais recentes como o hook `use` para consumo de contextos. |
| **TypeScript** | Tipagem de Dados e Props. | Define contratos rígidos (DTOs) para a comunicação com a API, garantindo segurança no desenvolvimento. |
| **Tailwind CSS v4** | Estilização Utilitária. | Design consistente e responsivo com variáveis de tema customizadas no `index.css`. |
| **React Router 7** | Gestão de Navegação. | Orquestra rotas complexas e protege o acesso com base em permissões (`Employee`/`Manager`). |

### 🔧 Ferramentas de Apoio

* **Axios:** Cliente HTTP configurado para comunicação com o servidor local na porta 3333.
* **Zod:** Validação de esquemas para formulários, prevenindo erros de submissão no front-end.
* **Context API:** Gestão de estado global para autenticação através do `AuthProvider`.
* **Tailwind Merge & CLSX:** Utilitários para manipulação inteligente de classes CSS dinâmicas.

-----

## 🎓 Destaques de Arquitetura e Aprendizado

Este projeto demonstra a aplicação de conceitos avançados de engenharia de software no front-end:

1.  **Gestão de Sessão:** Implementação de um `AuthContext` que persiste o token JWT e os dados do utilizador no `localStorage`.
2.  **Componentização Atómica:** Criação de componentes genéricos como `Button`, `Input` e `Select` para reaproveitamento em toda a aplicação.
3.  **Hooks Customizados:** Uso do hook `useAuth` para simplificar o acesso aos dados da sessão de forma limpa.
4.  **UX Otimizada:** Formatação automática de moeda, estados de carregamento (`Loading`) e feedback de sucesso após submissão.

-----

## 🔗 Integração com o Back-end

Este repositório representa o **Front-end** da aplicação. Para que o sistema funcione corretamente, é necessário que o serviço de API esteja em execução. 

O back-end foi desenvolvido em **Node.js** e é responsável por:
* **Autenticação JWT**: Geração e validação de tokens para acesso seguro.
* **Gestão de Base de Dados**: Armazenamento de utilizadores e registos de reembolsos.
* **Storage de Arquivos**: Processamento e armazenamento das imagens dos comprovantes enviados.

Pode encontrar o repositório do Back-end no link abaixo:
👉 **[Repositório Back-end - Refund API](https://github.com/Davi-Lorena/Refund-back)**

---

## 🔧 Como Executar

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/teu-utilizador/refund-front.git](https://github.com/teu-utilizador/refund-front.git)
    ```

2.  **Instalar dependências:**
    ```bash
    npm install
    ```

3.  **Configurar a API:**
    Certifica-te de que o backend está a correr em `http://localhost:3333`.

4.  **Iniciar a aplicação:**
    ```bash
    npm run dev
    ```
-----

## ✍️ Autor e Contato

Este projeto foi desenvolvido com paixão e foco em excelência técnica.

**Davi Lorena**

Github: (https://github.com/Davi-Lorena)

LinkedIn: (https://www.linkedin.com/in/davi-lorena)

-----

*Feito com 💜 e React*
