import { routes } from '~/constants/routes';
import { pagesTitles } from '~/constants/pages-titles';

export type Routes = (typeof routes)[keyof typeof routes];

export type PagesTitles = (typeof pagesTitles)[keyof typeof pagesTitles];
