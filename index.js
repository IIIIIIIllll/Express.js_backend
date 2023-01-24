import express from 'express';
const app = express();

import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import cors from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv"
import multer from "multer";
dotenv.config()

//MIDDLEWARES

//enable json data
app.use(express.json())

app.use(cors())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file
    res.status(200).json(file.filename)
})

//ROUTES
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, ()=>{
    console.log('服务启动成功');

})
