import { DATABASE_DATE_FORMAT } from '$env/static/private';
import { PUBLIC_TIMEZONE } from '$env/static/public';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { pipe } from 'ramda';

const now = () => new Date().toISOString();

const utcInPanama = (UTC: string) => utcToZonedTime(UTC, PUBLIC_TIMEZONE);

export const nowInPanama = pipe(now, utcInPanama);

export const nowInPanamaFormatted = () => format(nowInPanama(), DATABASE_DATE_FORMAT);
