"use client";
import FormPreview from "@/components/FormPreview";
import FormTable from "@/components/FormTable";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlinePrinter,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export default function CreateInvoice() {
  const [logoUrl, setLogoUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceAuthor: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
  });
  const [tableData, setTableData] = useState([]);
  const [combinedData, setCombinedData] = useState({});
  function handleInputChange(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const allFormData = {
      ...formData,
      logoUrl,
      tableData,
    };
    setCombinedData(allFormData);
    console.log(allFormData);
    setPreview(!preview);
  }
  console.log(combinedData);

  function updateTableData(newTableData) {
    setTableData(newTableData);
  }

  console.log(tableData);

  return (
    <div className="bg-slate-50 py-8 md:py-8 px-4 md:px-16">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 ">
        {/* HEADER */}
        <div className="flex gap-4">
          <button
            onClick={() => setPreview(!preview)}
            className=" px-3 py-2  rounded-sm  border border-slate-600 "
          >
            {preview ? (
              <div className="flex items-center space-x-2">
                <BsLayoutTextWindowReverse />
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <BsLayoutTextWindowReverse />
                <span>Preview</span>
              </div>
            )}
          </button>
          <button className="flex items-center space-x-2 px-3 py-2  rounded-sm  border border-slate-600 ">
            <AiOutlinePrinter />
            <span>Print</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2  rounded-sm  border border-slate-600 ">
            <AiOutlineCloudDownload />
            <span>Download</span>
          </button>
        </div>
        <div className="flex gap-4">
          <button className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2  rounded-sm  border border-purple-600 ">
            <AiOutlineCloudUpload className="font-semibold" />
            <span>Save Online</span>
          </button>
          <button className="flex text-purple-600 font-semibold items-center space-x-2 px-3 py-2  rounded-sm  border border-purple-600 ">
            <CiMail className="font-semibold" />
            <span>Send</span>
          </button>
        </div>
      </div>
      {/* INVOICE FORM */}

      {preview ? (
        <FormPreview data={combinedData} />
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto"
        >
          {/* Image & Invoice Label */}
          <div className="flex justify-between items-center">
            {/* Image */}

            <div className="flex items-center justify-center ">
              {logoUrl ? (
                <CldImage
                  width="240"
                  height="240"
                  src={logoUrl}
                  alt="Invoice Logo"
                />
              ) : (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <AiOutlineCloudUpload className="w-6 h-6  text-gray-500 dark:text-gray-400" />

                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <CldUploadButton
                        onUpload={(data) => {
                          console.log(data.info.secure_url);
                          setLogoUrl(data.info.secure_url);
                        }}
                        className=""
                        uploadPreset="InvoicePreset"
                      />
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG (240x240px)
                    </p>
                  </div>
                  {/* <input id="dropzone-file" type="file" className="hidden" /> */}
                </label>
              )}
            </div>

            <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
          </div>
          {/* Company Details */}
          <div className="flex flex-col w-1/2 mt-6">
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400 "
              type="text"
              placeholder="Your Company"
              name="companyName"
              onChange={handleInputChange}
              value={formData.companyName}
            />
            <input
              className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
              type="text"
              placeholder="Your Name"
              name="invoiceAuthor"
              onChange={handleInputChange}
              value={formData.invoiceAuthor}
            />
            <input
              className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
              type="text"
              placeholder="Company Address"
              name="companyAddress"
              onChange={handleInputChange}
              value={formData.companyAddress}
            />
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="City,State zip"
              name="companyCity"
              onChange={handleInputChange}
              value={formData.companyCity}
            />
            <input
              className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
              type="text"
              placeholder="Country eg USA"
              name="companyCountry"
              onChange={handleInputChange}
              value={formData.companyCountry}
            />
          </div>
          {/* CLIENT dETAILS */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2 mt-6">
              <h2 className="mb-2 font-semibold">Bill To</h2>
              <input
                className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                type="text"
                placeholder="Your Client's Company"
                name="clientCompany"
                onChange={handleInputChange}
                value={formData.clientCompany}
              />
              <input
                className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                type="text"
                placeholder="Client's Address"
                name="clientAddress"
                onChange={handleInputChange}
                value={formData.clientAddress}
              />
              <input
                className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="City,State zip"
                name="clientCity"
                onChange={handleInputChange}
                value={formData.clientCity}
              />
              <input
                className="h-7 text-base border-0 p-1 mb-2 placeholder:text-slate-400"
                type="text"
                placeholder="Country eg USA"
                name="clientCountry"
                onChange={handleInputChange}
                value={formData.clientCountry}
              />
            </div>
            <div className="flex flex-col w-1/2 mt-6">
              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="invoiceNumber"
                >
                  Invoice #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="text"
                  placeholder="INV-202"
                  name="invoiceNumber"
                  onChange={handleInputChange}
                  value={formData.invoiceNumber}
                />
              </div>
              <div className="flex gap-2">
                <label
                  className="text-slate-500 font-bold"
                  htmlFor="invoiceDate"
                >
                  Invoice Date #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDate}
                />
              </div>
              <div className="flex gap-2">
                <label className="text-slate-500 font-bold" htmlFor="dueDate">
                  Due Date #
                </label>
                <input
                  className="text-base border-0 p-1 mb-2 h-7 placeholder:text-slate-400"
                  type="date"
                  name="invoiceDueDate"
                  onChange={handleInputChange}
                  value={formData.invoiceDueDate}
                />
              </div>
            </div>
          </div>
          {/* TABLE */}
          <FormTable updateTableData={updateTableData} />
          <button
            className="bg-purple-600 py-2.5 px-6 text-white rounded"
            type="submit"
          >
            Create Invoice
          </button>
        </form>
      )}

      {/* INVOICE PREVIEW */}
    </div>
  );
}
