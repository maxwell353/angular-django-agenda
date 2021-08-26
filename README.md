# angular-django-agenda
Uma pequena aplicação para que um usuário possa gerenciar uma lista de contatos.<br>

Aulas utilizadas para montar o projeto: <br>
Desenvolvimento Django, Angular 1 a 8 -> https://www.youtube.com/channel/UCuFQIjoLcwO0wsbXUS3QJRg <br>
Utilizando fixtures -> https://www.youtube.com/watch?v=K0N4NfWOMVQ <br>
Login, Logout -> https://www.youtube.com/watch?v=3zr602zguhc <br>
Django, Angular com Docker -> https://dragonprogrammer.com/dockerized-django-api-angular-tutorial/ (não concluido) <br>
Estudo de fluxo do git flow -> https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow <br>


Correções: <br>
Erro de access -> https://dzone.com/articles/how-to-fix-django-cors-error <br>
Erro no uso do ngxSpinner -> https://stackoverflow.com/questions/43241193/found-the-synthetic-property-panelstate-please-include-either-browseranimati <br>


Passo a passo para a execução da aplicação: <br>
1- Copie a pasta do github com o comando git clone. <br>
2- Com a pasta angular-django-agenda aberta execute o comando no terminal: py -m venv env, para criar o ambiente virtual que sera utilizado na aplicação. <br>
3- Inicialize o ambiente virtual no terminal, caso seja windows entre na pasta env/Scripts e execute o activate. <br>
4- Ativado o ambiente navegue no terminal (cd.. e cd..) para voltar a pasta raiz e execute o comando: <br>
pip install -r requirements.txt, para instalar as dependencias na api do projeto django(Back-End). <br>
5- Efetuado a instalação das dependecias entre na pasta api e rode o django com o comando: py manage.py runserver. <br>
6- Agora abra outro terminal e entre na pasta angular-django-agenda/agenda e rode o comando: npm install, para instalar todas as dependencias do projeto angular(Front-End). <br>
7- Apos instalar as dependencias rode o comando ng serve, para inicializar o servidor do angular. <br>
8- Por fim abra a url http://localhost:4200/ e navegue na aplicação(Login: admin Senha: 123).
