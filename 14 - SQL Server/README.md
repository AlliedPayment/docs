#SQL Server

## How to use DAC
http://blogs.lessthandot.com/index.php/datamgmt/dbprogramming/using-a-dedicated-administrator-connection/

## Ola Hollengren Index Scripts

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
