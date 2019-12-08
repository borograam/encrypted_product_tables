/*это входная точка для webpack. Отсюда он начинает рекурсивно ходить по зависимостям для понимания того,
* что именно надо использовать. Всё это он собирает, сжимает и кладёт в bundle.js */
import {register, mount} from 'riot' // импортируем функции регистрации и монтирования библиотеки riot.js
import Login from "./login.riot" // импортируем наш главный riot тэг
import 'bootstrap' // подключаем bootstrap JavaScript (оно само возьмёт jquery и popper)
import 'bootstrap/dist/css/bootstrap.min.css'; // подключаем bootstrap стили

register('login', Login); // регистрируем тэг Login под именем для использования login

mount("login"); // монтируем тэг login на странице