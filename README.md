# AI Finance Platform

<p align="center">
  <img src="./public/logo.png" alt="AI Finance Platform Logo" width="200"/>
</p>

<p align="center">
  A modern, AI-powered personal finance platform to manage your expenses, budgets, and accounts with ease.
</p>

<p align="center">
  <a href="https://welth-ai-finance-paltform.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live-Preview-blue?style=for-the-badge&logo=vercel" alt="Live Preview"/>
  </a>
</p>

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## ✨ Features

- **Dashboard:** A comprehensive overview of your financial status, including account balances and recent transactions.
- **Transaction Management:** Easily add, edit, and delete income and expense transactions.
- **AI Receipt Scanning:** Use the power of Google Gemini to scan your receipts and automatically fill in transaction details.
- **Account Management:** Create and manage multiple financial accounts.
- **Budgeting:** Set up budgets to track your spending and stay on top of your financial goals.
- **Secure Authentication:** User authentication powered by Clerk.
- **Rate Limiting:** Protected against abuse with Arcjet.

## 📸 Screenshots

### Landing Page

![Landing Page](./public/readme/Landing%20Page.jpeg)

### Dashboard

![Dashboard](./public/readme/Dashboard.jpeg)

### Account Details

![Account Details](./public/readme/Account.jpeg)

### Add Transaction

![Add Transaction](./public/readme/Add%20Transaction.jpeg)

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **AI:** [Google Gemini](https://gemini.google.com/)
- **Security:** [Arcjet](https://arcjet.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/amaan-ur-raheman/welth-ai-finance-paltform.git
    cd welth-ai-finance-paltform
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the following variables. You can get the keys from the respective services.

    ```env
    # PostgreSQL
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

    # Clerk
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

    # Google Gemini
    GEMINI_API_KEY=

    # Arcjet
    ARCJET_KEY=
    ```

4.  **Run database migrations:**

    ```bash
    npx prisma db push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or create a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Amaan Ur Raheman - [@amaan-ur-raheman](https://www.linkedin.com/in/amaan-ur-raheman-shaikh-215768281) - [amaanurrahemanshaikh@gmail.com](mailto:amaanurrahemanshaikh@gmail.com)

Project Link: [https://github.com/amaan-ur-raheman/welth-ai-finance-paltform](https://github.com/amaan-ur-raheman/welth-ai-finance-paltform)
