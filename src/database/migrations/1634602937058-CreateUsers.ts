import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1634602937058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          { name: "name", type: "varchar" },
          { name: "github_id", type: "int" },
          { name: "login", type: "varchar" },
          { name: "avatar_url", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
