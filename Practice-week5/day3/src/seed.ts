import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
import { Student } from "./entities/Student.js";

await AppDataSource.initialize();

try {
  const repository = AppDataSource.getRepository(Student);

  const students = [
    {
      name: "Ram Sharma",
      email: "ram@example.com",
      age: 20,
      course: "BSc CSIT",
    },
    {
      name: "Sita Thapa",
      email: "sita@example.com",
      age: 21,
      course: "BCA",
    },
    {
      name: "Hari Karki",
      email: "hari@example.com",
      age: 22,
      course: "BIT",
    },
  ];

  for (const data of students) {
    const existing = await repository.findOneBy({
      email: data.email,
    });

    if (!existing) {
      const student = repository.create(data);
      await repository.save(student);
      console.log(`Created ${data.name}`);
    } else {
      console.log(`Skipped ${data.email}: already exists`);
    }
  }
} catch (error) {
  console.error("Seeding failed:", error);
} finally {
  await AppDataSource.destroy();
}