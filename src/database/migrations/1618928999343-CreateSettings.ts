import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618928999343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const settingsTable: Table = new Table({
            name: 'settings',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    // generationStrategy: 'uuid',
                },
                {
                    name: 'username',
                    type: 'varchar',
                },
                {
                    name: 'chat',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        })

        await queryRunner.createTable(settingsTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('settings')
    }

}
