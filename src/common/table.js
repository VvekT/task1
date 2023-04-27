import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from '@tds/community-pagination'
import Paragraph from '@tds/core-paragraph'
import FlexGrid from '@tds/core-flex-grid'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { SearchBold } from '@tds/core-interactive-icon'
import { useGetTicketsQuery } from "../store/ticketsPostSlice";
import styled from 'styled-components';
import { media } from "@tds/core-responsive";
import { colorGreyGainsboro, colorWhite, colorGreyShuttle, colorGreyRaven } from '@tds/core-colours';
import { useTable } from "react-table";
import SkeletonProvider from "@tds/community-skeleton-provider";
import Divider from "@tds/core-hairline-divider";

import './table.scss'

export const TableContainer = styled.table`
  display: table;
  table-layout: fixed;
  max-height: 100vh;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    height: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colorGreyGainsboro};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colorGreyGainsboro};
  }
  border-collapse: separate;
  border-spacing: 0 5px;

  > thead tr {
    background: ${colorGreyRaven};
    color: ${colorWhite};
    > th {
      // display: inline-block;
      padding: 15px 8px;
      text-transform: uppercase;
      white-space: nowrap;
      text-align: center;
      // width: 9%;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: ${colorWhite};
      }
    }
  }
  > tbody tr {
    background: ${colorWhite};
    color: ${colorGreyShuttle};

    > td {
      // display: inline-block;
      white-space: nowrap;
      // width: 9%;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 15px 8px;
      text-align: center;
    }
  }

  ${media
        .from("xs")
        .until("lg")
        .css({
            overflow: "auto",
            // width: "100vw",
            // tableLayout: "flxed",
            "&& th": {
                display: "table-cell",
                width: 150,
            },
            "&& td": {
                display: "table-cell",
                width: 150,
            },
        })}
`;


const HoverableRow = styled.tr`
  cursor: pointer;
  &:hover {
    box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.175);
  }
`;

const CustomTable = ({ head, pagination, sta, posts, isLoading, number, isInclude }) => {
    const Columns = [
        {
            Header: "Id",
            accessor: "id",
            width: "10%",
        },
        {
            Header: "Working",
            accessor: "working",
            width: "6%",
        },
        {
            Header: "Short Description",
            accessor: "shortDescription",
            width: "15%",
        },
        {
            Header: "Status",
            accessor: "status",
            width: "5%",
        },
        {
            Header: "Priority",
            accessor: "priority",
            width: "5%",
        },
        {
            Header: "Category",
            accessor: "category",
            width: "6%",
        },
        {
            Header: "Assign To",
            accessor: "assignTo",
            width: "10%",
        },
        {
            Header: "Affected User",
            accessor: "affectedUser",
            width: "10%",
        },
        {
            Header: "Contact No",
            accessor: "callbackNumber",
            width: "10%",
        },
        {
            Header: "Workstation Number",
            accessor: "workstationNumber",
            width: "10%",

        },
        {
            Header: "Site Location",
            accessor: "siteLocation",
            width: "10%",
        },
        {
            Header: "Created At",
            accessor: "createdAt",
            width: "10%",
        },
    ];

    const columns = useMemo(() => Columns, []);
    const data = useMemo(() => {
        let ticketData = posts?.results ?? []
        const mappedTicketData = ticketData?.map((item) => {
            return {
                id: item.id,
                working: item.working,
                shortDescription: item.shortDescription,
                category: item.category,
                assignTo: item.assignTo,
                status: item.status,
                priority: item.priority,
                callbackNumber: item.callbackNumber,
                affectedUser: item.affectedUser,
                workstationNumber: item.workstationNumber,
                siteLocation: item.siteLocation,
                createdAt: item.createdAt
            };
        });
        return mappedTicketData;
    }, [posts && posts?.results]);

    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <SkeletonProvider show={isLoading}>
                <Text skeleton></Text>
                <Text skeleton></Text>
                <Box vertical={3}>
                    <Divider />
                </Box>
                <Text skeleton></Text>
                <Text skeleton></Text>
            </SkeletonProvider>
        )
    }

    const ticketDetailPage = (row) => {
        navigate("/Cases", { state: { id: row.id } });
    }
    return (
        <>
            {posts && posts?.results?.length > 0 && (
                <>
                    <TableContainer {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th
                                            {...column.getHeaderProps()}
                                            title={(column.Header) ?? ""}
                                        >
                                            {" "}
                                            <Text size="small" bold>
                                                {column.render("Header")}
                                            </Text>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <>
                                        <HoverableRow
                                            {...row.getRowProps()}
                                        >
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td onClick={(e) => ticketDetailPage(cell.row.values)} {...cell.getCellProps()} title={cell.value}>
                                                        {" "}
                                                        <Text size="small">{cell.render("Cell")}</Text>
                                                    </td>
                                                );
                                            })}
                                        </HoverableRow>
                                    </>
                                );
                            })}
                        </tbody>
                    </TableContainer>
                    {posts && posts?.totalItem > 10 && (
                        <FlexGrid.Row horizontalAlign="end">
                            <Pagination copy="en">
                                <Pagination.Panel ></Pagination.Panel>
                                <Pagination.Panel onClick={() => setPage(pageVal + 1)}></Pagination.Panel>
                                <Pagination.Panel onClick={() => setPage(pageVal - 1)}></Pagination.Panel>
                            </Pagination>
                        </FlexGrid.Row>
                    )}
                </>
            )}
            {posts && posts?.results?.length == 0 && (
                <div className="no-data-message">
                    <div><SearchBold copy="en" size={'48'} /></div>
                    <Paragraph block={true}>Currently, you have no open requests.</Paragraph>
                </div>
            )
            }
        </>

    )
}

export default CustomTable;