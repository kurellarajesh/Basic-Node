const express = require('express');
const app = express();
const apiRoutes = require('./routes');

const {ServerConfig, Logger} = require('./config');

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`app is running on PORT ${ServerConfig.PORT}`);
});
