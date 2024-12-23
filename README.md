# Nova Devs - Web Development Platform

## About

Nova Devs is a multicultural team specializing in custom web and cross-platform application development. Our focus is on delivering tailored solutions to international clients through a seamless and secure collaboration process. We work exclusively through [Upwork](https://www.upwork.com/agencies/1864021705604676426/) to ensure transparency and professionalism in every project we undertake.

## License

This project is open-source software licensed under the [GPL-3.0 license](https://opensource.org/licenses/GPL-3.0). You are free to fork, modify, and use it in your projects as per the terms of the license.

## Project Structure

Inside your project, you will find the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

### Folder Details:
- **`src/pages/`**: Contains `.astro` or `.md` files. Each file is mapped to a route based on its file name.
- **`src/components/`**: Includes all reusable components for your project.
- **`src/data/`**: Stores any static JSON or data files used throughout the site.
- **`src/styles/`**: Contains the `global.css` file for styling with Tailwind CSS.
- **`public/`**: Houses static assets like images or SVGs.

## Tailwind CSS Configuration

This project uses Tailwind CSS V4. Instead of using a `tailwind.config.cjs` file, styles are managed directly in the `global.css` file using the `@theme` directive. For example:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";

@theme {
  /* Custom CSS goes here */
}
```

## Commands

All commands should be run from the root directory of the project:

| Command                | Action                                           |
|------------------------|--------------------------------------------------|
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Builds the production site to `./dist/`          |
| `npm run preview`      | Previews the build locally before deployment     |
| `npm run astro ...`    | Runs Astro CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Displays help for Astro CLI commands             |

## Deployment

Your production-ready build will be output to the `./dist/` directory after running `npm run build`. You can deploy this folder to your hosting provider of choice.

## Contact

For inquiries or collaboration opportunities, connect with us through:
- [Upwork](https://www.upwork.com/agencies/1864021705604676426/)
- [LinkedIn](https://www.linkedin.com/company/nova-devs-eu/)

---

Nova Devs: Innovating the future, one line of code at a time.
