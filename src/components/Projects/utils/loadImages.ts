import { getFileNameFromPath } from "./utils";
import projectPlaceholder from '@content/projects/images/project-placeholder.svg'

const images = import.meta.glob('@content/projects/images/*', 
  { eager: true, import: 'default'}) as Record<string, string>;


export const makeImageMap = () => Object.entries(images).reduce<Record<string, string>>(
  (map, [path, imageUrl]) => {

    const fileName = getFileNameFromPath(path);
    if (fileName) {
      map[fileName] = imageUrl
    }
    return map
  },
  {}
)

export const createFallbackProjectImage = (_label: string): string => projectPlaceholder






