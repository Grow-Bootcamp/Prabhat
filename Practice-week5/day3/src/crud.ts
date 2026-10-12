import { AppDataSource } from "./data-source.js";
import { Student } from "./entities/Student.js";

await AppDataSource.initialize();

try {
  const studentRepository = AppDataSource.getRepository(Student);

  // CREATE a new student
  const newStudent = studentRepository.create({
    name: "Prabhat Karki",
    email: "prabhat@example.com",
    age: 20,
    course: "BSc CSIT",
  });

  const savedStudent = await studentRepository.save(newStudent);
  console.log("New student created:", savedStudent);

  // READ all students
  const allstudents = await studentRepository.find();
  console.log("All students:", allstudents);

  // READ a student by ID
  const foundStudent = await studentRepository.findOneBy({
    id: savedStudent.id,
  });
  console.log("Found student:", foundStudent);

  // UPDATE a student
  await studentRepository.update(savedStudent.id, { age: 22 });
  console.log("Student updated:", foundStudent);

  // // DELETE a student
  // await studentRepository.delete(savedStudent.id);
  // console.log("Student deleted:", savedStudent.id);
} catch (error) {
  console.log("CRUD operation failed:", error);
} finally {
  await AppDataSource.destroy();
}
