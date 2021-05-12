# TinDev

Projeto do Frontend em ReactJS onde foi criado um app baseado nos matches do tinder, no qual os desenvolvedores podem curtir um ao outro com base nas tecnologias que eles têm conhecimento. O projeto foi desenvolvido durante a semana Omnistack7, praticando os principais conceitos de ReactJS, ReactNative e NodeJs com MongoDB. 
Neste projeto eu adicionei uma funcionalidade extra no qual o usuário poderá ver uma página com lista de desenvolvedores que ele deu match. 

[![](https://thumbs2.imgbox.com/d2/6d/r9mRBzrn_t.png)](http://werlendev.cf/tindev/)<br/>
(clique na imagem para ver o site)

---
## Features do projeto
- **Logar e curtir:**

Ao clicar em entrar, o backend verifica se o usuário já esta cadastrado. Caso já esteja ele é logado e não é cadastrado como novo usuário.
Logado, ao clicar no icone de curtir, irá aparecer na tela de ambos os usuários (logado e o que recebeu a curtida) uma notificação que eles deram match.
Ao clicar no botão de curtir é enviado para o backend o ID do usuário logado e o ID do que recebeu a curtida. Através da conexão usando a biblioteca *Socket.io*, o backend retornará uma requisição com uma mensagem de match para ambos os usuários, que fará aparecer a notificão de match ser renderizada em tempo real pelo ReactJS. Veja o exemplo de uso abaixo:

![alt text](https://s4.gifyu.com/images/curtir.gif)

  ---
## Feature extra

- **Visualizar lista de match:**

Ao clicar sobre Matches, o usuário é direcionado para uma página onde é listado todos os devs que deram match. Clicando em um dos devs, o usuário é redirecionado para o perfil do dev no site oficial do GitHub. Veja o exemplo de uso abaixo:

![alt text](https://s4.gifyu.com/images/match.gif)
