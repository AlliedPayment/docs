#SQL Server

## How to use DAC
http://blogs.lessthandot.com/index.php/datamgmt/dbprogramming/using-a-dedicated-administrator-connection/

## Ola Hollengren Index Scripts

If you want to see the current fragmentation run this:
```
SELECT dbschemas.[name] as 'Schema',
dbtables.[name] as 'Table',
dbindexes.[name] as 'Index',
indexstats.avg_fragmentation_in_percent,
indexstats.page_count
FROM sys.dm_db_index_physical_stats (DB_ID(), NULL, NULL, NULL, NULL) AS indexstats
INNER JOIN sys.tables dbtables on dbtables.[object_id] = indexstats.[object_id]
INNER JOIN sys.schemas dbschemas on dbtables.[schema_id] = dbschemas.[schema_id]
INNER JOIN sys.indexes AS dbindexes ON dbindexes.[object_id] = indexstats.[object_id]
AND indexstats.index_id = dbindexes.index_id
WHERE indexstats.database_id = DB_ID()
ORDER BY indexstats.avg_fragmentation_in_percent desc
```

Download these two files:

- https://ola.hallengren.com/scripts/CommandExecute.sql
- https://ola.hallengren.com/scripts/IndexOptimize.sql

Run this script after the previous files are run individually:
```
EXECUTE dbo.IndexOptimize
@Databases = 'USER_DATABASES',
@FragmentationLow = NULL,
@FragmentationMedium = 'INDEX_REORGANIZE,INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE',
@FragmentationHigh = 'INDEX_REBUILD_ONLINE,INDEX_REBUILD_OFFLINE',
@FragmentationLevel1 = 50,
@FragmentationLevel2 = 80
```

Docs: https://ola.hallengren.com/sql-server-index-and-statistics-maintenance.html

##Clear wait stats

`DBCC SQLPERF ('sys.dm_os_wait_stats', CLEAR);`
