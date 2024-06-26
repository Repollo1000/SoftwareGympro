const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');

const entrenamientosRoutes = require('./routes/entrenamientos');
const clasesRoutes = require('./routes/clases');
const maquinasRoutes = require('./routes/maquinas');
const corporalRoutes = require('./routes/evaluacionCorporal');




const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// CORS Configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/api', clasesRoutes); // Route for clases
app.use('/api', entrenamientosRoutes); // Route for entrenamientos
app.use('/api', maquinasRoutes); 
app.use('/api', corporalRoutes); 
// Error Handling
app.use(errorController.get404);
app.use(errorController.get500);

// Start Server
app.listen(port, () => console.log(`Listening on port ${port}`));
