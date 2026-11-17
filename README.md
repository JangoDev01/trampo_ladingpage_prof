# Portfólio de Tomás Valente

> **Demonstração para aprovação do cliente:** o nome, o perfil, os contactos, os links e os projetos apresentados neste site são fictícios e servem apenas para demonstrar uma proposta de portfólio. Após a aprovação do cliente, todos esses dados e conteúdos serão substituídos pelos dados verdadeiros.

Landing page estática de demonstração para um fotógrafo profissional fictício, com seleção de trabalhos fotográficos e canais de contacto. O projeto usa React para compor a interface, TypeScript para validar os dados e Vite para desenvolvimento e geração dos ficheiros de publicação.

## Código-fonte e ficheiro `.gitignore`

Este projeto não inclui um ficheiro `.gitignore`: a entrega prevê que o cliente tenha acesso ao código-fonte completo do projeto. Assim, não há regras de ignore configuradas para ocultar ficheiros da entrega.

## Objetivos

- Apresentar o portfólio fotográfico em uma única página, com navegação por secções.
- Manter os dados fictícios do perfil e dos trabalhos separados dos componentes visuais para simplificar a substituição pelos dados reais.
- Oferecer uma experiência responsiva em desktop e celular.
- Usar HTML semântico, controles acessíveis por teclado e suporte à preferência por movimento reduzido.
- Gerar um site estático que pode ser publicado em um serviço de hospedagem compatível com Vite.

## Tecnologias

- **React 19:** composição da interface em componentes reutilizáveis.
- **TypeScript:** validação dos dados dos projetos e dos componentes.
- **Vite:** servidor de desenvolvimento e build de produção.
- **Lucide React:** ícones da navegação, dos projetos e dos links sociais.
- **Google Fonts:** Space Mono nos títulos e IBM Plex Mono nos textos, para uma identidade inspirada em interfaces de terminal e computação retro.
- **CSS:** layout, cores, estados interativos, animações e regras responsivas, sem framework adicional.

## Estrutura do projeto

```text
.
├── index.html                    # Documento HTML, metadados e fontes
├── vite.config.ts                # Configuração do Vite e integração React
├── tsconfig.json                 # Opções estritas de compilação TypeScript
├── src/
│   ├── main.tsx                  # Entrada React e importação dos estilos
│   ├── App.tsx                   # Composição das seções da página
│   ├── styles.css                # Tokens visuais, componentes e responsividade
│   ├── vite-env.d.ts             # Tipos do ambiente Vite
│   ├── data/
│   │   └── portfolio.ts          # Perfil, links e projetos
│   └── components/
│       ├── Header.tsx            # Cabeçalho e navegação móvel
│       └── ProjectCard.tsx       # Apresentação reutilizável de um projeto
└── README.md                     # Documentação do projeto
```

## Seções da página

1. **Apresentação:** nome fictício, área de atuação, disponibilidade e chamada para explorar as fotografias.
2. **Trabalho selecionado:** lista demonstrativa de fotografias com categoria, ano e descrição.
3. **Sobre:** resumo profissional fictício, localização e áreas de foco.
4. **Contato:** endereço de e-mail, links sociais e chamada para conversar.
5. **Rodapé:** identificação e atalho para voltar ao início.

O cabeçalho troca os links horizontais por um botão de menu em telas estreitas. Os projetos são renderizados a partir dos dados, então adicionar um item não exige duplicar o HTML do card.

## Decisões visuais

- **Paleta personalizada:** fundo verde quase preto `#02110c`, texto creme `#F1D49A`, texto secundário `#C0C29D`, bordas e apoios oliva `#646756`, e destaques terracota `#D35E36`.
- **Tipografia retro:** Space Mono dá personalidade aos títulos; IBM Plex Mono mantém os textos e metadados na mesma linguagem visual, com boa leitura em tamanhos menores.
- **Layout:** largura de conteúdo limitada em telas grandes, grid de projetos no desktop e coluna única no celular.
- **Movimento:** entrada sutil no primeiro bloco e transições curtas nos controles. A regra `prefers-reduced-motion` reduz essas animações quando o sistema operacional pede menos movimento.
- **Imagens de demonstração:** as fotografias são imagens de referência hospedadas pelo Unsplash e ilustram trabalhos de casamento, retrato e paisagem. Após a aprovação, devem ser substituídas pelas fotografias reais do cliente, com autorização e texto alternativo descritivo.

As cores, fontes e espaçamentos principais estão definidos como variáveis no início de `src/styles.css`, para permitir ajustes centralizados. O metadado `theme-color` em `index.html` acompanha o fundo para harmonizar a interface do navegador em dispositivos móveis.

## Requisitos

- Node.js compatível com Vite 8: versão 20.19 ou superior da linha 20, ou 22.12 ou superior da linha 22.
- npm, incluído com Node.js.

## Instalação e desenvolvimento

Na primeira execução, instale as dependências:

```bash
npm install
```

Inicie o servidor local com atualização automática durante a edição:

```bash
npm run dev
```

O Vite informa no terminal o endereço local, normalmente `http://localhost:5173/`.

## Verificação e build

Execute a checagem de tipos sem gerar arquivos:

```bash
npm run typecheck
```

Gere os arquivos otimizados de produção. O comando também executa a checagem de tipos:

```bash
npm run build
```

O resultado fica em `dist/`. Para conferir localmente a versão de produção:

```bash
npm run preview
```

## Personalização

### Dados fictícios do perfil e contacto

Edite `src/data/portfolio.ts`:

- `name`: nome exibido no cabeçalho, apresentação e rodapé (atualmente fictício).
- `role`: título profissional mostrado na apresentação e no resumo.
- `location`: localização ou disponibilidade.
- `email`: endereço usado pelo link `mailto:` (atualmente de demonstração).
- `socialLinks`: rótulo e URL de cada rede social (atualmente links de demonstração).

Depois da aprovação do cliente, substitua estes valores pelos dados reais e atualize também o título e a descrição para mecanismos de busca em `index.html`.

### Projetos

Cada item demonstrativo em `portfolio.projects` contém:

- `number`: ordem/identificador visual do card.
- `name`: nome do projeto.
- `category`: tipo de trabalho e ano.
- `description`: resumo curto.
- `image`: URL da imagem de capa.
- `imageAlt`: descrição acessível da imagem.

Substitua os exemplos pelos trabalhos fotográficos reais aprovados pelo cliente. O tipo `Project`, no mesmo arquivo, define os campos obrigatórios e ajuda a detectar dados incompletos durante o typecheck.

### Textos das seções

Os dados variáveis vêm de `src/data/portfolio.ts`. Os títulos e textos editoriais fixos estão em `src/App.tsx`. A navegação e o comportamento do menu ficam em `src/components/Header.tsx`; a estrutura de cada case está em `src/components/ProjectCard.tsx`.

### Aparência

Edite as variáveis CSS no início de `src/styles.css` para alterar a paleta e as famílias tipográficas. Os breakpoints de tablet e celular estão nas media queries ao final do arquivo.

## Acessibilidade e manutenção

- As regiões principais usam elementos semânticos (`header`, `main`, `section`, `nav` e `footer`) e títulos em ordem hierárquica.
- O botão do menu móvel informa o estado por `aria-expanded` e tem rótulo acessível.
- As imagens possuem texto alternativo; as capas de projetos carregam sob demanda.
- Os controles mostram foco de teclado, e links com ícone recebem nomes acessíveis.
- Animações são reduzidas quando `prefers-reduced-motion` está ativo.
- Comentários são usados para explicar a organização ou uma decisão; evitar comentários repetitivos mantém o código mais fácil de ler.
- O conteúdo fica em um módulo de dados e a interface é dividida por responsabilidade, reduzindo duplicação e concentrando cada tipo de alteração no arquivo apropriado.

## Publicação

Use um serviço de hospedagem estática compatível com Vite. Configure:

- **Comando de build:** `npm run build`
- **Diretório de publicação:** `dist`

O site não possui servidor próprio, banco de dados ou formulário com envio; o contato principal usa o aplicativo de e-mail do visitante por meio de `mailto:`. As fontes e imagens externas precisam de conexão com a internet para carregar.