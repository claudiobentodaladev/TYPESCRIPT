// Enums (enumeration) is a way to crete enumerated constant named

enum ClothingSize {
  // like this, the elemets are a string in enums positions
  ExtraSmall = "PP",
  Small = "P",
  Medium = "M",
  Large = "G",
  ExtraLarge = "GG",
}

interface Cloth {
  color: string;
  size: ClothingSize;
}
const cloth: Cloth = {
  color: "red",
  size: ClothingSize.Large,
};
