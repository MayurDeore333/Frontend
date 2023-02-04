import React from 'react'


const AddInventory = () => {
  return (
    <div className="addProduct">
    <form onSubmit={saveProduct}>
      <div className="header_title">
        <h4>
          <b>Add Item</b>
        </h4>
       
      </div>

            <div className="container mt-3 mb-2">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "500px", height: "35px" }}
        >
          ADD Item
        </button>
      </div>
    </form>
  </div>

  )
}

export default AddInventory
