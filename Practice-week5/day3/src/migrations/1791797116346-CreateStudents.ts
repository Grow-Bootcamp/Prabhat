import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudents1791797116346 implements MigrationInterface {
    name = 'CreateStudents1791797116346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`email\` ON \`students\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`email\` varchar(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD UNIQUE INDEX \`IDX_25985d58c714a4a427ced57507\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`course\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`course\` varchar(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`course\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`course\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP INDEX \`IDX_25985d58c714a4a427ced57507\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`email\` ON \`students\` (\`email\`)`);
    }

}
