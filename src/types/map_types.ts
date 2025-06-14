export type City = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
};

export type Point = {
    title: string | undefined;
    lat: number | undefined;
    lng: number | undefined;
};

export type Points = Point[];
