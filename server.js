const express = require('express');
const postsRouter = require('./user-router')

const server = express();

server.use(express.json());
server.use(postsRouter)

//common JS equiv of export default
module.exports = server