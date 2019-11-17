import { config } from 'dotenv';
import server from './api/server';

config();
const { PORT, HOST } = process.env;

server.listen(PORT, HOST);
