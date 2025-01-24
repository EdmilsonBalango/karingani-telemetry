import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      deviceID: "1",
      device: "Mbilu Borehole",
      location: "Mbilu Borehole",
      description: "Device installed at the workshop - 40mm",
      totalVolume: "2.000",
    },
    {
      deviceID: "2",
      device: "Mbilu Borehole 2",
      location: "Workshop on the second most used borehole",
      description: "Device installed at the workshop - 40mm",
      totalVolume: "10.000",
    },
    {
      deviceID: "3",
      device: "Mbilu Workshop",
      location: "Carwash",
      description: "Installed at the workshop - 20mm",
      totalVolume: "300",
    },
    {
      deviceID: "4",
      device: "Staff Village",
      location: "Paid",
      description: "$450.00",
      totalVolume: "500.000",
    },
  ]
  
  export function DevicesTable() {
    return (
      <Table>
        <TableCaption>A list of your devices at Mbilu</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Total Volume (m)3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((device) => (
            <TableRow key={device.deviceID} className="hover:bg-gray-50 cursor-pointer">
              <TableCell className="font-medium">{device.deviceID}</TableCell>
              <TableCell>{device.device}</TableCell>
              <TableCell>{device.location}</TableCell>
              <TableCell>{device.description}</TableCell>
              <TableCell className="text-right">{device.totalVolume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  