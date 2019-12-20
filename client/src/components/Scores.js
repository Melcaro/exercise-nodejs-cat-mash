import React from 'react';

export const Scores = ({ listOfCats }) => {
  console.log(listOfCats);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Cat's pic</th>
            <th>Cat's ID</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <tbody>
          {listOfCats.map(({ url, id, score = 0 }) => (
            <tr key={id}>
              <td>
                <div>
                  <img src={url} alt={id} />
                </div>
              </td>
              <td>{id}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
