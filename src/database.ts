const mongoose= require('mongoose');
//Uri para mongo atlas
//const URI = `mongodb+srv://${process.env.USER}:${process.env.PW}@cluster0.mzzar.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
// uri para mongo compas
const URI=`mongodb://${process.env.USER}:${process.env.PW}@localhost:27017/${process.env.DB}`;
mongoose.connect(URI,
    {useNewUrlParser: true
    }).then(db => console.log('data base conecction succes', db.connection.host))
    .catch((error)=>console.log(error))