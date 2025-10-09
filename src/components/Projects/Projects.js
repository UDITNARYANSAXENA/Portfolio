import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Prescripto - Doctor Appointment"
              description="The Doctor Appointment Website is a role-based web application designed to streamline the process of booking and managing medical appointments. Patients can easily register, log in, view available doctors, and book appointments based on availability. Doctors have access to a personalized dashboard where they can manage appointment requests, update their availability status, and view upcoming schedules. Admins can manage users, approve doctor accounts, and oversee the overall functioning of the system. The platform features secure authentication, real-time appointment tracking, and a clean, responsive UI. Built using React.js for the frontend and Node.js with Express.js and MongoDB on the backend, the system ensures smooth, scalable, and secure user interactions."
              ghLink="https://github.com/UDITNARYANSAXENA/Doctor"
              demoLink="https://doctor-nu-five.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Student Teacher Portal"
              description="This project is a simple educational platform designed to enhance interaction between teachers and students. It allows teachers to share their content and resources, while students can easily access them in one place. The main goal is to make learning more easy, organized, and accessible. Overall, it serves as a basic educational web project created for practice and demonstration purposes."
              ghLink="https://github.com/UDITNARYANSAXENA/teacher-student"
              demoLink="https://teacher-student-wheat.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Foodie - Food Delivery"
              description="The Food Delivery Application is a full-stack web platform designed to simplify the process of ordering food online. Users can browse a wide range of restaurants, explore menus, add items to their cart, and place orders with secure online payment. The application includes user authentication using JWT, ensuring a safe and personalized experience. A dynamic cart and order history system helps users manage their purchases efficiently. Admins have access to a dedicated dashboard where they can manage restaurants, menus, user accounts, and order statuses. The frontend is built using React.js and Tailwind CSS for a responsive and modern UI, while the backend leverages Node.js, Express.js, and MongoDB for robust data handling."
              ghLink="https://github.com/UDITNARYANSAXENA/Food-delivery"
              demoLink="https://food-delivery-nrha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Joblio - Job Portal"
              description="The Job Portal Website is a full-stack web application that connects job seekers with employers through an intuitive and responsive platform. Users can register as either candidates or recruiters. Job seekers can create profiles, upload resumes, browse job listings, apply for jobs, and track their application status. Recruiters can post job openings, view candidate applications, and manage the recruitment process through a dedicated dashboard. The platform includes secure authentication, role-based access, search and filtering functionalities, and admin controls for managing users and job listings. Built using React.js, Node.js, Express.js, and MongoDB, the application ensures efficient data handling and a seamless user experience across devices."
              ghLink="https://github.com/UDITNARYANSAXENA/Job-Portal"
              demoLink="https://job-portal-mauve-five.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Expense Manager"
              description="The Expense Manager Application is a personal finance tracking tool that helps users manage their income and expenses effectively. Users can add, edit, and delete transactions, categorize them (e.g., food, travel, bills), and monitor their financial activity through detailed summaries and charts. The application provides monthly balance overviews, spending analytics, and budget-setting features to encourage mindful spending. Built with React.js (or React Native for mobile), Node.js, Express.js, and MongoDB, the platform ensures real-time data updates and secure storage. With a user-friendly interface and responsive design, it offers a seamless experience for tracking daily expenses and maintaining financial discipline"
              ghLink="https://github.com/UDITNARYANSAXENA/expense-manager"
              demoLink="https://expense-manager-eta-two.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Chat Application"
              description="The One-to-One Chat Application is a real-time messaging platform that enables secure and seamless private conversations between two users. It features user authentication, instant message delivery, chat history management, and online/offline status indicators. Messages are exchanged in real-time using Socket.io, ensuring a smooth and responsive chat experience. The application is built with React.js on the frontend and Node.js with Express.js on the backend, using MongoDB for storing user data and chat records. The clean and responsive UI ensures usability across all devices, making it ideal for personal or professional direct messaging"
              ghLink="https://github.com/UDITNARYANSAXENA/CHAT-APP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Todo App Using Native"
              description="The To-Do Application is a mobile productivity app developed using React Native, designed to help users manage daily tasks efficiently on both Android and iOS devices. Users can add, edit, delete, and mark tasks as complete in a simple and intuitive interface. The app supports local state management for offline functionality and provides a smooth, native-like user experience across platforms. With features like due dates, task prioritization, and persistent storage using AsyncStorage or a local database, the app ensures that users stay organized on the go. The clean UI and responsive design make it a reliable tool for personal task tracking."
              ghLink="https://github.com/UDITNARYANSAXENA/TODO-using-React-Native"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
