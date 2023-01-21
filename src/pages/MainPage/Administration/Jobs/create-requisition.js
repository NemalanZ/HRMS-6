//createRequisition

import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import axios from "axios";
import { useForm, Controller, set } from "react-hook-form";

const CreateRequisition = (props) => {
  const [values, setValues] = useState({
    requisitionId: create_UUID(),
    dateOfReq: "",
    client: "",
    role: "",
    jobType: "",
    country: "",
    city: "",
    state: "",
    postalCode: "",
    experience: "",
    vacancy: "",
    min: "",
    max: "",
    jd: false,
  });

  const url = "http://localhost:9000/requisition";
  const RequisitionSubmit = async (e) => {
    e.preventDefault();
    await axios.post(url, { values });
    props.history.push("/app/administrator/requisition");
  };

  useEffect(() => {
    RequisitionSubmit();
  }, []);


  function create_UUID() {
    let value = Math.floor(1000 + Math.random() * 9000);
    return value;
  }


  // const {
  //   control,
  //   setErrors,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm()


  const onFormFieldChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page-wrapper">
      <HelmetProvider>
        <Helmet>
          <title>Create Requisition - qBotica</title>
          <meta name="description" content="Login page" />
        </Helmet>
      </HelmetProvider>
      {/* Page Content */}
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Requisition</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <form onSubmit={RequisitionSubmit}>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>
                      Requisition ID
                    </label>
                    <input
                      name="requisitionId"
                      className="form-control"
                      type="text"
                      value={values.requisitionId}
                      readOnly
                      onChange={onFormFieldChange}

                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={values.dateOfReq}
                      className="form-control "
                      type="date"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input
                      name="role"
                      value={values.role}
                      className="form-control "
                      type="text"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      Client
                    </label>
                    <input
                      name="client"
                      value={values.client}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Job Type</label>
                    <select
                      name="jobType"
                      className="form-control3"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Intership</option>
                      {/* <option>Other</option> */}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Year of Experience</label>
                    <input
                      name="experience"
                      value={values.experience}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Vacancy</label>
                    <input
                      name="vacancy"
                      value={values.vacancy}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      name="country"
                      className="form-control3"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                      required
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>India</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>City</label>
                    <select
                      name="city"
                      className="form-control3"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                      required
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>State/Province</label>
                    <select
                      name="state"
                      className="form-control3"
                      onChange={onFormFieldChange}
                      defaultValue={"DEFAULT"}
                      required
                    >
                      <option value="DEFAULT" disabled>
                        Select
                      </option>
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      name="postalCode"
                      value={values.postalCode}
                      className="form-control"
                      type="text"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <p>Salary</p>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Minimum</label>
                    <input
                      name="min"
                      value={values.min}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Maximum</label>
                    <input
                      name="max"
                      value={values.max}
                      className="form-control"
                      type="number"
                      onChange={onFormFieldChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Job Description</label>
                    <input
                      name="jd"
                      className="form-control"
                      type="file"
                      id="fileInput"
                      accept=".pdf"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default CreateRequisition;
