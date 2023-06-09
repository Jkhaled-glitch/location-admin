import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AdminsDatatable from "../../components/datatable/adminsDatatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AdminsDatatable/>
      </div>
    </div>
  )
}

export default List