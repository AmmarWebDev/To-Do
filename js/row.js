let checkId = Math.floor(Math.random() * 10000);

let row = `
  <tr>
    <td class="count"></td>
    <td class="check" colspan="2">
      <input type="checkbox" id="checker${checkId}" />
      <input class="editable" type="text"></input>
      <label for="checker${checkId}" style="display: none;"></label>
    </td>
  </tr>
`;

document.write(row.repeat(50));
