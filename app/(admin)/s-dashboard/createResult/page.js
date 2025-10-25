"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as XLSX from "xlsx";

export default function CreateResult() {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith(".xlsx") && !selectedFile.name.endsWith(".xls")) {
      alert("Please upload a valid Excel file (.xlsx or .xls)");
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file");
      return;
    }

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    setParsedData(jsonData);
    alert(`Excel file uploaded successfully! ${jsonData.length} records found.`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-center">Upload Result Sheet</h2>

      {/* File Input */}
      <div className="space-y-1">
        <Label>Excel File (.xlsx or .xls)</Label>
        <Input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
        />
      </div>

      <Button className="w-full" onClick={handleUpload}>
        Upload Excel
      </Button>

      {/* ShadCN Table */}
      {parsedData.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {Object.keys(parsedData[0]).map((key) => (
                  <TableHead key={key}>{key}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {parsedData.map((row, i) => (
                <TableRow key={i}>
                  {Object.values(row).map((val, j) => (
                    <TableCell key={j}>{val}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
