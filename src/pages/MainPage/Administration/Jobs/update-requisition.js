//createRequisition

import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const UpdateRequisition = () => {
  const { id } = useParams();
  const [requisitionId, setRequisitionId] = useState();
  const [dateOfReq, setDateOfReq] = useState();
  const [role, setRole] = useState();
  const [client, setClient] = useState();
  const [jobType, setJobType] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [experience, setExperience] = useState();
  const [vacancy, setVacancy] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [jd, setJd] = useState();


  // const {
  //   control,
  //   setErrors,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(`http://localhost:9000/requisition/${id}`)
    setRequisitionId(response.data.values.requisitionId);
    setDateOfReq(response.data.values.dateOfReq);
    setRole(response.data.values.role);
    setClient(response.data.values.client);
    setJobType(response.data.values.jobType);
    setCountry(response.data.values.country);
    setCity(response.data.values.city);
    setState(response.data.values.state);
    setPostalCode(response.data.values.postalCode);
    setExperience(response.data.values.experience);
    setVacancy(response.data.values.vacancy);
    setMin(response.data.values.min);
    setMax(response.data.values.max);
    setJd(response.data.values.jd);
  };

  const navigate = useNavigate();

  const RequisitionSubmit = (e) => {
    e.preventDefault();
    const values = {
      requisitionId: requisitionId,
      dateOfReq: dateOfReq,
      role: role,
      client: client,
      jobType: jobType,
      country: country,
      city: city,
      state: state,
      postalCode: postalCode,
      experience: experience,
      vacancy: vacancy,
      min: min,
      max: max,
      jd: jd,
    }
    try {
      const updatedata = axios.put(`http://localhost:9000/requisition/${id}`, { values })
      console.log(updatedata)
      navigate("/app/administrator/requisition");
    } catch (errors) {
      console.log("error")
    }
  };


  return (
    <div className="page-wrapper">
      <HelmetProvider>
        <Helmet>
          <title>Update Requisition - qBotica</title>
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
                      value={requisitionId}
                      readOnly
                      onChange={(e) => {
                        setRequisitionId(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Date of Requisition</label>
                    <input
                      name="dateOfReq"
                      value={dateOfReq}
                      className="form-control "
                      type="date"
                      onChange={(e) => {
                        setDateOfReq(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Role / Job Title</label>
                    <input
                      name="role"
                      value={role}
                      className="form-control "
                      type="text"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
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
                      value={client}
                      className="form-control"
                      type="text"
                      onChange={(e) => {
                        setClient(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Job Type</label>
                    <select
                      name="jobType"
                      value={jobType}
                      className="form-control3"
                      onChange={(e) => {
                        setJobType(e.target.value);
                      }}
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
                      value={experience}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        setClient(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Vacancy</label>
                    <input
                      name="vacancy"
                      value={vacancy}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        setClient(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
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
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
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
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      defaultValue={"DEFAULT"}
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
                      value={postalCode}
                      className="form-control"
                      type="text"
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
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
                      value={min}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        setMin(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Maximum</label>
                    <input
                      name="max"
                      value={max}
                      className="form-control"
                      type="number"
                      onChange={(e) => {
                        setMax(e.target.value);
                      }}
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
                <button className="btn btn-primary submit-btn">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default UpdateRequisition;
