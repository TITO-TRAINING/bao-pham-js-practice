import ActionTable from '../layouts/actionTable';

const PersonItem = (persons) => {
  return `
    <tbody>
      ${persons
        .map((person) => {
          return `
            <tr data-id="${person.id}">
              <td>${person.id}</td>
              <td>${person.name}</td>
              <td>${person.age}</td>
              <td>${person.address}</td>
              <td>
                ${ActionTable()}
              </td>
            </tr>`;
        })
        .join('')}
    </tbody>
  `;
};

export default PersonItem;
