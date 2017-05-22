exports.home = (cats) => {
  let catLinks = ''
  for (var i=0; i<cats.length; i++) {
    catLinks = catLinks +
      ` <img src="${cats[i].image}" alt="${cats[i].name} cat"> \n
        <a href=${cats[i].path}>${cats[i].name}</a>
      `
  }

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>foster kitten tracker</title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>

  <body>
    <h1>Welcome!</h1>
    <h1>pick a kitten:</h1>
    ${catLinks}
  </body>
  </html>`
}
