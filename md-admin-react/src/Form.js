import React from "react";
import Header from "./components/Header";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import PageToolbar from "./components/PageToolbar";

function Form() {
  return (
    <div>
      {/* BEGIN HEADER */}
      <Header />
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1>Öğrenci Form</h1>
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
                <a href="#">Home</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="form_controls_md.html">UI Components</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Material Design Form Controls</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            {/* Öğrenci kayıt formu başlangıc */}
            <div className="row">
              <div className="col-lg-12">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption font-red-sunglo">
                      <i className="icon-settings font-red-sunglo" />
                      <span className="caption-subject bold uppercase">
                        Öğrenci Kayıt
                      </span>
                    </div>
                  </div>
                  {/* form elementleri  */}
                  <div className="portlet-body form">
                    <form role="form">
                      <div className="form-body">
                        <div className="form-group form-md-line-input">
                          <input
                            type="text"
                            className="form-control"
                            id="form_control_1"
                            placeholder="Adınız"
                          />
                          <label htmlFor="form_control_1">Adınız</label>
                          <span className="help-block">Adınızı Girin</span>
                        </div>
                        <div className="form-group form-md-line-input">
                          <input
                            type="text"
                            className="form-control"
                            id="form_control_1"
                            placeholder="Soyadınız"
                          />
                          <label htmlFor="form_control_1">Soyadınız</label>
                          <span className="help-block">Soyadınızı Girin</span>
                        </div>
                        <div className="form-group form-md-line-input">
                          <div className>
                            <input
                              className="form-control form-control-inline input-medium date-picker"
                              size={16}
                              type="text"
                              defaultValue
                              placeholder="Doğrum Tarihiniz"
                            />
                            <label className="control-label">
                              Doğum Tarihi
                            </label>
                            <span className="help-block"> Tarih Seçin</span>
                          </div>
                        </div>
                        <div className="form-group form-md-line-input">
                          <input
                            type="email"
                            className="form-control"
                            id="form_control_1"
                            placeholder="ornek@mail.com"
                          />
                          <label htmlFor="form_control_1">
                            Email Adresiniz
                          </label>
                          <span className="help-block">ornek@mail.com</span>
                        </div>
                        <div className="form-group form-md-line-input">
                          <input
                            type="number"
                            className="form-control"
                            id="form_control_1"
                            placeholder={5325325325}
                          />
                          <label htmlFor="form_control_1">GSM</label>
                          <span className="help-block">
                            Telefon numaranızı başında "0" olmadan girin.
                          </span>
                        </div>
                        <div className="form-group form-md-line-input has-info">
                          <select className="form-control" id="form_control_1">
                            <option value={0} selected>
                              Lütfen Şehir Seçiniz
                            </option>
                            <option value={1}>İstanbul</option>
                            <option value={2}>Mersin</option>
                            <option value={3}>Ankara</option>
                            <option value={4}>İzmir</option>
                          </select>
                          <label htmlFor="form_control_1">Şehir</label>
                        </div>
                        <div className="form-group form-md-line-input">
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Adresinizi Girin"
                            maxLength={70}
                            defaultValue={""}
                          />
                          <label htmlFor="form_control_1">Adres</label>
                        </div>
                      </div>
                      <div className="form-actions noborder">
                        <button type="button" className="btn blue">
                          Gönder
                        </button>
                        <button type="button" className="btn default">
                          İptal
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
                {/* BEGIN SAMPLE FORM PORTLET*/}
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <PreFooter />
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
      {/* END FOOTER */}
    </div>
  );
}

export default Form;
