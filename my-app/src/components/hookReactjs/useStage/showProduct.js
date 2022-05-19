import React from "react";
const ShowProduct = (props) => {
  const { listUser } = props;
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((item, index) => (
          <>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <div>
                  <img
                    src={item.image}
                    className="img-thumbnail"
                    alt={item.image}
                  />
                </div>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default ShowProduct;
