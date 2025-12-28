# ARCO - Classical Violin Repertoire Explorer

**Live Demo:** [https://kennethjonesmadrid.github.io/se_project_arco/](https://kennethjonesmadrid.github.io/se_project_arco/)

## Overview

ARCO is a React-based web application designed for violinists, music students, and classical music enthusiasts to discover and explore the violin repertoire. The app integrates with the OpenOpus API to provide comprehensive information about classical compositions, with a specialized focus on violin works.

### Key Features

- **Curated Discovery**: Browse featured violin concertos and chamber works from the classical repertoire
- **Smart Search**: Search the entire classical music catalog with automatic filtering for violin-specific works
- **User Authentication**: Create an account to save your favorite works and build your personal collection
- **YouTube Integration**: Instantly search for recordings of any work on YouTube
- **Personalized Profile**: View and manage your saved works in a dedicated profile page
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## Technologies Used

### Frontend

- **React 19** - Modern UI library with latest features
- **React Router DOM v7** - Client-side routing and navigation
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with BEM methodology

### APIs

- **OpenOpus API** - Comprehensive classical music database
- **YouTube Search** - Direct integration for finding recordings

### Development Tools

- **ESLint** - Code quality and consistency
- **GitHub Pages** - Deployment and hosting

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Local Development

1. Clone the repository

```bash
git clone https://github.com/kennethjonesmadrid/se_project_arco.git
cd se_project_arco
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## Usage Guide

### Discovering Works

1. **Browse Featured Works**: The homepage displays a curated selection of violin concertos and chamber works
2. **Search**: Use the search bar to find specific composers, works, or periods
3. **View Details**: Click on any work card to see detailed information including:
   - Complete title and catalog number
   - Composer information
   - Genre and period
   - Direct YouTube search integration

### Managing Your Collection

1. **Create Account**: Click "Sign In" and register with your name, email, and password
2. **Save Works**: Click the heart icon on any work to add it to your collection
3. **View Collection**: Navigate to your profile to see all saved works
4. **Remove Works**: Click the filled heart icon to remove works from your collection

### Playing Recordings

Click the play button on any work card or in the detail modal to search for recordings on YouTube. This opens a new tab with relevant search results for that specific composition.

## Future Enhancements

### Stage 2 (Planned)

- Backend API integration with user database
- Persistent saved works across devices
- User authentication with JWT tokens
- Enhanced search filters (composer, period, difficulty)

### Stage 3 (Planned)

- Direct YouTube player integration
- Spotify Web Player integration
- Practice tracking and notes
- Repertoire recommendations based on saved works
- Social features (share collections, follow other musicians)

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/18_m4s-GoyYAVZU22kcwiLyWDID9pDNYa/view?usp=drive_link), where I describe my project and some challenges I faced while building it.

## Contributing

This project is part of the TripleTen Software Engineering bootcamp curriculum. Feedback and suggestions are welcome!

## License

This project is for educational purposes as part of the TripleTen bootcamp program.

## Author

**Kenneth Jones**

- GitHub: [@kennethjonesmadrid](https://github.com/kennethjonesmadrid)

## Acknowledgments

- **OpenOpus API** for providing comprehensive classical music data
- **TripleTen** for project guidelines and mentorship
- Classical music community for inspiration
