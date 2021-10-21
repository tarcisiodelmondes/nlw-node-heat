import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1634652834242 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "text", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "user_id", type: "uuid" },
        ],
        foreignKeys: [
          {
            name: "FKUserIdMessages",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}
