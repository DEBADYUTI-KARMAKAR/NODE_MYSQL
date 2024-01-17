const express = require('express');
const cors = require('cors');
const app = express();
const PORT  = 8080
const router = require('./routes/productRouter.js')

let corOptions={
    origin:'https://localhost:8000'
}


app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Started",
        
    })
})
app.use('/api/products',router);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})