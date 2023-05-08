const app = require('./app');

const PORT = process.env.PORT || 3001; // saving our PORT in a variable

app.listen(PORT, () => console.log(`App running at ${PORT}`)); // this method makes the app works