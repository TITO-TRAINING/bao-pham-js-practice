const NAVIGATION = [
  {
    id: 1,
    title: 'Home',
    href: '#',
  },
  {
    id: 1,
    title: 'About Us',
    href: '#',
  },
  {
    id: 1,
    title: 'Setting',
    href: '#',
  },
];

const COLUMNS = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: () =>
      `
        <a>Update</a>
        <a>Delete</a>
      `,
  },
];

const DATA = [
  {
    id: '1',
    name: 'Phạm Như Quốc Bảo',
    age: '20',
    address: '20 Mai Anh Tuấn',
  },
  {
    id: '2',
    name: 'Phạm Như Quốc Bảo',
    age: '20',
    address: '20 Mai Anh Tuấn',
  },
  {
    id: '3',
    name: 'Phạm Như Quốc Bảo',
    age: '20',
    address: '20 Mai Anh Tuấn, Hòa Xuân, Cẩm Lệ, Đà Nẵng',
  },
];

export { NAVIGATION, COLUMNS, DATA };
