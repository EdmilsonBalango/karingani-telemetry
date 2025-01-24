import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import NetworkDiagram from "@/components/ui/networkDiagram";
import { Chart } from "@/components/ui/pieChart";
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TotalConsumeChart } from "@/components/ui/totalConsumeChart";
import { SatelliteDish, Droplet } from "lucide-react";
import {DevicesTable} from "@/components/ui/devicesTable"
export default function Home() {
    const data = {
        gateway: {
          id: "gateway1",
          name: "Switch1",
          type: "UISP Switch",
          speed: "1.00 Gbps",
        },
        devices: [
          {
            id: "device1",
            name: "SSU Tower - Dzonge",
            type: "airFiber 5XHD",
            speed: "1.00 Gbps",
            linkSpeed: "1.09 Gbps",
          },
          {
            id: "device2",
            name: "SSU Access Point",
            type: "LTU-Rocket",
            speed: "1.00 Gbps",
          },
        ],
      };
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="p-3 text-gray-700 bg-muted/50">
              <div className="flex items-center  w-full h-7">
                <CardTitle className="flex items-center text-[1vw] font-normal">
                  <Droplet fill="currentColor" size={20} className="mr-3"/>
                  Total Volume consumed
                </CardTitle>
              </div>
              <CardContent className="flex flex-1 justify-center items-center h-full">
                <span className="text-[6vw] font-bold">50</span>
                <span className="fle">lt</span>
              </CardContent>
            </Card>
            <Card className="p-3 text-gray-700 bg-muted/50">
              <div className="flex items-center  w-full h-7">
                <CardTitle className="flex items-center text-[1vw] font-normal">
                  <Droplet fill="currentColor" size={20} className="mr-3"/>
                  Total Volume consumed
                </CardTitle>
              </div>
              <CardContent className="flex flex-1 justify-center items-center h-full">
                <span className="text-[6vw] font-bold">50</span>
                <span className="fle">lt</span>
              </CardContent>
            </Card>
            <Card className="p-3 text-gray-700 bg-muted/50">
              <div className="grid items-center  w-full h-7">
                <CardTitle className="flex items-center text-[1vw] font-normal">
                  <SatelliteDish size={20} className="mr-3"/>
                  Devices 
                </CardTitle>
                <CardDescription>Number of active devices </CardDescription>
              </div>
              <CardContent>
                <Chart />
              </CardContent>
            </Card>
            
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min h-[30vh]">
            <DevicesTable />
          </div>
        </div>
    </SidebarInset>
  );
}
