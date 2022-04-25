# storenow

## Funcionalidades
Um aplicativo com foco em armazenamento de dados, semelhante ao google drive e dropbox, aonde o usuário pode facilmente guardar seus arquivos (txt, mp3, pdf) com facilidade.

## Telas
As principais telas estão no figma, mas lembrando que se trata apenas de um rascunho, e alguns detalhes podem ser alterados durante o desenvolvimento
https://www.figma.com/proto/419QMfV15xSwwgguzrMX5H/storenow?node-id=6%3A348&scaling=scale-down&page-id=0%3A1

## Api terceiras
Não está nada definido mas talvez utilize a api da aws para armazenamento dos arquivos ao invés de armazenar no banco local.

## Não será desenvolvido no projeto
Não pretendo controlar o plano que o usuário está utilizando, e não será será desenvolvido telas relacionadas ao upgrade do plano.

## Problemas

Não estou conseguindo retirar erro de importação assíncrona das Fontes, pesquisei muito e a solução que mais seria possível seria a seguinte, porém seria um downgrade na versão do expo, e não acho isso legal.

https://pt.stackoverflow.com/questions/460128/problema-com-fontes-no-react-native

## Cronograma

### AA1

Layout:

Finalizar
- Tela inicial
- Tela Login
- Tela Cadastro
- Tela Planos


Navigation:

- Telas Inicias

### AA2

Refatoração do código

Layout:

Finalizar
- Tela Arquivos
- Tela Dash
- Tela Perfil

Funcionalidades:
- Persistência dos dados de login/cadastro
- Alteração dos dados na parte do perfil
- Inclusão e download posterior dos arquivos anexados pelos usuário
- Tela de dash com informações dinâmicas relacionadas ao usuário
- Filtro por nome de arquivo e ordenação dinâmica de arquivos
- Todos os alertas funcionando