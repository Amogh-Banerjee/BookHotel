export interface HotelCard {
    _id: number;
    imgpath: string;
    title: string;
    rating: string;
    city: string;
    location: string;
    score: Score;
    amenities: string[];
    price: number;
    taxes: number;
  }

  export interface Score{
    scorenum: number;
    scoreDesc: string;
    n_ratings: number;
  }
