import React from "react";

const TableSection = () => {
  return (
    <section className="p-4">
      <table className="table-auto w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">Alice</td>
            <td className="border px-4 py-2">alice@example.com</td>
            <td className="border px-4 py-2">Admin</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="border px-4 py-2">Bob</td>
            <td className="border px-4 py-2">bob@example.com</td>
            <td className="border px-4 py-2">User</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">Carol</td>
            <td className="border px-4 py-2">carol@example.com</td>
            <td className="border px-4 py-2">Editor</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="border px-4 py-2">Dave</td>
            <td className="border px-4 py-2">dave@example.com</td>
            <td className="border px-4 py-2">Viewer</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableSection;