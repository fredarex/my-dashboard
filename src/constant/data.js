import { chart_icon, home_icon, overview_icon, user_icon } from "./image";

export const links = [
    {
        title: 'Dashboard',
        icon: home_icon,
        links: [
            {
                name: 'overview',
                icon: overview_icon
            },
            {
                name:'My details',
                icon: user_icon
            }
        ]
    },
    {
        title: 'Chart',
        icon: chart_icon,
        links: [
            {
                name: 'My chart',
                icon: chart_icon
            }
        ]
    },
    {
        title: 'Apps',
        links: [
            {
                
            }
        ]
    }
]