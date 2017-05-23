exports.cat = (catName, catInfo) => {
  let catData = '';
  for (var i=0; i<catInfo.growth.length; i++) {
    catData = catData +
      `<tr>
        <td>${catInfo.growth[i].date}</td>
        <td>${catInfo.growth[i].age} weeks</td>
        <td>${catInfo.growth[i].weight} g</td>
        <td>${catInfo.growth[i].milk}</td>
        <td>${catInfo.growth[i].feedings}</td>
        <td>${catInfo.growth[i].notes}</td>
        <td>${catInfo.growth[i].medicalNotes}</td>
      `
  }

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${catName}</title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>

  <body id="cat-page-body">
    <!-- nav bar -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><span class="glyphicon glyphicon-home"></span></a>
        </div>
      </div>
    </nav>

    <!-- INTRODUCTION INFO: -->
    <img src="${catInfo.info.image}" alt="${catName} cat">
    <h1>I'm ${catName}</h1>

    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add new info</button>

    <!-- FORM TO ADD GROWTH INFO: -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">How did ${catName} do today?</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="date">date</label>
                <input type="date" class="form-control" name="date" placeholder="05/10/2017">
              </div>
              <div class="form-group">
                <label for="age">age</label>
                <input type="text" class="form-control" name="age" placeholder="6 weeks">
              </div>
              <div class="form-group">
                <label for="weight">weight(grams)</label>
                <input type="text" class="form-control" name="weight" placeholder="700g">
              </div>
              <div class="form-group">
                <label for="milk">milk(ml)</label>
                <input type="text" class="form-control" name="milk" placeholder="20 ml">
              </div>
              <div class="form-group">
                <label for="numberFeedings">number of feedings</label>
                <input type="text" class="form-control" name="numberFeedings" placeholder="3">
              </div>
              <div class="form-group">
                <label for="notes">notes</label>
                <textarea class="form-control" rows="4" name="notes" placeholder="doing great today"></textarea>
              </div>
              <div class="form-group">
                <label for="medicalNotes">medical notes</label>
                <textarea class="form-control" rows="4" name="medicalNotes" placeholder="gave all meds"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">add info</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- CHART FOR GROWTH: -->
    <table>
      <tr>
        <th>date</th>
        <th>age</th>
        <th>weight(grams)</th>
        <th>milk(ml)</th>
        <th>approx number of feedings</th>
        <th>notes</th>
        <th>medical notes</th>
      </tr>
      ${catData}
    </table>
  </body>
  </html>
`
}
