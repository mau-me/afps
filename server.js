const app = require("./app/app");

const port = process.env.PORT || 8000; // ou a porta desejada

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
