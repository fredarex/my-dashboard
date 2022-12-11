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

];

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];

export {
    Mylinks,
    customersCardData
}