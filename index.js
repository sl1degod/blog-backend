// const express = require('express')
// const bodyParser = require('body-parser')
//
// const app = express()
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json())
//
// const posts = [
//     {
//         title: 'Hello world!',
//         text:
//         'синие волны'
//     },
//     {
//         title: 'qwe',
//         text:
//             'qwerty'
//     },
//     {
//         title: 'linkin park',
//         text:
//             'in the end'
//     },
// ];
//
// app.get('/posts', function (req, res) {
//
//     return res.send(posts);
//
// });
//
// app.get('/posts/:id', function (req, res) {
//
//     console.log(req.params)
//     const id = req.params.id;
//     return res.send(posts[id])
//
// });
//
// app.post('/posts', function (req, res) {
//     const data = req.body
//     console.log(data);
//     posts.push(data);
//     return res.send(posts);
// })
//
// app.listen(3333, function () {
//     console.log('--------- SERVER RUNNING ---------')
// })
//



