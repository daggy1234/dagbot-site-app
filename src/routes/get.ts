import express, {Request,Response} from 'express';
const router = express.Router()
const db = require('../db/formdb')

router.get('/', (req:Request, res:Response) => {
    res.json({ msg: 'API WORKS' })
})

router.get('/', (req:Request, res:Response) => {})

module.exports = router
