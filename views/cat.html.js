exports.cat = (name) => `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${name}</title>
  </head>

  <body>
    <h1>I'm ${name}</h1>
    <table>
      <tr>
        <th>date</th>
        <th>age</th>
        <th>weight(grams)</th>
        <th>milk(ml)</th>
        <th>approx number of feedings</th>
        <th>notes</th>
      </tr>
      <tr>
        <td>Wednesday, May 10, 2017</td>
        <td>6 weeks</td>
        <td>700g</td>
        <td>n/a</td>
        <td>3</td>
      </tr>
    </table>
  </body>
  </html>
`
