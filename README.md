# GoReact Desafio 1

Neste desafio tinha que ser desenvolvido um feed de posts estilo Facebook, criando um layout para chegar o mais próximo possível.

Foi configurado uma estrutura ReactJS do zero aplicando Babel, Webpack e Webpack Dev Server.

## Regras

- O Header deve ser um componente separado;
- O Post deve ser um componente separado;
- O header do post aonde estão o avatar, nome e tempo do post devem estar em um componente separado chamado PostHeader;
- Os posts devem estar armazenado no estado (state) do arquivo principal App.js;
- Você deve passar a informação dos posts como uma única propriedade para o componente de Post quando realizar o map no state de posts: <Post data={post} />;
