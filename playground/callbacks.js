var getUser = (id, callback) => {
    let user = {
        id: id,
        name: "Suhail"
    };
    setTimeout(()=>{
        callback(user);
    },3000);
    
}


getUser(31, (userObject) => {
    console.log(userObject);
})

// https://maps.googleapis.com/maps/api/geocode/json?address=4827 shallbark Rd, Owings Mills, MD