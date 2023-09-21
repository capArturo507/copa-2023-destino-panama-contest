import { DATABASE_DATE_FORMAT, TIMEZONE } from '$env/static/private';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { pipe } from 'ramda';

const now = () => new Date().toISOString();

const utcInPanama = (UTC: string) => utcToZonedTime(UTC, TIMEZONE);

const nowInPanama = pipe(now, utcInPanama);

export const nowInPanamaFormatted = () => format(nowInPanama(), DATABASE_DATE_FORMAT);
