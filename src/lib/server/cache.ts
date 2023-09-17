import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: '',
	token:
		'AZxsASQgYWJlOWMxOWItNDY1My00MDdlLTkyZGMtMTYwMjVmMTE3NTk4MmQyYTNhZDgxMWRiNGI1YTliMGM5MTQ1NzM5YzcwZjM='
});

const data = await redis.set('foo', 'bar');
