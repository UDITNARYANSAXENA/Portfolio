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
              description="This project is a simple educational platform designed to enhance interaction and communication between teachers and students. The platform provides a centralized space where teachers can share learning materials, notes, assignments, and other educational resources, while students can easily access and engage with them in an organized and user-friendly environment.

              The main goal of the system is to make learning more accessible, interactive, and efficient, especially in online and blended learning contexts. It aims to simplify the teaching process for educators and provide students with a structured way to manage their learning content."
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
              title="Student's Assignment"
              description="Our website serves as an interactive bridge between teachers and students, making the assignment process efficient, organized, and easy to manage. Teachers can create and assign tasks either to the entire class or to selected students based on need or learning level. Each assignment includes clear instructions, deadlines, and the required materials, ensuring that students always know exactly what is expected.Students can easily access their assigned tasks, track deadlines, and submit their work directly through the platform. Once submitted, assignments are stored securely and are accessible to teachers for review and grading. The platform also supports real-time updates and notifications, helping both teachers and students stay on track."
              ghLink="https://github.com/UDITNARYANSAXENA/teacher-student"
              demoLink="https://teacher-student-wheat.vercel.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Moonlight Vision - Software Company "
              description="Welcome to our software company’s official website—your gateway to innovative digital solutions. We specialize in designing and developing cutting-edge software that helps businesses simplify operations, improve efficiency, and unlock new opportunities for growth. With a strong focus on reliability, performance, and user-friendly design, our products are built to meet the evolving needs of modern organizations.Our team of skilled developers, designers, and technology experts works closely with clients to understand their goals and deliver customized solutions that truly make an impact. From web and mobile applications to enterprise systems and cloud-based platforms, we are committed to providing technology that empowers businesses to stay ahead in a fast-changing digital world."
              ghLink="https://github.com/UDITNARYANSAXENA/MoonlightVision"
              demoLink="https://moonlight-vision.vercel.app/"
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
