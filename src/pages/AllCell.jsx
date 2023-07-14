import React from "react";
import { Table } from "antd";
/* ant design table header */
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Cell Name",
    dataIndex: "name",
  },
  {
    title: "Cell Count",
    dataIndex: "product",
  },
  {
    title: "Zone",
    dataIndex: "status",
  },
];

/* ant design table data */
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i + 1,
    // name: (
    //   <Link className="text-primary" to={`/admin/download/zone/report/${i}`}>
    //     View report
    //   </Link>
    // ),
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const AllCell = () => {
  /* ant design chart config */

  return (
    <div className="mt-1">
      <h3 className="mb-3 title">Cell Table</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default AllCell;
