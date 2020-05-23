import {Router} from  'https://deno.land/x/oak/mod.ts';
import getToDos from './controllers/todos/get.js';
const router = new Router();

router.get('/', ({response}) =>{
    response.body = 'Todo list API using Deno runtime';
});

router.get('/todos', getToDos);

export default router;