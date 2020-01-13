import Server from './classes/server';
import userRoutes from './routes/usuario';

const server = new Server();


server.app.use('/user', userRoutes);

//levantar express
server.start( () => {
    console.log(`server corriendo en puerto ${ server.port }`);
});