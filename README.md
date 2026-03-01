# Jan Kjær – Author Portfolio

A portfolio website for author Jan Kjær, built with React, TypeScript, and Vite.

## Development

```bash
pnpm install
pnpm dev
```

## Deploying on Railway

This project is configured for deployment on [Railway](https://railway.app) via the included `railway.json` file. Railway will automatically build the project with nixpacks and serve the static output.

### First-time deployment

1. Go to [railway.app](https://railway.app) and log in.
2. Click **New Project → Deploy from GitHub repo** and select this repository.
3. Railway will detect the configuration in `railway.json` and deploy automatically.

### Giving embret (or anyone else) access to deploy

1. Open your Railway project.
2. Click **Settings** in the top navigation.
3. Select the **Members** tab.
4. Click **Invite Member** and enter embret's email address or GitHub username.
5. Choose the **Member** role (allows deploys and config changes) or **Admin** for full access.
6. Click **Send Invite** – embret will receive an email invitation.

> **Note:** The person being invited must have a Railway account (or create one when accepting the invite).

