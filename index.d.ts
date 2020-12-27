// Array commons
export function addArrayElement(array: any[], element: any): any[];
export function updateArrayElement(array: any[], element: any, key?: string): any[];
export function updateArrayElements(array: any[], elements: any, key?: string): any[];
export function removeArrayElement(array: any[], element: any, key?: string): any[];
export function mapArrayToObject(array: any[], key?: string): any;

// Date commons
export const monthNamesFR: string[];
export const weekDayNamesFR: string[];
export function getLocalDate(): string;
export function getYear(date: string): string;
export function getMonth(date: string): string;
export function getDay(date: string): string;
export function getNumberOfDaysInMonth(y: number, m: number): number;
export function getFirstDayOfMonth(date: string): string;
export function getLastDayOfMonth(date: string): string;
export function getMonthDays(date: string): string[];
export function getMonthDates(date: string): string[];
export function getMonthName(date: string): string;

// Env commons
export const isBrowser: boolean;
export const isWebWorker: boolean;
export const isNode: boolean;

// Math commons
export function round(x: number, p?: number): number;

// UUID commons
export const uuidVersions: Object;
export function generateUUID(version?: string): string;
export function generateUUIDv4(): string;
