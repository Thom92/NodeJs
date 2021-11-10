const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'))

app.get("/", (req, res) =>{
    return res.sendFile(__dirname+"/public/html/frontpage.html");
});

app.get("/videos/", (req, res) =>{
    return res.sendFile(__dirname + "/public/html/videos.html");
});

app.get("/api", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/api.html");
});

app.get("/requirements", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/requirements.html");
});

app.get("/commands", (req, res) =>
{
    return res.sendFile(__dirname+"/public/html/commands.html");
});

app.get("/jquery", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/jquery.html");
});

app.get("/gettingStarted", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/gettingStarted.html");
});

app.get("/thebasics", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/thebasics.html");
}); 

app.get("/jquery", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/jquery.html");
});

app.get("/getRequest", (req, res) =>
{
    return res.sendFile(__dirname + "/public/html/getRequest.html");
});

app.get("/postRequest",(req,res)=>
{
    return res.sendFile(__dirname + "/public/html/postRequest.html");
});

app.get("/putRequest", (req, res)=>
{
   return res.sendFile(__dirname + "/public/html/putRequest.html"); 
});

app.get("/deleteRequest", (req, res)=>
{
    return res.sendFile(__dirname + "/public/html/deleteRequest.html");
});



const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});


//These functions were used in my postman example under api.
//I´ve shown different images of what happens in postman when you do the different requests.

/*

const courses = [
    { id: 1, type: "course 1"}, 
    { id: 2, type: "course 2"},
    { id: 3, type: "course 3"},
    { id: 4, type: "course 4"}
];

app.get("/courses/:id", (req, res) => {
    //Logic that return a boolean value
    //The boolean value determines if the course is the one we´re looking for or not
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) 
    {
         res.status(404).send('The course was not found');
     }
    res.send(course);
    
 
 });
app.put("/courses/:id", (req, res) =>
{
//Look up course
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course)
    {
        return res.status(404).send('The course was not found'); 
    } 
    
//Validate
    const {error} = validateCourse(req.body); //result.error
    if(error)
    {   
        //400 let´s the user know, that is requirements were not met.
        return res.status(400).send(error.details[0].message); 
    }
    
//Update the course
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) =>
{
    //Find course
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course) 
    { 
        return res.status(404).send('The course was not found');
    }
    //Delete course
    const index = courses.indexOf(courses);
    courses.splice(index, 1);
    //Respond
    res.send(course);

});*/



