import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

let read = JSON.parse(fs.readFileSync("./../storage.json"));


// To add a user

export let add = (req,res)=>{
    const {userName, email, phoneNumber} = req.body
    let id = uuidv4();
    let data = {
        "id" : id,
        "username" : userName,
        "email" : email,
        "phonenumber" : phoneNumber
    }
    read.push(data)
    fs.writeFile("./../storage.json",  JSON.stringify(read), (err)=>{
        if(err){
            throw err;
        }else{
            res.status(200).send({message : "User added successfully", data : data})
        }
    })
}



// To get all users

export let get = (req,res) =>{
   
    res.status(200).send({message : "Users retrived successfully", data : read})
}




// To get one user

export let getOne = (req,res) =>{
    const {userid} = req.params;
    let data = read.find((item) => item.id == userid);
    if(data) {
        res.status(200).send({message : "User retrived successfully", data : data})
    }
}



// To update any field in user 

export let updateOne = (req,res) =>{
    const {userid} = req.params;
    const {userName, email, phoneNumber} = req.body;

    let data = read.find((item) => item.id == userid);
    let index 
    read.find((item) => {
        if(item.id == userid){
            index =  read.indexOf(item)

        }
        }
    );
    read.splice(index, 1)
    if(userName){
        data.username = userName;
    }
    else if(email){
        data.email= email;
    }
    else if(phoneNumber) {
        data.phonenumber = phoneNumber
    }
    read.push(data)
    fs.writeFile("./../storage.json",  JSON.stringify(read), (err)=>{
        if(err){
            throw err;
        }else{
            res.status(200).send({message : "User updated successfully", data : data})
          
        }
    })    
}



// To update all field in user 

export let update = (req,res) =>{
    const {userid} = req.params;
    const {userName, email, phoneNumber} = req.body;

    let data = read.find((item) => item.id == userid);
    let index 
    read.find((item) => {
        if(item.id == userid){
            index =  read.indexOf(item)

        }
        }
    );
    read.splice(index, 1)
    data.username = userName ? userName: ""
    data.email = email ? email : ""
    data.phonenumber = phoneNumber ?  phoneNumber : ""
    read.push(data)
    fs.writeFile("./../storage.json",  JSON.stringify(read), (err)=>{
        if(err){
            throw err;
        }else{
            res.status(200).send({message : "User updated successfully", data : data})
          
        }
    })    

   
}



//To delete a user

export let deletes = (req,res) =>{
    const {userid} = req.params;

    let index 
    read.find((item) => {
        if(item.id == userid){
            index =  read.indexOf(item)

        }
        }
    );
    read.splice(index, 1)
    fs.writeFile("./../storage.json",  JSON.stringify(read), (err)=>{
        if(err){
            throw err;
        }else{
           res.status(200).send({message : "User deleted successfully", data : []})
        }
    })    
    

}




  


    
   
    


