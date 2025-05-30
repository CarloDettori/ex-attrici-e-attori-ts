//MILESTONE 1
type Person = {
  readonly id: number,
  readonly name: string,
  birth_year: number,
  death_year?: number,
  biography: string,
  image: string,
}


//MILESTONE 2
type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: "American" | "British" | "Australian" | "Israeli-American" | "South African" | "French" | "Indian" | "Israeli" | "Spanish" | "South Korean" | "Chinese"
}

//MILESTONE 3


//MILESTONE 4


//MILESTONE 5


//BONUS 1 


//BONUS 2


//BONUS 3