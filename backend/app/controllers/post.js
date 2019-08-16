const {Post} = require('../models/post');

const create = async (req , res ,next) => {
    const { title , body } = req.body;
    try {
        const post = await Post.create({title , body});
        if (!post){
            return res.status(401).json({'hello world': 'hello world'})
        }
    } catch (err) {
        next(err);
    }
}

const search = async (req , res , next) => {
    try {
        const posts = Post.create({});
        res.status(200).json(posts);
    }catch(err) {
        next(err);
    }
}

const update = async (req , res , err) => {

}

const deletep = async (req , res , err) => {

}

const detail = async (req , res , err) => {

}