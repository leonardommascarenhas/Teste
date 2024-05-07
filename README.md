

## Tecnologias e Ferramentas Utilizadas

- Next.js
- React
- Swiper
- TailwindCSS
- TypeScript


# Por dentro do Código

## SearchBar
### Funcionalidades Chave:

Renderização Condicional:
O componente é renderizado somente quando há uma entrada válida no campo de localização do SearchBar, otimizando o uso de recursos e melhorando a performance.

### Cliques nos Itens:
A função onAddressClick é acionada quando um usuário clica em um endereço, permitindo que o estado no componente pai seja atualizado com a localização selecionada.

### useState para Endereços Filtrados:
O estado filteredAddresses armazena os endereços que correspondem à entrada do usuário, crucial para a atualização eficiente da lista conforme o usuário digita.

### useEffect para Atualizações Dependentes:
O hook useEffect é utilizado para redefinir os filteredAddresses sempre que a propriedade locations recebida do componente pai mudar, assegurando que a lista de endereços esteja sempre atualizada com a última pesquisa.

## AddressesList

### Funcionalidades Chave:
Renderização Condicional:
O componente só é renderizado quando há uma entrada válida no campo de localização do SearchBar, o que evita o consumo desnecessário de recursos e melhora a performance.

### Cliques nos Itens:
A função onAddressClick é acionada quando um usuário clica em um endereço, permitindo que o estado no componente pai seja atualizado com a nova localização escolhida.
Estados e Efeitos

### useState para Endereços Filtrados: 
O estado filteredAddresses armazena os endereços que correspondem à entrada do usuário. Isso é crucial para uma atualização eficiente da lista conforme o usuário digita.

### useEffect para Atualizações Dependentes: 
Utilizei o hook useEffect para redefinir os filteredAddresses sempre que a propriedade locations recebida do componente pai mudar. Isso garante que a lista de endereços esteja sempre sincronizada com a última pesquisa.

## HotelCard

### Visual Limpo e Atraente:
Optei por um design simples e responsivo que se adapta bem a qualquer dispositivo, usando TailwindCSS. A ideia é que, independentemente de onde você esteja, a informação seja fácil de ler e agradável aos olhos.

### Imagens que Carregam Rápido:
Usei o componente Image do Next.js para as fotos dos hotéis, que ajusta automaticamente as imagens para carregar rapidamente sem perder qualidade.

## HotelList

### Navegação Suave:
Implementei um carrossel usando o Swiper, que permite deslizar pelos anúncios de forma intuitiva. Achei que seria um jeito bacana de explorar as opções sem pressa.

### Sugestões Inteligentes:
Se a busca não corresponder exatamente ao que está disponível, o sistema sugere automaticamente a cidade mais próxima que tenha anúncios. É um pequeno toque que pode fazer uma grande diferença na busca!
