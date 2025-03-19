import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import PageToolbar from "./components/PageToolbar";
import axios from "axios";

function CargoList() {
  const [cargos, setCargos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://private-840ee-myapi806.apiary-mock.com/cargo"
        );
        setCargos(response.data.Cargos);
      } catch (error) {
        console.error("Kargo verileri alınamadı:", error);
      }
    };

    fetchData();
  }, []);

  console.log(cargos);

  return (
    <div>
      <Header />
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1>
                Responsive Datatables{" "}
                <small>responsive datatable samples</small>
              </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <PageToolbar />
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Anasayfa</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="table_responsive.html">Öğrenci İşleri</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="table_responsive.html">Data Tables</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Öğrenci Listesi</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <i className="fa fa-cogs font-green-sharp" />
                      <span className="caption-subject font-green-sharp bold uppercase">
                        Responsive Flip Scroll Tables
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse">
                        {" "}
                      </a>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    <table className="table table-bordered table-striped table-condensed flip-content">
                      <thead className="flip-content">
                        <tr>
                          <th width="20%">Cargo No</th>
                          <th>Cargo Date</th>
                          <th>Delivery Date</th>
                          <th>Status</th>
                          <th>Company</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cargos.map((cargo, index) => (
                          <tr key={index}>
                            <td>{cargo.CargoNo}</td>
                            <td>{cargo.CargoDate}</td>
                            <td>{cargo.DeliveryDate}</td>
                            <td>{cargo.CargoStatus}</td>
                            <td>{cargo.CargoCompany}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* END SAMPLE TABLE PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN FOOTER */}
      <PreFooter />
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default CargoList;
