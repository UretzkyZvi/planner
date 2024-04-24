# Planner

Planner is an advanced scheduling and resource management tool built with React. This project is designed to integrate seamlessly into your workflow, providing intuitive interfaces and efficient management of appointments and resources. The Planner leverages the `shadcn/ui` philosophy, emphasizing reusability and customization of components rather than relying on a static library of UI elements.

## Features

- **Dynamic Scheduling**: Manage and view appointments effectively across different time views (day, week, month, year).
- **Resource Management**: Assign and track resources such as rooms or personnel linked to specific appointments.
- **Drag and Drop**: Intuitive drag-and-drop interface for adjusting appointments and resource allocations directly within the calendar view, powered by Atlassian's Pragmatic drag and drop.
- **Customizable UI**: Built with `shadcn/ui` components that are highly customizable to fit into any application design.

## Project Structure

```
/src
|-- /env.js                           # Environment configurations
|-- /utils
|   └── fakeData.ts                   # Utilities to generate fake data
|-- /styles
|   └── globals.css                   # Global styles
|-- /services
|   ├── AppointmentService.ts         # Manages appointment CRUD operations
|   ├── index.ts                      # Service exports
|   └── ResourceService.ts            # Manages resource CRUD operations
|-- /public
|   └── favicon.ico                   # Favicon
|-- /models
|   ├── Appointment.ts                # Appointment data model
|   ├── index.ts                      # Model exports
|   └── Resource.ts                   # Resource data model
|-- /lib
|   └── utils.ts                      # Additional utility functions
|-- /contexts
|   ├── PlannerDataContext.tsx        # Context for managing Planner data
|   └── PlannerContext.tsx            # Context for managing overall app state
|-- /components
|   ├── ui                            # UI components following `shadcn/ui` philosophy
|   └── planner                       # Planner-specific components
└── /app
    ├── layout.tsx                    # Main layout component
    └── page.tsx                      # Entry page component
```

## Getting Started

To get started with Planner, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd planner
npm install
```

Start the development server:

```bash
npm start
```

## Credits

- **shadcn**: For the philosophy of reusable components which inspired the UI of Planner. [shadcn/ui](https://github.com/shadcn/ui)
- **openstatus**: For the time picker component used in Planner. [openstatus time picker](https://time.openstatus.dev/#time-picker-demo.tsx)
- **date-range-picker-for-shadcn**: An implementation of a date range picker following the shadcn philosophy. [date-range-picker-for-shadcn](https://github.com/johnpolacek/date-range-picker-for-shadcn/tree/main)
- **Atlassian**: For their innovative Pragmatic drag and drop library used in our draggable components. [Atlassian Pragmatic Drag and Drop](https://atlassian.github.io/pragmatic-drag-and-drop/)

## Demo

Check out the live demo of the Planner: [Planner Demo](https://planner-tau-two.vercel.app/)

## Contributing

Contributions are welcome! If you have improvements or bug fixes:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a new Pull Request.