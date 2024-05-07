This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tecnologias e Ferramentas Utilizadas

Next.js: Um framework React para produção que suporta renderização do lado do servidor e geração de sites estáticos.
React: Biblioteca para construir interfaces de usuário.
Swiper: Biblioteca utilizada para criar sliders interativos, o que é consistente com a estrutura do diretório.
TailwindCSS: Framework CSS para design rápido e responsivo.
TypeScript: Adiciona tipagem estática ao JavaScript, melhorando a segurança e robustez do código.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Por dentro do Código

# AddressesList

# Funcionalidades Chave:
Renderização Condicional: O componente só é renderizado quando há uma entrada válida no campo de localização do SearchBar, o que evita o consumo desnecessário de recursos e melhora a performance.

Cliques nos Itens:
A função onAddressClick é acionada quando um usuário clica em um endereço, permitindo que o estado no componente pai seja atualizado com a nova localização escolhida.
Estados e Efeitos

useState para Endereços Filtrados: 
O estado filteredAddresses armazena os endereços que correspondem à entrada do usuário. Isso é crucial para uma atualização eficiente da lista conforme o usuário digita.

useEffect para Atualizações Dependentes: 
Utilizei o hook useEffect para redefinir os filteredAddresses sempre que a propriedade locations recebida do componente pai mudar. Isso garante que a lista de endereços esteja sempre sincronizada com a última pesquisa.

# Sobre o HotelCard

Visual Limpo e Atraente:
Optei por um design simples e responsivo que se adapta bem a qualquer dispositivo, usando TailwindCSS. A ideia é que, independentemente de onde você esteja, a informação seja fácil de ler e agradável aos olhos.

Imagens que Carregam Rápido:
Usei o componente Image do Next.js para as fotos dos hotéis, que ajusta automaticamente as imagens para carregar rapidamente sem perder qualidade.

# Sobre o HotelList
Navegação Suave:
Implementei um carrossel usando o Swiper, que permite deslizar pelos anúncios de forma intuitiva. Achei que seria um jeito bacana de explorar as opções sem pressa.
Sugestões Inteligentes:

Se a busca não corresponder exatamente ao que está disponível, o sistema sugere automaticamente a cidade mais próxima que tenha anúncios. É um pequeno toque que pode fazer uma grande diferença na busca!
