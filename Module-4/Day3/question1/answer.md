Understanding Project Management in NodeJS

a. Package Managers

What is a package manager?
A package manager is a tool that helps developers install, update, and manage external libraries or modules in a project. It automates dependency handling so you don’t have to manually download and configure files.

Why do we need package managers in backend development?
- Simplifies dependency management: Easily add third-party libraries like Express or Mongoose.
- Ensures consistency: Keeps the same versions across different environments.
- Saves time: Automates installation and updates.
Problems faced if package managers are not used
- Manual downloading and linking of libraries.
- Version conflicts between environments.
- Difficulty maintaining large projects.

b. NPM (Node Package Manager)

What is NPM?
NPM is the default package manager for Node.js. It provides access to a huge registry of reusable libraries.

Why is NPM important for Node.js applications?
- Gives access to thousands of packages.
- Helps manage dependencies easily.
- Supports automation through scripts.

How NPM helps in managing dependencies
- Maintains a list of dependencies in package.json.
- Allows installation of specific versions.
- Provides commands like npm install, npm update, and npm uninstall.

c. Backend Project Initialization

Command used to initialize a backend project
npm init

Difference between npm init and npm init -y
- npm init: Starts an interactive process asking for details like project name, version, description, etc.
- npm init -y: Skips questions and creates a package.json file with default values.

d. Files and Folders Created After Project Initialization
package.json
- Contains metadata about the project.
- Lists dependencies and scripts.
- Acts as the blueprint of the project.
node_modules
- Directory where all installed packages are stored.
- Contains actual code of dependencies.
package-lock.json
- Records exact versions of installed packages.
- Ensures consistency across different environments.

Which files/folders should not be pushed to GitHub and why?
- node_modules: It is large and can be regenerated using package.json. Pushing it wastes space and slows down repositories.
Which files must be committed and why?
- package.json: Defines project dependencies and scripts.
- package-lock.json: Ensures exact dependency versions are installed.
