// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  