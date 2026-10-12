import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  @Column({ type: "varchar", length: 100 })
  name!: string;

  @IsEmail()
  @Column({ type: "varchar", length: 150, unique: true })
  email!: string;

  @IsInt()
  @Min(16)
  @Max(100)
  @Column({ type: "int" })
  age!: number;

  @IsIn(["BCA", "BSc CSIT", "BIT", "BIM"])
  @Column({ type: "varchar", length: 50 })
  course!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
