# NyxTech - Dashboard de Vendas

Um dashboard responsivo para análise de vendas, desenvolvido em **React** com **TypeScript** como projeto de aprendizagem.

## 📊 Sobre o Projeto

O **NyxTech** é uma aplicação web que consome uma API de vendas e apresenta os dados de forma organizada. O projeto foi desenvolvido com foco no aprendizado de TypeScript, demonstrando conceitos como tipagem estática, interfaces, hooks customizados e gerenciamento de estado.

## 🚀 Funcionalidades

### 📈 Dashboard Principal (Resumo)

- **Total de Vendas**: Soma de todas as vendas excluindo falhas
- **Valores Recebidos**: Total de vendas com status "pago"
- **Em Processamento**: Total de vendas com status "processando"
- **Gráfico de Vendas**: Visualização temporal das vendas por status usando Recharts

### 💰 Gestão de Vendas

- **Lista de Vendas**: Visualização completa de todas as transações
- **Detalhes da Venda**: Página individual com informações detalhadas de cada venda
- **Filtros por Período**: Seleção de datas início/fim para análise específica
- **Navegação por Meses**: Botões para navegar rapidamente entre meses

### 🎯 Recursos Técnicos

- **Roteamento**: Navegação SPA com React Router
- **Estados de Loading**: Indicadores visuais durante carregamento
- **Gerenciamento de Estado**: Context API para compartilhamento de dados
- **Hook Customizado**: `useFetch` para requisições HTTP
- **Componentes Tipados**: Interfaces TypeScript para type safety

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Router DOM** - Roteamento para SPA
- **Recharts** - Biblioteca para gráficos responsivos
- **CSS Custom Properties** - Variáveis CSS para tema consistente

## 🔄 API e Tipos de Dados

O projeto consome dados da API `https://data.origamid.dev/vendas/` com a seguinte estrutura:

```typescript
interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
}
```

## 🎨 Design System

O projeto utiliza um sistema de design baseado em CSS Custom Properties:

- **Cores**: Variáveis `--color-1` a `--color-4` para consistência visual
- **Espaçamentos**: Sistema de gaps com `--gap` e `--gap-s`
- **Componentes**: Classes utilitárias como `.box`, `.flex`, `.mb`

## 🔧 Conceitos TypeScript Aplicados

- **Interfaces**: Definição de contratos para dados da API
- **Generic Types**: Hook `useFetch<T>` reutilizável para diferentes tipos
- **Utility Types**: `Omit<IVenda, 'data'>` para modificar interfaces existentes
- **Union Types**: Status e métodos de pagamento com valores específicos
- **Type Safety**: Validação em tempo de compilação

## 💡 Aprendizados Principais

1. **Gerenciamento de Estado Global**: Context API para compartilhar dados de vendas
2. **Custom Hooks**: Abstração de lógica de fetch em hook reutilizável
3. **Type Safety**: Prevenção de erros com tipagem estática
4. **Performance**: Uso de AbortController para cancelar requisições
5. **UX**: Estados de loading e tratamento de erros
6. **Organização**: Separação clara entre componentes, páginas e utilitários

**NyxTech** - Desenvolvido como projeto de aprendizagem em React e TypeScript 🚀
