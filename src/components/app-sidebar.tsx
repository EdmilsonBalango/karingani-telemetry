"use client"

import * as React from "react"
import {
  Lightbulb,
  Printer,
  Droplets,
  LayoutDashboard,
  MapPin,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import { Button } from "./ui/button"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Water meters",
      logo: Droplets,
      plan: "Qualcosoma W1",
    },
    {
      name: "Power Meters",
      logo: Lightbulb,
      plan: "Unknown",
    },
    
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: false,
      asChild: false
      // items: [
      //   {
      //     title: "Devices",
      //     url: "#",
      //   },
      //   {
      //     title: "Locations",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Locations",
      url: "#",
      icon: MapPin,
      items: [
        {
          title: "Mbilu",
          url: "/locations",
        },
        // {
        //   title: "Explorer",
        //   url: "#",
        // },
        // {
        //   title: "Quantum",
        //   url: "#",
        // },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        {/* <SidebarTrigger /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
