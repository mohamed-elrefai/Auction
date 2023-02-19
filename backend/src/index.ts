import 'dotenv/config'
import express, { Application } from 'express'
import MongoUtils from './Utils/Mongo.utils'
import SetupsUtils from './Utils/Setups.utils'
import indexHooks from './Hooks/index.Hooks'

const app: Application = express()

MongoUtils(app)

SetupsUtils(app)

indexHooks(app)