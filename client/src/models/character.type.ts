export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  dimesion: string;
  image: string;
  createInDB: boolean;
  LocationId: string;
}

export const CharacterEmptyState: Character = {
  id: "",
  name: "",
  createInDB: false,
  dimesion: "",
  gender: "",
  image: "",
  LocationId: "",
  species: "",
  status: "",
  type: "",
};
