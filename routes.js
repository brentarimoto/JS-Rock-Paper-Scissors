/********** REQUIRES *************/
const express = require('express')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')



/********** APP SETUP *************/
const app = express()
const router = express.Router()

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'pug');
/********** MIDDLEWARE *************/
const csrfProtection = csrf({cookie:true});


/********** ROUTES *************/
router.get('/', (req,res)=>{
    res.render('login', {title:'Login Page', css: 'login'});
})

/********** EXPORTS *************/
module.exports = router