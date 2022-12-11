import { chart_icon, customers_icon, database_icon, flag_icon, home_icon, life_buoy_icon, overview_icon, settings_icon, update_icon, user_icon } from "./image";


const Mylinks = [
    {
        title: 'Dashboard',
        icon: home_icon,
        links: [
            {
                name: 'Overview',
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
        title: 'Database',
        icon: database_icon,
        links: [
            {
                name: 'My database',
                icon: database_icon
            }
        ]
    },
    {
        title: 'Update',
        icon: update_icon,
        links: [
            {
                name: 'Update',
                icon: update_icon
            }
        ]
    },
    {
        title: 'Flag',
        icon: flag_icon,
        links: [
            {
                name: 'My flag',
                icon: flag_icon
            }
        ]
    },
    {
        title: 'Customers',
        icon: customers_icon,
        links: [
            {
                name: 'Customers',
                icon: customers_icon
            }
        ]
    },
    {
        title: 'Life Buoy',
        icon: life_buoy_icon,
        links: [
            {
                name: 'Life buoy',
                icon: life_buoy_icon
            }
        ]
    },
    {
        title: 'Settings',
        icon: settings_icon,
        links: [
            {
                name: 'My settings',
                icon: settings_icon
            }
        ]
    }
    
];

const customersCardData = [
    {
        title: 'Total customers',
        amount:'2,420',
        percentage:'40'
    },
    {
        title: 'Members',
        amount:'1,210',
        percentage:'10'
    },
    {
        title: 'Active now',
        amount:'316',
        percentage:'20'
    }

]

export {
    Mylinks,
    customersCardData
}