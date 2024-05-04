Project Description:

This project is a React-based web application designed to manage user invitations efficiently. It utilizes an external API to fetch user data and provides an interactive interface for inviting selected users. The application integrates Sass for styling, ensuring a modular and maintainable CSS architecture.

Key Features:
    User Data Fetching: At the core of the application is the ability to fetch user data from the reqres.in API, which simulates real user information retrieval in a development environment.
    Dynamic User Search: Users can be searched through a dynamic search interface that updates the display as the search term is typed, enhancing user experience by providing immediate feedback.
    Invitation Management: The application allows users to select and deselect individuals for invitations, managing these selections with an internal state that can easily be extended for more complex scenarios.
    Success State Visualization: After sending out invitations, the application confirms the successful action by displaying a success screen, which provides feedback on the number of invites sent.
    Loading and Error Handling: It includes robust loading and error handling states, informing users of the loading process or any errors that occur during data retrieval.

Technical Stack:
    React: Utilized for its efficient rendering capabilities and vast ecosystem, facilitating the creation of a responsive and interactive user interface.
    Sass: Chosen for styling to leverage features like variables and mixins, which help in writing more maintainable and scalable CSS.
    Fetch API: Used for HTTP requests to obtain user data, demonstrating modern JavaScript capabilities and asynchronous operations.

Usage Scenario:
    Upon launching the application, users are greeted with a list of users fetched from the API. Users can search through this list, select individuals they wish to invite, and send out invitations. Once the invitations are sent, the application         displays a success message with the count of invited users. This tool is particularly useful in scenarios where event organizers or team leaders need to send out mass invites to a list of users or employees.

Conclusion:
    This project showcases a practical use of React and modern JavaScript practices, making it an excellent reference for developers looking to understand real-world application development with React. It serves not only as a tool but also as a         learning platform for those interested in advancing their skills in React, API integration, and frontend best practices.
