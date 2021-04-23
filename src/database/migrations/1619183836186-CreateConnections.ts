import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnections1619183836186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const connectionTable: Table = new Table({
            name: 'connections',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'admin_id',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'socket_id',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        })

        const connectionForeignKey: TableForeignKey = new TableForeignKey({
            name: 'FKConnection',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
        })

        await queryRunner.createTable(connectionTable)
        await queryRunner.createForeignKey('connections', connectionForeignKey)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('connections', 'FKConnection')
        await queryRunner.dropTable('connections')
    }

}
