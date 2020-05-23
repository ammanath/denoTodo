import {serve} from 'https://deno.land/std@0.50.0/http/server.ts';

const server = serve({port:3000});

for await (const req of server){
    console.log('Incoming req');
    window.onload = e=>console.log('hello');
    req.respond({body:'Message from deno'});

}