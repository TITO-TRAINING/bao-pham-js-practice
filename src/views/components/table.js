const Table = (COLUMNS) => {
  return `
    <table class="content-table person-table">
      <thead>
        <tr>
        ${COLUMNS.map((value) => {
          return `<th>${value.title}</th>`;
        })}
      </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div class="pagination">
        <ul>
        </ul>
    </div>
  `;
};

export default Table;
