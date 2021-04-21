import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619025195757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {''
        const usersTable: Table = new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'email',
                    type: 'varchar',

                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        })

        await queryRunner.createTable(usersTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
