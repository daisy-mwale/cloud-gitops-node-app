// test commit to trigger CI
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Cloud GitOps pipeline is working",
    version: "v1"
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
    
