var path = require("path");

// Routes
// =============================================================
module.exports = function(app){
// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
  // as a fallback, use route for homepage
  app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
};