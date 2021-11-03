import 'dotenv/config';
import app from './app';

const { PORT } = process.env;

const server = app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});

export default server;
