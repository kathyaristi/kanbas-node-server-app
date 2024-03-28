function Lab5(app){


    app.get("/a5/assignment", (req, res)=>
    res.json(assignment));
    res.send(assignment.name);

    app.get("/a5/calculator",(req,res)=>{
        const num1= parseInt(req.query.num1);
        const num2= parseInt(req.query.num1);
        const op= req.query.op;

        switch(op){
            case "add":
                res.send(`the sum is ${num1+num2}`)
                break;
            case "sub":
                res.send(`the sub is ${num1-num2}`);
            default:
                res.send("invalid");
        }


    })


    app.get("/a5/courses",(req,res)=>{
        const instructor = req.query.instructor;
        if(instructor){
            const courses = courses.filter((c)=>c.instructor)
            res.json(courses);
            return //Cant have two responses
        }
        res.json(courses);
    })
    // res.send(req.query);
}