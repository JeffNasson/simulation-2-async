bcrypt = require('bcrypt');
let session_id_count = 1;

module.exports={
    //Authorization
    register:(req,res)=>{
        const db = req.app.get('db')
        const {username,password} = req.body
        console.log(req.body)
        bcrypt
        .hash(password,10)
        .then(hashRes=>{
            db.register_user([username,hashRes])
            .then(user=>console.log(user)||res.status(200).send(user))
            .catch(err=>console.log(err))
            console.log(`Hash: ${hashRes}`)
        }).catch(err=>console.log(err))
    
    },

    loginUser:(req,res)=>{
        const db = req.app.get('db');
        const {username,password} = req.body;

        db.session_user([username])
            .then(user=>{
                if(user.length !== 0){
                    const validPassword = bcrypt.compareSync(password,user[0].password)
                    if(validPassword){
                        req.session.user.session_id = session_id_count
                        session_id_count++
                        req.session.user.user_id = user[0].user_id
                        req.session.user.username = user[0].username
                        res.status(200).send()
                    } else {
                        res.status(200).send('Invalid Password')
                    }
                } else{
                    res.status(200).send('Username does not exist')
                }
            })
    },
    logout:(req,res)=>{
        req.session.destroy();
        res.status(200).send()
    }
    //end Authorization

    //Properties
    //end Properties
}