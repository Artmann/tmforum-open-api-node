## Database

To make changes to the schema, first, update the schema in
`prisma/schema.prisma`. Then run
`yarn prisma migrate dev --name added_job_title` to create the migration.

Apply the migrations by running:

```shell
yarn prisma migrate deploy
```
