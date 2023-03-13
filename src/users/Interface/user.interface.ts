import { v4 as uuid } from 'uuid';
// USO INTERNAMENTE EN MI CODIGO
export interface UserInterface {
  uuid: string;
  name: string;
  lastName: string;
  email: string;
}