
# Яндекс.Практикум
 

## Проектная работа 14_v1.0.0
 

## MongoDB

   

### Краткая информация о проекте 

Изучение серверной разработки на MongoDB.  
В работе применяются базы данных MongoDB для разработки бэкенда проекта Mesto и разработки API, согласно принципам REST.
Актуальная версия проекта (v1.0.0) доступна по этой [ссылке](https://github.com/Lsnsky/Yandex.Praktikum_Project_14_Authentication)

 
### ПО для выполнения задания:

<li>
Git
<li>
Node.js
<li>
MongoDB
<li>
MongoDB Compass Community
<li>
NPM-пакеты: 
eslint, eslint-config-airbnb-base, eslint-plugin-import, express, mongoose, body-parser, validator

  
  

### Инструкция по сборке:
- сервер запускается командой **npm run start** по адресу **localhost:3000**
- Node.js приложение подключается к серверу Mongo по адресу **mongodb://localhost:27017/mestodb**
- запрос на  **GET/users** возвращает всех пользователей из базы
- запрос **GET/users/:userId** возвращает конкретного пользователя
- запрос **POST/users** создаёт пользователя. В теле POST-запроса на создание пользователя передается JSON-объект с тремя полями: **name**, **about** и **avatar**.
- запрос **GET/cards** возвращает все карточки всех пользователей
- запрос **POST/cards** создаёт карточку. В теле POST-запроса на создание карточки передается JSON-объект с двумя полями: **name** и **link**.
- запрос **DELETE /cards/:cardId** удаляет карточку по идентификатору



   

### Итоги проектной работы:
<li>
Репозиторий Git состоит из веток master и develop
<li>
Node.js и Express использован для сборки кода
<li>
сервер отвечает на GET, POST, DELETE запросы, согласно условий проектной работы 
<li>
приложение подключается к базе данных Mongo
