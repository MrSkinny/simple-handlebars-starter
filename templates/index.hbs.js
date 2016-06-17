module.exports = `
  <div>
    <h1>This is Index Template</h1>
    <p>Message data -- {{ message }}</p>

    <ul>
      {{#each arr}}
        <li>Number - {{this}}</li>
      {{/each}}
    </ul>
  </div>
`;
