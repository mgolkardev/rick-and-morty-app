// SSG config
export const revalidate = 360;
export const dynamicParams = true;
//

export {
  default,
  generateStaticParams,
  generateMetadata,
} from "modules/character/views/character.page";
