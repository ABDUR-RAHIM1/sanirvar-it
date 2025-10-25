import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";
import { demoTrainers } from '@/localDatabase/DummyTrainers';


export default function ViewTrainers() {
    return (
    <div className="p-6 my-10 bg-white mx-2">
      <h2 className="text-2xl font-semibold mb-4 text-center">Trainers List</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {demoTrainers.map((trainer, index) => (
            <TableRow key={trainer.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </TableCell>
              <TableCell>{trainer.name}</TableCell>
              <TableCell>{trainer.position}</TableCell>
              <TableCell>{trainer.email}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                //   onClick={() => handleMore(trainer.id)}
                >
                  <MoreHorizontal size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                //   onClick={() => handleEdit(trainer.id)}
                >
                  <Edit size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                //   onClick={() => handleDelete(trainer.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {demoTrainers.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                No trainers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}