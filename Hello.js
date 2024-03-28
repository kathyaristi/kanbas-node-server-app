
export default function Hello(app){

app.get('/hello', (req,res) => {res.send('Life Is Good!')})
app.get('/', (req,res) => {res.send('Welcome to Web Dev!')})
}
// function Hello(app){
//     function sayHello(req,res){
//     res.send('hello world');
// } //request, response
// function lifeIsGood(req,res){
//     res.send('Life Is Good');
// } 
// // app.get('/hello',(req, res) =>  // respond HTTP GET
// //  res.send('hello world'));      // "hello world"

// app.get("/",sayHello);
// app.get("/life-is-good",lifeIsGood);
// app.get("two-plus-two",(req,res)=>{res.send("2+2=4");})//You can create lambda for it
// }
// export default Hello;