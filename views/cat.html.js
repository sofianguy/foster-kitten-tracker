exports.cat = (name) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${name}</title>
    <link rel="stylesheet" type="text/css" href="/styles/main.css">
  </head>

  <body>
    <!-- INTRODUCTION INFO: -->
    <img src="" alt="cat ${name}">
    <h1>I'm ${name}</h1>

    <!-- FORM TO ADD GROWTH INFO: -->
    <form action="/cat/${name}">
      <input type="date" name="date" placeholder="05/10/2017">
      <input type="text" name="age" placeholder="6 weeks">
      <input type="text" name="weight" placeholder="700 g">
      <input type="text" name="milk" placeholder="20 ml">
      <input type="text" name="numberFeedings" placeholder="3">
      <input type="text" name="notes" placeholder="doing great today">
      <input type="text" name="medicalNotes" placeholder="gave meds">
      <input type="submit" value="add">
    </form>

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
