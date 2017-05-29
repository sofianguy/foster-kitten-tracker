exports.home = (cats) => {
  let catLinks = ''
  for (var i=0; i<cats.length; i++) {
    catLinks = catLinks +
      ` <div class="col-lg-2 col-md-2 col-sm-3 col-xs-4">
          <div class="thumbnail">
            <div class="img-wrapper">
              <a href=${cats[i].path}>
                <img class="img-thumbnail" src="${cats[i].image}" alt="${cats[i].name} cat">
              </a>
            </div>
            <div class="home-page-caption">
              <a href=${cats[i].path}>${cats[i].name}</a>
            </div>
          </div>
        </div>
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

  <body id="home-page-body">
    <div class="container">
      <div class="page-header">
        <h1>Track your kitten</h1>
      </div>
      <h3>pick a kitten:</h3>
      <button type="button" class="btn btn-primary">add a kitten</button>
    </div>
    
    <div class="row">
      ${catLinks}
    </div>

  </body>
  </html>`
}
