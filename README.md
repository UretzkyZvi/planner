# Planner

Planner is an advanced scheduling component for React, designed to enhance applications with resource management capabilities. This component seamlessly integrates into your existing workflows, offering intuitive interfaces for efficient appointment and resource management. Embracing the shadcn/ui philosophy, Planner focuses on reusability and customization, providing flexible UI components that are easily adaptable rather than fixed to a static library.

![demo](./images/demo.gif)

## Features

- **Dynamic Scheduling**: Utilize a versatile component to manage and visualize appointments across various time frames including daily, weekly, monthly, and yearly views.
- **Resource Management**: Incorporate resource tracking functionalities, assigning and managing elements such as rooms or personnel in relation to appointments.
- **Drag and Drop**: Enhance your application with an intuitive drag-and-drop interface for adjusting appointments and resources, facilitated by Atlassian's Pragmatic drag and drop.
- **Customizable UI**: Leverage `shadcn/ui` for highly customizable UI components, designed to seamlessly integrate and adapt to your application's design aesthetics.

## Project Structure

```
/src
|-- /utils
|   └── fakeData.ts                   # Utilities to generate fake data
|-- /styles
|   └── globals.css                   # Global styles
|-- /services
|   ├── AppointmentService.ts         # Manages appointment CRUD operations
|   ├── index.ts                      # Service exports
|   └── ResourceService.ts            # Manages resource CRUD operations
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
