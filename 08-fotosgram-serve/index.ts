import Server from './classes/server';

const server = new Server();


//levantar express

server.start( () => {
    console.log(`server corriendo en puerto ${ server.port }`);
});