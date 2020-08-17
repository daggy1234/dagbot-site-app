import express, {Request,Response} from 'express';
const router = express.Router()
const path = require('path')

router.get('*', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

module.exports = router
