//requisition

import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Popconfirm, Space } from "antd";
import { DeleteTwoTone, EditTwoTone, DownloadOutlined } from "@ant-design/icons";
// import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import '../../../../assets/css/font-awesome.min.css';


const Requisition = () => {
  const [values, setValues] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const url = "http://localhost:9000/requisition";

  const loadData = async () => {
    const response = await axios.get(url);
    setValues(response.data);
  };

  const dataWithDetails = values.map((details) => ({
    ...details,
    key: details.id,
    id: details.id,
    role: details.values.role,
    client: details.values.client,
    experience: `${details.values.experience} Years`,
    vacancy: details.values.vacancy,
    location: details.values.city,
    // location: `${details.values.city}, ${details.values.state}`,
    dateOfReq: details.values.dateOfReq,
    jobType: details.values.jobType,
  }));

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9000/requisition/${id}`);
    // const filteredData = values.filter(item => item.id !== id);
    // setValues(filteredData);
    // console.log(filteredData)
    loadData();
  };

  const columns = [
    {
      title: "Id",
      key: "serial",
      dataIndex: "id",
      render: ((item, text, serial) => (page - 1) * 10 + serial + 1),
    },
    {
      title: "Job Title",
      dataIndex: "role",
      editTable: true,
      render: (_, record) => (
        <Link to={`job-details/${record.id}`} >{record.role}</Link>
      ),
      sorter: (a, b) => a.role.length - b.role.length,
    },

    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "Experience",
      dataIndex: "experience",
    },
    {
      title: "Vacancy",
      dataIndex: "vacancy",
    },
    {
      title: "location",
      dataIndex: "location",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Start Date",
      dataIndex: "dateOfReq",
    },

    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   render: (text, record) => (
    //     <div className="dropdown action-label text-center">
    //     <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    //       <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
    //          "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
    //     </a>
    //     <div className="dropdown-menu dropdown-menu-right">
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
    //       <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
    //     </div>
    //   </div>
    //     ),
    //   sorter: (a, b) => a.status.length - b.status.length,
    // },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Are you sure want to delete ?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteTwoTone />
          </Popconfirm>
          <Link to={`edit-job/${record.id}`}>
            <EditTwoTone />
          </Link>
        </Space>
      ),
    },
  ];
  return (

    <div className="page-wrapper">
      <HelmetProvider>
        <Helmet>
          <title>Requisition - qBotica</title>
          <meta name="description" content="Login page" />
        </Helmet>
      </HelmetProvider>

      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Jobs</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="dashboard">Dashboard</Link></li>
                <li className="breadcrumb-item">Jobs</li>
              </ul>
            </div>
            <div className="col-auto float-end ml-auto">
              <button className="btn add-btn" onClick={() => navigate('add-job')}>
                <i className="fa fa-plus" />
                Create
              </button>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: dataWithDetails.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={dataWithDetails}

              // rowKey={record => record.id}
              // onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Requisition;
