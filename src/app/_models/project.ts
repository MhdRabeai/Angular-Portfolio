import { Tag } from './tag';

export interface Project {
  id: number;
  name: string;
  desc: string;
  description: string;
  gitHubLink: string;
  projectLink: string;
  pictures: string[];
  tags: Tag[];
}
