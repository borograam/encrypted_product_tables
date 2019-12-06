import {register, mount} from 'riot'
import Page from "./page.riot"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

register('page', Page);

mount("page");