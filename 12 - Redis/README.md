#Redis

We use Redis as our key/value store useful for caching.

##Redis Client

Redis can be managed remotely by connecting: `redis-cli -h rediscache-001.67wwrb.0001.use1.cache.amazonaws.com`

###Install the client
You can [use Chocolatey](../13 - Chocolatey) to install the client by running `choco install redis`.

Example commands:

http://redis.io/topics/rediscli
http://redis.io/commands

```
FLUSHDB
OK
FLUSH

FLUSHALL
OK
```