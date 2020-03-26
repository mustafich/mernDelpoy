const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config")
const {check, validationResult} = require("express-validator")
const User = require("./user")

router.post(
    '/registration',
    [

    ],
    async (req, res, next) => {

        try {


            const user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                city: req.body.city,
                password: await bcryptjs.hash(req.body.password, 12),
                photo: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
                categories: {
                    nature: {
                        id: 1,
                        name: "nature",
                        text: "Природа",
                        home: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
                        img: ["https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-600w-766886038.jpg", "https://image.shutterstock.com/image-photo/autumn-nature-landscape-sunrise-over-600w-779758306.jpg"]
                    },
                    animals: {
                        id: 2,
                        name: "animals",
                        text: "Животные",
                        home: "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg",
                        img: ["https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_960_720.jpg", "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"]},
                }
            })
            const condidate = await User.findOne({email: user.email})
            if (condidate) {
                return res.status(400).json({name: "email", status: false, message: "Такой пользователь есть"})
            }

            await user.save()
            res.status(201).json({name: "email", status: true, message: "Пользователь создан"})

        } catch (e) {
            console.log(e)
        }
    })
router.post(
    '/login',
    // check("emaill","Минимальная длина 1 символ").isLength({
    //     min:1
    // }),
    // check("password","Некорректный Пороль").isLength({
    //     min:1
    // }),
    async (req, res) => {
        try {


            const {email, password} = req.body
            const user = await User.findOne({email})
console.log(user)

            if (true) {

                if (!user) {
                    return res.status(402).json({
                        status: false,
                        name: "email",
                        message: "Пользователь с таким email не найден"
                    })
                }
                const isMatch = await bcryptjs.compare(password, user.password)
                if (!isMatch) {
                    return res.status(402).json({status: false, name: "password", message: "Неверный пороль"})
                }
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get("jwtSecret"),
                {expiresIn: "1h"},
            )

            res.json({
                token, userId: user.id, status: true, user: user, name: "login", message: "Вы вошли в аккаунт!"
            })


        } catch (e) {
            console.log(e)
        }


    })

router.post('/addCategoriesImg', [], async (req, res, next) => {
    let {name, input, email} = req.body
    let path = "categories." + name + ".img"
    console.log(email)
    User.updateOne({email: email}, {$push: {[path]: input}}, function (err, result) {
        if (err) {
            return console.log(err);
        } else if (result.ok===1){
            return res.status(201).json({
                status: true,
                name: "addCategoriesImg",
                message: "Картинка добавлена!"
            })
        }
    });
})
router.post('/addCategories', [], async (req, res, next) => {
    let {nameEng, textRus, inputImg, email} = req.body
    let path = "categories." + nameEng
    const user = await User.findOne({email})
    console.log(email)
    let lastCategoriesId = user.categories[Object.keys(user.categories)[Object.keys(user.categories).length - 1]].id + 1
    let obg = {
        id:lastCategoriesId,name:nameEng||null,text:textRus||null,home:inputImg||null,img:[]||null
    }
    User.updateOne({email: email}, {$set: {[path]: obg}}, function (err, result) {
        if (err) {
            return console.log(err);
        } else if (result.ok===1){
            return res.status(201).json({
                status: true,
                name: "addCategories",
                message: "Категория добавлена!"
            })
        }

    });
})

router.get("/user", (req, res) => {
    User.find({})
        .then(DataUserArr => {
            res.send(DataUserArr);
        });
});

router.post(
    '/userGet',
    async (req, res) => {
        try {
            const {email} = req.body
            const user = await User.findOne({email})
            res.json({
                user: user
            })


        } catch (e) {
            console.log(e)
        }
    })

router.post(
    '/allUser',
    async (req, res) => {
        try {
            const user = await User.find()
                return await res.status(201).json({
                    status: true,
                    name: "allUser",
                    message: "Пользователи найдены",
                    allUser:user

        })} catch (e) {

        }
    })

module.exports = router;