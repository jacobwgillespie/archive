package main

import (
	"time"

	"github.com/garyburd/redigo/redis"
)

func newRedisPool(server, password string) *redis.Pool {
	return &redis.Pool{
		MaxIdle:     3,
		IdleTimeout: 240 * time.Second,
		Dial: func() (redis.Conn, error) {
			c, err := redis.Dial("tcp", server)
			if err != nil {
				return nil, err
			}
			if password != "" {
				if _, err := c.Do("AUTH", password); err != nil {
					c.Close()
					return nil, err
				}
			}
			return c, err
		},
		TestOnBorrow: func(c redis.Conn, t time.Time) error {
			_, err := c.Do("PING")
			return err
		},
	}
}

func CacheGet(key string) interface{} {
	conn := pool.Get()
	defer conn.Close()
	v, err := conn.Do("HGET", "buildcache", key)
	if err != nil {
		return nil
	}
	return v
}

func CachePut(key string, val interface{}, timeout int64) error {
	conn := pool.Get()
	defer conn.Close()

	_, err := conn.Do("HSET", "buildcache", key, val)
	return err
}

func CacheDelete(key string) error {
	conn := pool.Get()
	defer conn.Close()

	_, err := conn.Do("HDEL", "buildcache", key)
	return err
}

func CacheIsExist(key string) bool {
	conn := pool.Get()
	defer conn.Close()

	v, err := redis.Bool(conn.Do("HEXISTS", "buildcache", key))
	if err != nil {
		return false
	}
	return v
}

func CacheClearAll() error {
	conn := pool.Get()
	defer conn.Close()

	_, err := conn.Do("DEL", "buildcache")
	return err
}
