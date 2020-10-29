const newLocal = module.exports = (_req, res, next) => {
    res.header('Content-Range', 'produtos 0-20/20')
    next()
}