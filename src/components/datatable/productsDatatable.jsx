import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        let list = [];
        try {
          let i =1
          const querySnapshot = await getDocs(collection(db, "HouseCollection"));
          querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        } catch (err) {
          console.log(err);
        }
      }
     fetchData();

    
  }, []);

  const navigate = useNavigate()
 

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "HouseCollection", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleView =  (id) => {
    navigate(`/products/${id}`)
  };
  const handleEdit =  (id) => {
    navigate(`/products/edit/${id}`)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton"
              onClick={() => handleView(params.row.id)} >View</div>

<div className="viewButton"
              onClick={() => handleEdit(params.row.id)} >Edit</div>
            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        PRODUCTS
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
    
        getRowClassName={(params) =>
          params.row.availability == false ? 'row' : null
        }
       

     />
     
   
    </div>
  );
};

export default Datatable;
