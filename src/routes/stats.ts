import express, {Request,Response} from 'express';
const router = express.Router()
const StatSchema = require('../db/botstatschema')
const axios = require('axios')

router.post('/newstats', async (req:Request, res:Response) => {
    const filter = { bot: 'dagbot' }
    const update = {
        servers: req.body.servers,
        commands_called: req.body.commands_called,
        users: req.body.users,
        socket_stats: req.body.socket_stats,
        command_stats: req.body.command_stats,
    }
    let stat = await StatSchema.findOneAndUpdate(filter, update, {
        new: true,
    })
    res.json(stat)
})

router.get('/createdb', async (req:Request, res:Response) => {
    const entry = new StatSchema({
        servers: 0,
        commands_called: 0,
        users: 0,
        socket_stats: [],
        command_stats: [],
    })
    const saved = await entry.save()
    res.json(saved)
})

router.get('/botstats', async (req:Request, res:Response) => {
    const filter = { bot: 'dagbot' }
    let resp = await StatSchema.find(filter)
    res.json(resp)
})

module.exports = router
