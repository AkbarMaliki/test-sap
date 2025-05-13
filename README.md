# cds-server

A Node.js backend built with SAP Cloud Application Programming Model (CAP), integrating with SAP S/4HANA OData services for managing Purchase Orders and Business Partners.

## Project Structure

| File/Folder      | Purpose                                                      |
|------------------|--------------------------------------------------------------|
| `app/`           | UI frontends (empty by default)                              |
| `db/`            | Domain models and data (empty by default)                    |
| `srv/`           | Service models and implementation code                       |
| `srv/external/`  | External service definitions (OData EDMX/CSN for S/4HANA)    |
| `package.json`   | Project metadata and configuration                           |
| `.env`           | Environment variables for credentials (not committed)         |

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)
- Access to SAP S/4HANA OData APIs (for Purchase Order and Business Partner)

## Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd cds-server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

This project requires credentials to access SAP S/4HANA OData services. Set the following environment variables (e.g., in a `.env` file at the project root):

```
BT_USERNAME=<your-s4hana-username>
BT_PASSWORD=<your-s4hana-password>
```

> **Note:** Never commit your `.env` file or credentials to version control.

## Running the Project

Start the CAP server:

```sh
cds watch
```

By default, the server will connect to the external OData services defined in `srv/external/` using the credentials provided.

## Service Endpoints

- **Purchase Order Service**: Proxies and extends the S/4HANA Purchase Order OData API.
- **Business Partner Service**: Proxies and extends the S/4HANA Business Partner OData API.

Service definitions and handlers are located in `srv/`:
- `business-partner.cds` / `business-partner.js`
- `purchase-order.cds` / `purchase-order.js`

## Development

To start the server in watch mode (auto-reloads on changes):

```sh
npx cds watch
```

## Learn More

- [CAP Documentation](https://cap.cloud.sap/docs/)
- [SAP Cloud SDK](https://sap.github.io/cloud-sdk/docs/js/)

---

For questions or contributions, please open an issue or pull request.
