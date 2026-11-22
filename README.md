# Personal Website

This is my personal website built with Hugo, a fast and modern static site generator. The site features a clean, responsive design powered by Tailwind CSS and uses my own theme, CareerCanvas.

## 🚀 Features

- Built with Hugo static site generator
- Uses CareerCanvas theme (my own creation)
- Styled with Tailwind CSS
- Responsive design with dark mode support
- Typography plugin for better content formatting
- Custom layouts and templates
- Image galleries for project showcases
- Multilingual support (English/French)
- Interactive skills and experience sections

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- [Node.js](https://nodejs.org/) (for npm packages)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🏗️ Installation

1. Clone the repository:
```bash
git clone --recurse-submodules https://github.com/felipecordero/felipecordero.github.io.git
cd felipecordero.github.io
```

2. Install npm dependencies:
```bash
npm install
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

This command runs `hugo server -D`, which starts a local server and includes draft content (content with `draft: true` in the front matter). This is useful for previewing unpublished or in-progress content during development.

The site will be available at `http://localhost:1313`

For the contact form, Pexels hero backgrounds, and the Bible.com verse of the day to work locally, create a `config.local.toml` (gitignored) in the project root:

```toml
[params]
  pexelsapikey = "your_pexels_api_key"
  formspreeendpoint = "https://formspree.io/f/your_form_id"
  # Free App Key from https://platform.youversion.com/
  youversionappkey = "your_youversion_app_key"
```

Run with `hugo server --config config.toml,config.local.toml` (or use `./dev.sh` if it merges both).

Without `youversionappkey`, the hero verse block stays hidden.

## 🏗️ Building

To build the site for production, you need to:

1. Build the CSS with Tailwind:
```bash
npm run build:css
```

2. Build the site with Hugo:
```bash
npm run build
```

Or you can do both in one command:
```bash
npm run build:css && npm run build
```

The built site will be in the `public/` directory.

Note: The CSS build step is necessary because the site uses Tailwind CSS, which needs to be processed to generate the final CSS file with only the used styles.

### Deploying

For the contact form, Pexels backgrounds, and verse of the day, set at build time: `HUGO_PARAMS_PEXELSAPIKEY`, `HUGO_PARAMS_FORMSPREEENDPOINT`, `HUGO_PARAMS_YOUVERSIONAPPKEY` (no underscores in the param name).

## 📁 Project Structure

- `assets/` - Contains source files for CSS, JavaScript, and other assets
- `content/` - Contains the content of your site
- `static/` - Contains static files like images
- `themes/careercanvas/` - Contains the CareerCanvas theme
- `config.toml` - Main configuration file
- `tailwind.config.js` - Tailwind CSS configuration

## 🛠️ Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Typography plugin for Tailwind CSS
- [CareerCanvas](https://github.com/felipecordero/careercanvas) - Custom Hugo theme

## 👨‍💻 About the Theme

The CareerCanvas theme is my own creation, designed specifically for technical and engineering portfolios. It features:
- Modern, responsive design
- Dark mode support
- Interactive components
- Image galleries
- Multilingual support
- Optimized for technical content

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/felipecordero/felipecordero.github.io/issues).

## 📫 Contact

For any questions or suggestions, please open an issue in the GitHub repository or visit [felipecordero.com](https://felipecordero.com).

## 🚨 Important Note

The built CSS file (`themes/careercanvas/static/css/main.css`) is managed by the theme submodule and should not be committed separately in this repository. If you need to update the CSS, please do so in the theme repository and then update the submodule here. 