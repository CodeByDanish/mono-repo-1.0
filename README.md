# MonoRepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

# Mono Repository

This repository serves as a mono repository housing multiple applications (A, B, C, D, E) and various components associated with each application and a shared library for cross-application communication.

# Shared Library Service

The `SharedLibService` in this shared library facilitates communication and provides methods for interacting with data.

# Shared Styles

This monorepo uses shared styles that are meant to be used across multiple applications


## Applications

### Application A - Display List of User Records 

Implement a simple Angular component that displays a list of items. Simulate data fetching using [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
Application name in app (all-records)

### Application B - Create User Record

Implement a simple Angular component that create items.
Application name in app (add-records)

### Application C - Update User Records

Implement a simple Angular component that update items. Simulate data fetching using [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
Application name in app (update-records)

### Application D - Delete User Records

Implement a simple Angular component that delete items. Simulate data fetching using [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
Application name in app (delete-records)

### Application E - Consume Shared Library

This Angular application is part of a multi-application project and is designed to consume the shared library for cross-application communication.
Implement a feature that allows users to interact with the list of items from Application A (e.g., sorting or filtering).
Application name in app (client-app)

## Components

### Components for Application A
  - all-records
### Components for Application B
  - add-records
### Components for Application C
  - update-records
### Components for Application D
  - delete-records
### Components for Application E
  - client-app

## Getting Started

To get started with this project, follow these steps:
1. Clone the repository.
   - git clone -b master https://github.com/CodeByDanish/mono-repo.git
3. Install dependencies with `npm install`.
4. Build the Shared Library  `ng build shared-lib`
5. Run the development server :
   - Application-A (all-records) `ng serve all-records --port=4201`,
   - Application-B (add-records) `ng serve add-records --port=4202`,
   - Application-C (update-records) `ng serve update-records --port=4203`,
   - Application-D (delete-records) `ng serve delete-records --port=4204`,
   - Application-E (client-app) `ng serve client-app`,
