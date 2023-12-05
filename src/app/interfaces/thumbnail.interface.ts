import { Time } from "@angular/common";

export interface IThumbnail {
    title: string;
    description:string;
    rating:number;
    duration:Time;
    genre:string[];
    releasedDate:Date,
    trailerLink:string,
    imageName:string
}