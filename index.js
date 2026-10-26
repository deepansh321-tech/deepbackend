// Local development server. On Netlify the same app runs as a function (netlify/functions/api.js).
const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
