import Image from "next/image";
import React from "react";
import PreviewTable from "./PreviewTable";
import { CldImage } from "next-cloudinary";

export default function FormPreview({ data }) {
  const {
    companyName,
    invoiceAuthor,
    companyAddress,
    companyCity,
    companyCountry,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    invoiceDueDate,
    logoUrl,
    tableData,
  } = data;
  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
      {/* Image & Invoice Label */}
      <div className="flex justify-between items-center">
        {/* Image */}

        <div className="flex items-center justify-center ">
          {logoUrl && (
            <CldImage
              width="120"
              height="120"
              src={logoUrl}
              alt="Invoice Logo"
            />
          )}
        </div>

        <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
      </div>
      {/* Company Details */}
      <div className="flex flex-col w-1/2 mt-6">
        <div className="flex">
          <p className="font-bold tex-base">Company Name: &nbsp;</p>
          <p className=" tex-base">{companyName}</p>
        </div>

        <div className="flex">
          <p className="font-bold tex-base">Your Name : &nbsp;</p>
          <p className=" tex-base">{invoiceAuthor}</p>
        </div>
        <div className="flex">
          <p className="font-bold tex-base">Company Address : &nbsp;</p>
          <p className=" tex-base">{companyAddress}</p>
        </div>
        <div className="flex">
          <p className="font-bold tex-base">Company City : &nbsp;</p>
          <p className=" tex-base">{companyCity}</p>
        </div>
        <div className="flex">
          <p className="font-bold tex-base">Company Country : &nbsp;</p>
          <p className=" tex-base">{companyCountry}</p>
        </div>
      </div>
      {/* CLIENT dETAILS */}
      <div className="flex justify-between gap-4 mb-8">
        <div className="flex flex-col w-1/2 mt-6">
          <h2 className="mb-2 font-semibold">Bill To</h2>

          <div className="flex">
            <p className="font-bold tex-base">Client Company : &nbsp;</p>
            <p className=" tex-base">{clientCompany}</p>
          </div>
          <div className="flex">
            <p className="font-bold tex-base">Client Address : &nbsp;</p>
            <p className=" tex-base">{clientAddress}</p>
          </div>
          <div className="flex">
            <p className="font-bold tex-base">Client City : &nbsp;</p>
            <p className=" tex-base">{clientCity}</p>
          </div>

          <div className="flex">
            <p className="font-bold tex-base">Client Country : &nbsp;</p>
            <p className=" tex-base">{clientCountry}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 mt-6">
          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice #</p>
            <p>{invoiceNumber}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice Date</p>
            <p>{invoiceDate}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-slate-500 font-bold">Invoice Due Date</p>
            <p>{invoiceDueDate}</p>
          </div>
        </div>
      </div>
      {/* TABLE */}
      <PreviewTable tableData={tableData} />
    </div>
  );
}
