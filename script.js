//get the charachter data

let url=" http://hp-api.herokuapp.com/api/characters"

//creat a function with name getUser
async function getUser(){
    let users;
    try {
        const data= await fetch (url,{
            method: "GET",
            header:{
                "contact type": "application/json"
            }
        })
        users= await data.json() //chech the data recived at console or not
        //console.log(users)
    } catch (err) {
        console.log(err);
        
    }
return users;
}
//getUser()

//display the data from getuser to the Dom
async function displayUser(){
    let users= await getUser()
    //console.log(users)

    users.forEach((user)=>{
        const div=document.createElement("div")
        div.className= "col-lg-4"
        //console.log(user)
        
        div.innerHTML +=`
        <div class="user-container">
        <h3 > Name= ${user.name}</h3>
        <img class="user-flags" width="300px" height="300px" src="${user.image}">
        <h5>Gender= ${user.gender}</h5>
        <h5> Date of Birth= ${user.dateOfBirth}</h5>
        <h5>House=${user.house}</h5>
        </div>
        </div>`
        document.querySelector(".row").appendChild(div);
    })

    
    
}

displayUser()