const app = require('./app');
const db = require('./db/index');

// Start the server
const port = process.env.PORT || 4000;

(async () => {
    try {
        await db.authenticate();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

