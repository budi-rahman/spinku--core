const isAdmin = (req, res, next) => {
    console.log(req.session.userRole);
    if(req.session.userRole === 'admin'){
        next()
    } else {
        res.status(400).json({message: '/anda tidak punya akses ke halaman ini'})
    }
}

const isLogin = (req, res, next) => {
    if(req.session.userId){
        next()
    } else {
        res.status(400).json({message: 'harap login terlebih dahulu'})
    }
}

module.exports = {isAdmin, isLogin}