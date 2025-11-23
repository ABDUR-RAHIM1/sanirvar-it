"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { globalContext } from "@/ContextApi/ContextApi";
import { getActions } from "@/actions/getActions";
import { feesGetBySearch } from "@/constans/Endpoints";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PaymentSearch() {
  const { showToast } = useContext(globalContext);

  const [searchInput, setSearchInput] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      showToast(400, "Enter name or roll to search!");
      return;
    }

    setSearching(true);

    try {
      // API CALL => /fees/search/?search=VALUE
      const { status, data } = await getActions(
        feesGetBySearch + searchInput
      );

      if (status === 200 && data) {
        setSearchData(data);
      } else {
        setSearchData([]);
      }
    } catch (error) {
      console.log(error);
      showToast(500, "Failed to search");
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="space-y-4 p-5 border rounded-xl shadow-sm bg-white">

      {/* INPUT THAT OPENS MODAL */}
      <Dialog>
        <DialogTrigger className="w-full">
          <Input
            placeholder="Search Payment by Student Name or Roll"
            readOnly
            className="cursor-pointer"
          />
        </DialogTrigger>

        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Search By <span className="font-semibold">Student Name</span> or{" "}
              <span className="font-semibold">Roll</span>
            </DialogTitle>
          </DialogHeader>

          {/* SEARCH INPUT */}
          <div className="my-5 border rounded-md p-3 shadow-md flex items-center gap-2">
            <Input
              type="search"
              value={searchInput}
              onChange={handleChange}
              placeholder="Search by Student Name or Roll"
            />

            <Button
              onClick={handleSearch}
              disabled={searching}
              className="bg-blue-500 text-white"
            >
              Search
            </Button>
          </div>

          <DialogDescription className="underline">
            Payment History
          </DialogDescription>

          {/* SEARCH RESULTS */}
          <div className="my-5 max-h-[400px] overflow-auto">
            {/* LOADING STATE */}
            {searching && (
              <div className="py-10 text-center font-medium text-blue-600">
                Searching data...
              </div>
            )}

            {/* DATA FOUND */}
            {!searching && searchData && searchData.length > 0 && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Roll</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {searchData.map((item, i) => (
                    <TableRow key={item._id || i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{item.student?.studentName}</TableCell>
                      <TableCell>{item.student?.studentRoll}</TableCell>
                      <TableCell>{item.paidAmount}</TableCell>
                      <TableCell>{item.method}</TableCell>
                      <TableCell>
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </TableCell>
                    </TableRow>
                  ))}

                  {/* TOTAL ROW */}
                  <TableRow className="bg-gray-100 font-semibold">
                    <TableCell colSpan={3}></TableCell>

                    <TableCell>
                      Total:{" "}
                      {searchData.reduce(
                        (sum, item) => sum + Number(item.paidAmount),
                        0
                      )}
                      ৳
                    </TableCell>

                    <TableCell colSpan={2}></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}

            {/* NO DATA */}
            {!searching && searchData.length === 0 && (
              <p className="text-red-500 font-medium text-center">
                Payment not found!
              </p>
            )}
          </div>


        </DialogContent>
      </Dialog>
    </div>
  );
}
