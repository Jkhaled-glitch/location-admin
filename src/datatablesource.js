export const userColumns = [
  { field: "email", headerName: "Email", width: 160 },
  { field: "name",headerName: "UserName",width: 130,},
  {field: "profileUrl",headerName: "Profile",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profileUrl} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "accountType",
    headerName: "Type",
    width: 100,
  }
];






export const productColumns = [
  { field: "id", headerName: "Product ID", width: 160 },
  { field: "authorized",headerName: "Authorized",width: 130,},
  { field: "availability",headerName: "Available",width: 130,},
  { field: "city", headerName: "CITY", width: 160 },
  { field: "contactPerson",headerName: "Contact",width: 130,},

  { field: "houseNo", headerName: "HouseNo", width: 160 },
  { field: "location",headerName: "Location",width: 130,},
  { field: "ownerEmail",headerName: "ownerEmail",width: 130,},
  { field: "phone", headerName: "Phone", width: 160 },
  { field: "post",headerName: "Post",width: 130,},
  { field: "price", headerName: "Price", width: 140 },
  { field: "size",headerName: "Size",width: 100,},
  { field: "street", headerName: "Street", width: 160 },
 
  {
    field: "Images",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImgProduct">
          <img className="cellImgProduct" src={params.row.images[0]} alt="avatar" />
          
          
        </div>
      );
    }
  },
  
  
  
];






export const adminColumns = [
  { field: "email", headerName: "Email", width: 160 },
];

