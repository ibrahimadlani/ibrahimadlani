 # Ibrahim Adlani - Portfolio
 
 Welcome to the repository for my personal portfolio website! This project showcases my work as a software engineer, highlighting my skills and projects in a visually appealing and user-friendly manner.
 
 ## Technologies Used
 
 - **Next.js**: A React framework for building fast and user-friendly web applications.
 - **Tailwind CSS**: A utility-first CSS framework for creating custom designs without writing custom CSS.
 - **AWS Amplify**: A platform for building scalable mobile and web apps, used for deploying this website.
 
 ## Getting Started
 
 ### Prerequisites
 
 To run this project locally, you will need:
 
 - Node.js (v14 or higher)
 - npm (v6 or higher) or Yarn
 
 ### Installation
 
 1. **Clone the repository:**
 
    ```bash
    git clone https://github.com/ibrahimadlani/ibrahimadlani.git
    cd ibrahimadlani
    ```
 
 2. **Install dependencies:**
 
    Using npm:
 
    ```bash
    npm install
    ```
 
    Using Yarn:
 
    ```bash
    yarn install
    ```
 
 ### Running the Development Server
 
 To start the development server, use the following command:
 
 Using npm:
 
 ```bash
 npm run dev
 ```
 
 Using Yarn:
 
 ```bash
 yarn dev
 ```
 
 Open your browser and navigate to `http://localhost:3000` to see the website in action.
 
 ### Building for Production
 
 To create an optimized production build, use the following command:
 
 Using npm:
 
 ```bash
 npm run build
 ```
 
 Using Yarn:
 
 ```bash
 yarn build
 ```
 
 This will create a `.next` folder with the production build.
 
 ### Static Export (Optional)
 
 If you want to generate a static export of the site, run:
 
 Using npm:
 
 ```bash
 npm run export
 ```
 
 Using Yarn:
 
 ```bash
 yarn export
 ```
 
 This will create an `out` folder with the exported static site.
 
 ## Deployment
 
 This site is deployed using AWS Amplify. The deployment process is automated with each commit pushed to the `main` branch.
 
 ### Continuous Deployment with AWS Amplify
 
 1. **Connect your GitHub repository to AWS Amplify:**
 
    - Go to the AWS Amplify Console.
    - Click on "Connect App".
    - Choose "GitHub" and authorize Amplify to access your repository.
    - Select your repository and branch (e.g., `main`).
 
 2. **Configure build settings:**
 
    In the Amplify Console, you can specify your build settings in the `amplify.yml` file:
 
    ```yaml
    version: 1
    applications:
      - frontend:
          phases:
            preBuild:
              commands:
                - npm install
            build:
              commands:
                - npm run build
          artifacts:
            baseDirectory: .next
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*
    ```
 
 3. **Deploy the site:**
 
    Amplify will automatically build and deploy the site whenever you push changes to the specified branch.
 
 ## Project Status
 
 **Development in Progress**
 
 This site is currently under active development. New features and improvements are being added regularly. Feel free to check back for updates.
 
 ## Contributing
 
 Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.
 
 ## Contact
 
 For any inquiries, please contact me at [ibrahim@adlani.com](mailto:ibrahim@adlani.com).
 
 ---
 
 Thank you for visiting my portfolio! I hope you enjoy exploring my work.
