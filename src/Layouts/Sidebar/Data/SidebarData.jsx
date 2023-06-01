import { AccessAlarmOutlined, HomeOutlined, NewReleasesOutlined, QueueMusic } from "@mui/icons-material";

export const sidebarLabels = {

    sidebarLabels: {
        sidebarOptions: [
            {
                id: 1,
                name: "Home",
                path: "/",
                icon: <HomeOutlined className="darkModeIcon" />,
            },
            {
                id: 2,
                name: "Explore NEW",
                path: "/NewReleases",
                icon: <NewReleasesOutlined className="darkModeIcon" />,
            },
            {
                id: 3,
                name: "Recently Played",
                path: "RecentlyPlayed",
                icon: <AccessAlarmOutlined className="darkModeIcon" />,
            },
            {
                id: 4,
                name: "My PlayList",
                path: "MyPlaylist",
                icon: <QueueMusic className="darkModeIcon" />,
            },
        ],
        siderbarFooter: "© 2023 Honey Patel",
    },
};
