import express, {Request,Response} from 'express';
const router = express.Router()
const Form = require('../db/formschema');
import  axios from 'axios';

async function checkfunc(params:string) {
    const post = await Form.find({ user: params })
    return post
}

async function postfeedback(data:any) {
    try {
        const res = await axios.post(process.env.FEEDBACK_HOOK!, data)
        console.log(`Status: ${res.status}`)
        console.log('Body: ', res.data)
    } catch (err) {
        console.error(err)
    }
}

router.post('/poststats', (req:Request, res:Response) => {
    res.json({ msg: 'Working on it!' })
})

router.get('/responses', async (req:Request, res:Response) => {
    try {
        const forms = await Form.find()
        res.json(forms)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.post('/formdata', async (req:Request, res:Response) => {
    const form = new Form({
        user: req.body.user,
        score: req.body.score,
        feedback: req.body.feedback || NaN,
        updates: req.body.updates || false,
    })
    const check = await checkfunc(req.body.user)
    if (check.length === 0) {
        try {
            const saved = await form.save()
            let data = {
                user: req.body.user,
                embeds: [
                    {
                        title: `New feedback ${req.body.score} from ${req.body.user}`,
                        description: req.body.feedback,
                    },
                ],
            }
            const val = await postfeedback(data)
            res.json(saved)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    } else {
        res.status(409)
        res.json({ message: 'User has aldready submitted feedback' })
    }
})

router.get('/user:hashedName', async (req:Request, res:Response) => {
    console.log(req.params.hashedName)
    const post = await Form.find({ user: req.params.hashedName })
    res.json(post)
})

module.exports = router
