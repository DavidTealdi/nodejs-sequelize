require('dotenv').config()
const app = require('./app')
const { sequelize } = require('./database/database')


const port = process.env.PORT || 3001


app.listen(port, async () => {
    await sequelize.sync({ force: false });
    console.log(`Server in Port ${port}`)
})