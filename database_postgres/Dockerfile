FROM postgres:12.11
COPY schema_v1.sql /docker-entrypoint-initdb.d/1schema.sql
COPY data_v1.sql /docker-entrypoint-initdb.d/2datos.sql