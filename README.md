# WDD 430 - Web Full-Stack Development Final Project

[![Project Demo Video](https://youtu.be/jv5n81jy8Aw)](https://youtu.be/jv5n81jy8Aw)

This repository contains the final project submission for the WDD 430 - Web Full-Stack Development course at BYU-Idaho. The project is a web application built using the MEAN stack (MongoDB, Express, Angular, and Node.js). It showcases the implementation of a temple directory application that allows users to view information about various temples of The Church of Jesus Christ of Latter-day Saints.

## Project Features

- Single Page Application (SPA) built with Angular for a seamless user experience.
- Backend RESTful API powered by Express.js and MongoDB for handling CRUD operations on temple data.
- Interactive UI with hover effects and modals to display detailed temple information.
- Integration with Google Maps for easy navigation and directions to each temple location.
- Support for searching, creating, updating, and deleting temples in the application.

## Project Structure

```
- backend/
    - app.js
    - controllers/
        -TempleController.js
    - db/
        - conn.js
    - models/
        - temple.js
    - routes/
        - router.js
        - temples.js
- frontend/
    - src/
        - app/
            - adapters/
                - temple.adapter.ts
            - components/
                - footer/
                    - footer.component.css
                    - footer.component.html
                    - footer.component.spec.ts
                    - footer.component.ts
                - navbar/
                    - navbar.component.css
                    - navbar.component.html
                    - navbar.component.spec.ts
                    - navbar.component.ts
                - temple-details/
                    - temple-details.component.css
                    - temple-details.component.html
                    - temple-details.component.spec.ts
                    - temple-details.component.ts
                - temple-form/
                    - temple-form.component.css
                    - temple-form.component.html
                    - temple-form.component.spec.ts
                    - temple-form.component.ts
                - temple-list/
                    - temple-list.component.css
                    - temple-list.component.html
                    - temple-list.component.spec.ts
                    - temple-list.component.ts
            - models/
                - temple.model.ts
            - services/
                - temple.service.spec.ts
                - temple.service.ts
            - app-routing.modules.ts
            - app.component.css
            - app.component.html
            - app.component.spec.ts
            - app.component.ts
            - app.module.ts
        - assets/
        - environments/
            - environments.ts
- README.md

```


## Course Information

- Course: WDD 430 - Web Full-Stack Development
- Institution: BYU-Idaho
- Instructor: Tim Thayne
- Term: Spring 2023

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone this repository.
2. Navigate to the `backend` directory and install the server dependencies using `npm install`.
3. Start the backend server using `npm start`.
4. In a separate terminal, navigate to the `frontend` directory and install the frontend dependencies using `npm install`.
5. Start the Angular development server using `npm start`.
6. Open your browser and visit `http://localhost:4200` to access the application.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please contact Felipe Belisário at [bel22008@byui.edu](mailto:bel22008@byui.edu) or [felipe@fsbelisario.com.br](mailto:felipe@fsbelisario.com.br).
