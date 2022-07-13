import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';

export const SidebarData=[
    {
        title:"home",
        icon:<HomeIcon></HomeIcon>,
        link:"/home"
    },
    {
        title: "Mail",
        icon: <MailIcon /> ,
        link: "/mail"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon: <GroupIcon />,
        link: "/friends"
    },
    {
        title: "Images",
        icon: <CropOriginalIcon />,
        link: "/images"
    }
]