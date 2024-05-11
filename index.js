const express = require('express');
const app = express();
const port = 5000; 

const cors = require('cors');
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());



// This is the all the get and post data will be.
app.get("/api", (req, res) => {
  res.json({"users" : ["user1", "user2"]})
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;

  console.log(name);
  res.json({ message: 'Data received successfully' });
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

