import { useEffect, useState } from 'react';

const usersData = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Jan' },
  { id: 3, name: 'Olga' },
];

const UsersTable = () => {
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  useEffect(() => {
    const updatedUsers = usersData.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredUsers(updatedUsers);
  }, [filter]);

  //Bez UseEffect
  // const handleSearch = e => {
  //   setFilter(e.target.value);
  //   const updatedUsers = usersData.filter(user =>
  //     user.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  //   setFilteredUsers(updatedUsers);
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtruj po imieniu..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        // onChange={e => handleSearch(e)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Imię</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
