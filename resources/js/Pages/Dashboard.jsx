import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';
  export default function Dashboard(props) {
    const initialColumns = [
        {
          title: 'Column 1',
          dataIndex: 'name',
          key: 'col1',
          hide: false, // Initially visible
        },
        {
          title: 'Column 2',
          dataIndex: 'age',
          key: 'col2',
          hide: false, // Initially visible
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: 'col3',
          hide: false, // Initially visible
        },
      ];

      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
        },
      ];
   
    const [columns, setColumns] = useState(initialColumns);
    const toggleColumnVisibility = (key) => {
        const updatedColumns = columns.map((column) =>
          column.key === key ? { ...column, hide: !column.hide } : column
        );
        setColumns(updatedColumns);
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
            <div>
      <div style={{ marginBottom: 16 }}>
        <h3>Column Visibility</h3>
        {columns.map((column) => (
          <Checkbox
            key={column.key}
            checked={!column.hide}
            onChange={() => toggleColumnVisibility(column.key)}
          >
            {column.title}
          </Checkbox>
        ))}
      </div>
      <Table
        dataSource={data}
        columns={columns.filter((column) => !column.hide)}
      />
    </div>
        </AuthenticatedLayout>
    );
}
