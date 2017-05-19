exports.cat = (name) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${name}</title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>

  <body>
    <!-- INTRODUCTION INFO: -->
    <img src="" alt="cat ${name}">
    <h1>I'm ${name}</h1>

    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add new info</button>
    <!-- FORM TO ADD GROWTH INFO: -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">How did ${name} do today?</h4>
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
      <tr>
        <td>05/10/2017</td>
        <td>6 weeks</td>
        <td>700g</td>
        <td>n/a</td>
        <td>3</td>
        <td></td>
        <td>gave meds</td>
      </tr>
      <tr>
        <td>05/11/2017</td>
        <td>6 weeks</td>
        <td>710g</td>
        <td>n/a</td>
        <td>3</td>
        <td></td>
        <td>gave meds</td>
      </tr>
    </table>
  </body>
  </html>
`
