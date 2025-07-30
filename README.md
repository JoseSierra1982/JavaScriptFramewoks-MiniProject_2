MEN-CRUD-GUIDE/
│
├── models/           // Mongoose models
│   └── Customer.js   // The Mongoose model for our Employee
│
├── routes/           // Route definitions 
│   ├── createCustomer.js    // Create route
│   ├── readCustomer.js      // Read route
│   ├── updateCustomer.js    // Update route
│   └── deleteCustomer.js    // Delete route
│
├── .env               // Environment variables (Mongo URI, etc.)
├── app.js             // Main Express app -Entry point for our application
└── package.json       // Dependencies and project metadata