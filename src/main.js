import {register, mount} from 'riot'
import ProductTable from "./product-table.riot"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

register('product-table', ProductTable);

mount("product-table");