// //the login received the user pw encoded 


// application.post("api/users/login", (req,res) =>(
//     const credentials = req.body;
//     const currentUser = req.session[["currentUser"]];
//     if(!currentUser || currentUser.role !=== ADMIN){
//         //sedn errror
//     }
//     const existingUser = db.users.find(
//         (u) => u.username == credentials.username && u.password === credentials.password);
//         //store it in a global reducer so that you are logged in across every screen

//         if(existingUser){
//             req.session["currentUser"]=existingUser;
//             res.json(existingUser);
//         }
//     )
// )

