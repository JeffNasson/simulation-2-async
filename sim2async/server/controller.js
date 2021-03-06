const bcrypt = require('bcrypt');
let session_id_count = 1;
module.exports={
    //Authorization
    register: (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        db.checkUsername([username]).then(user => {
            // console.log(user)
            if (user.length !== 0) {
                res.status(200).send('Username Taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.register_user([username, hash]).then((user) => {
                    console.log(req.session)
                    req.session.user.session_id = session_id_count
                    session_id_count++
                    req.session.user.id = user[0].id
                    req.session.user.username = user[0].username
                    console.log('registered: ', req.session)
                    res.status(200).send()
                })
            }
        })
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
                        req.session.user.id = user[0].id
                        req.session.user.username = user[0].username
                        // console.log(user)
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
        // console.log(req.session);
        req.session.destroy();
        res.status(200).send();
        // console.log(req.session);
    },
    //end Authorization

    //Properties

    newProperty:(req,res)=>{
        const db = req.app.get('db');
        let {desiredRent,monthlyMortgage,propertyName,propertyDescription,address,city,province,zip,image,loanAmount} = req.body;
        const user = req.session.user.id;
        console.log(req.body);

        db.new_property([user,propertyName,propertyDescription,address,city,province,zip,image,loanAmount,monthlyMortgage,desiredRent]) 
            .then(property=>console.log(property)||res.status(200).send(property))
            .catch(err=>console.log(err))
    },

    getProperties:(req,res)=>{
        const db= req.app.get('db');
        // console.log(req.session.user)
        const {id} = req.session.user

        db.get_properties([+id])
            .then(propid=>console.log(propid)||res.status(200).send(propid))
            .catch(err=>console.log(err))
    },

    deleteProperty:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;
        const session_id = req.session.user.id
        // console.log(id)
        // console.log(session_id)

        db.delete_property([session_id,+id])
            .then(updatedHouses=>console.log(updatedHouses)||res.status(200).send(updatedHouses))
            .catch(err=>console.log(err))
    },

    filteredProperties:(req,res)=>{
        const db=req.app.get('db');

        const {val} = req.params;
        const session_id = req.session.user.id;

        db.get_filtered_properties([+val,session_id])
            .then(filteredHouses=>console.log(filteredHouses)||res.status(200).send(filteredHouses))
            .catch(err=>console.log(err))
    },

    //end Properties
}