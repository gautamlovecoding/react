import express from 'express'
const router = express.Router()
import getDetails from '../controller/student.js'

router.get("/student", getDetails )


export default router